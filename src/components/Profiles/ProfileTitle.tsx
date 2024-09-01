import { Link } from "react-router-dom";

type Props = {
  userName?: string;
};
const ProfileTitle = ({ userName = "Your" }: Props) => {
  return (
    <div className="absolute lg:static top-28 left-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-white uppercase">
        {userName} profile
      </h1>
      <ul className="flex gap-4 mt-5">
        <li>
          <Link className="text-[#4280bf]" to="">
            Home
          </Link>
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
