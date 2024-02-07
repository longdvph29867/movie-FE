const NavbarUser = () => {
  return (
    <div className="w-1/5 border-2 border-[#0f2133] bg-[#020d18] h-max">
      {/*nav profile user */}
      <div className="flex flex-col items-center my-8">
        <a href="#">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src="https://i.pinimg.com/236x/dc/cb/ee/dccbee93d3b5334a002e7e5aa9d89b5a.jpg"
          />
          <br />
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-[#dd003f] text-white font-bold text-sm uppercase rounded-md hover:text-black duration-300"
        >
          Change avatar
        </a>
      </div>
      <div className="border-t border-[#0f2133] p-6">
        <p className="text-sm text-[#abb7c4] pb-3">Account Details</p>
        <ul className=" text-white font-bold uppercase text-sm">
          <li className="mb-3">
            <a
              className="mb-3 text-[#dcf836] hover:text-[#dcf836] duration-300"
              href="userprofile.html"
            >
              Profile
            </a>
          </li>
          <li className="mb-3">
            <a
              className="mb-3 hover:text-[#dcf836] duration-300"
              href="userfavoritelist.html"
            >
              Favorite movies
            </a>
          </li>
          <li className="mb-3">
            <a
              className="hover:text-[#dcf836] duration-300"
              href="userrate.html"
            >
              Rated movies
            </a>
          </li>
        </ul>
      </div>
      <div className="p-6 border-t border-[#0f2133]">
        <p className="text-sm text-[#abb7c4] pb-3">Others</p>
        <ul className=" text-white font-bold uppercase text-sm">
          <li className="mb-3">
            <a className="hover:text-[#dcf836] duration-300" href="#">
              Change password
            </a>
          </li>
          <li className="mb-3">
            <a className="hover:text-[#dcf836] duration-300" href="#">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarUser;
