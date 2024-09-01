import { Link, useLocation } from "react-router-dom";

const NavbarUser = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="px-5 lg:px-0 flex lg:flex-col flex-wrap sm:flex-nowrap gap-5  w-full lg:w-56 border-2 border-[#0f2133] bg-[#020d18] h-max">
      {/*nav profile user */}
      <div className="gap-5 flex-none flex m-auto sm:m-0 flex-col items-center mt-5 md:my-8">
        <a href="#">
          <img
            className="lg:h-[120px] lg:w-[120px] w-[80px] h-[80px] rounded-full m-auto"
            src="https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg"
          />
          <br />
        </a>
        <a
          href="#"
          className="px-3 py-1 sm:px-4 sm:py-2 lg:px-6 bg-[#F27221] text-white font-bold text-xs sm:text-sm uppercase rounded-md hover:text-black duration-300"
        >
          Change avatar
        </a>
      </div>
      <div className="flex flex-wrap lg:block">
        <div className="md:border-t border-[#0f2133]  p-6">
          <p className="text-sm text-[#abb7c4] pb-3">Account Details</p>
          <ul className=" text-white font-bold uppercase sm:text-sm">
            <li className="mb-3">
              <Link
                className={`${
                  path == "/profile" && "text-[#dcf836]"
                } mb-3 hover:text-[#dcf836] duration-300`}
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className={`${
                  path == "/profile/purcharsed-tickets" && "text-[#dcf836]"
                } mb-3 hover:text-[#dcf836] duration-300`}
                to="/profile/purcharsed-tickets"
              >
                Tickets Booked
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className={`${
                  path == "/profile/farovite-movie" && "text-[#dcf836]"
                } mb-3 hover:text-[#dcf836] duration-300`}
                to="/profile/farovite-movie"
              >
                Favorite movies
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className={`${
                  path == "/profile/rated-movies" && "text-[#dcf836]"
                } mb-3 hover:text-[#dcf836] duration-300`}
                to="/profile/rated-movies"
              >
                Rated movies
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-6 md:border-t border-[#0f2133]">
          <p className="text-sm text-[#abb7c4] pb-3">Others</p>
          <ul className=" text-white font-bold uppercase text-sm">
            <li className="mb-3">
              <Link
                className={`${
                  path == "/profile/change-password" && "text-[#dcf836]"
                } mb-3 hover:text-[#dcf836] duration-300`}
                to="/profile/change-password"
              >
                Change password
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
