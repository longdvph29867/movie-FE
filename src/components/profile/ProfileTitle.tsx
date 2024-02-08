const ProfileTitle = () => {
  return (
    <div className="absolute md:static -top-44 left-4">
      <h1 className="text-4xl font-bold text-white uppercase">
        Edward kennedy’s profile
      </h1>
      <ul className="flex gap-4 mt-5">
        <li>
          <a className="text-[#4280bf]" href="#">
            Home
          </a>
        </li>
        <li className="text-[#abb7c4] uppercase">
          {" "}
          <i className="mr-4 text-xs fa-solid fa-chevron-right"></i>
          Profile
        </li>
      </ul>
    </div>
  );
};

export default ProfileTitle;
