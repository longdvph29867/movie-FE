import { Link } from "react-router-dom";
import { localUserService } from "../../../services/localService";
import loginService from "../../../services/loginService";
import { InforUserType } from "../../../types/login";
const Login = () => {
  const infoUser: InforUserType | null = localUserService.get();
  const handleLogOut = () => {
    const data = {
      refreshToken: (infoUser as InforUserType).tokens.refresh.token,
    };
    loginService
      .logout(data)
      .then((res) => {
        console.log(res);
        localUserService.remove();
        location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-center">
        {!infoUser ? (
          <>
            <Link
              to={"/login"}
              className="font-semibold text-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221] ml-3"
            >
              login
            </Link>
            <Link
              to="/register"
              className="font-semibold text-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221] ml-3"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-[#F27221] text-xl w-10 h-10 ml-4 flex items-center justify-center border border-[#F27221] rounded-full cursor-pointer"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
            <button
              onClick={handleLogOut}
              className="text-[#F27221] text-2xl ml-1 w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
