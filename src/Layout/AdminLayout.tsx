import { FC, useEffect } from "react";
import Login from "../components/Header/Login/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "../components/Search/Search";
import { localUserService } from "../services/localService";

type Props = {
  Component: FC;
};
const AdminLayout = ({ Component }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const infoUser = localUserService.get();
  useEffect(() => {
    if (infoUser?.user.role !== "admin") {
      navigate("/login");
      localUserService.remove();
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-[#f8f9fa]">
      <div className="lg:w-64 lg:px-4 pl-4 lg:min-w-[256px] duration-500">
        <div className="h-full w-8 lg:w-full">
          <Link
            className="block lg:px-8 lg:py-3 my-2 text-sm text-slate-700"
            to="/"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
              className="hidden lg:block"
            />
            {/* <img src={imgLogoIcon} class="lg:hidden inline-block" /> */}
          </Link>
          <hr className="h-px border-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
          <div className="mt-4">
            <ul className="flex flex-col">
              <li>
                <a
                  className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg lg:bg-white lg:shadow-xl"
                  href="#"
                >
                  <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                    <i className="fa-solid fa-house" />
                  </div>
                  <span className="ml-1 opacity-100 hidden lg:block">
                    Movies
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg"
                  href="#"
                >
                  <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 2l-5.5 9h11z" />
                      <circle cx="17.5" cy="17.5" r="4.5" />
                      <path d="M3 13.5h8v8H3z" />
                    </svg>
                  </div>
                  <span className="ml-1 opacity-100 hidden lg:block">
                    Categories
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg"
                  href="#"
                >
                  <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                    <i className="fa-solid fa-user" />
                  </div>
                  <span className="ml-1 opacity-100 hidden lg:block">Uers</span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm flex items-center lg:px-4 py-2.5 rounded-lg"
                  href="#"
                >
                  <div className="lg:mr-2 flex h-8 w-8 items-center justify-center rounded-lg">
                    <i className="fa-solid fa-user" />
                  </div>
                  <span className="ml-1 opacity-100 hidden lg:block">
                    Genre
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-grow px-4 flex flex-col">
        <nav className="flex items-center justify-between py-2">
          <h6 className="font-bold capitalize text-slate-800">Movie. admin</h6>
          <div className="flex sm:items-center sm:flex-row flex-col-reverse items-end gap-1">
            {location.pathname === "/admin/movies" ||
            location.pathname === "/admin/movies/" ? (
              <Search type="admin" />
            ) : (
              <></>
            )}
            <Login />
          </div>
        </nav>
        <div className="flex-grow relative flex flex-col min-w-0 mb-6 bg-white shadow-sm rounded-2xl">
          <Component />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
