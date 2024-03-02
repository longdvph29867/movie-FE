import { Link } from "react-router-dom";

const NavbarUser = () => {
  return (
    <div className="px-5 md:px-0 w-full md:w-56 border-2 border-[#0f2133] bg-[#020d18] h-max">
      {/*nav profile user */}
      <div className="flex gap-5 w-full md:flex-col items-center mt-5 md:my-8">
        <a href="#">
          <img
            className="sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] rounded-full"
            src="https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg"
          />
          <br />
        </a>
        <a
          href="#"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-[#ff4d4f] text-white font-bold text-xs sm:text-sm uppercase rounded-md hover:text-black duration-300"
        >
          Change avatar
        </a>
      </div>
      <div className="flex flex-wrap md:block">
        <div className="md:border-t border-[#0f2133]  p-6">
          <p className="text-sm text-[#abb7c4] pb-3">Account Details</p>
          <ul className=" text-white font-bold uppercase text-sm">
            <li className="mb-3">
              <Link
                className="mb-3 text-[#dcf836] hover:text-[#dcf836] duration-300"
                to="profile"
              >
                Profile
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className="mb-3 hover:text-[#dcf836] duration-300"
                to="/profile/farovite"
              >
                Favorite movies
              </Link>
            </li>
            <li className="mb-3">
              <Link
                className="hover:text-[#dcf836] duration-300"
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
                className="hover:text-[#dcf836] duration-300"
                to="/profile/change-password"
              >
                Change password
              </Link>
            </li>
            <li className="mb-3">
              <a className="hover:text-[#dcf836] duration-300" href="#">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
