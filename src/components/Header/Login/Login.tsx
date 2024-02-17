import { Link } from "react-router-dom";
import CustomButton from "../../Button/Button";
const Login = () => {
  return (
    <div className="flex items-center">
      <Link
        to={"/login"}
        className="font-semibold text-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221] ml-3"
      >
        login
      </Link>
      <CustomButton contentButton="Sign up" />
    </div>
  );
};

export default Login;
