import NavbarUser from "../components/profile/NavbarUser";
import ProfileTitle from "../components/profile/ProfileTitle";
// import ProfileDetailForm from "../components/profile/ProfileDetailForm";
import FavoriteItem from "../components/profile/FavoriteItem";

const ProfileLayout = () => {
  return (
    <div className="bg-[#020d18] relative pt-48 -z-20">
      <div
        className="absolute w-full h-[320px] -z-10 top-0 left-0
      bg-[url(https://dims.apnews.com/dims4/default/0a73f78/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc0%2Fd7%2F8952bf0805373c77af588787a7fd%2Fca0bfc7687ac42fa8f4c10c46d5623ad)]"
      >
        <div className="bg-black/80 h-full"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between container lg:gap-0 gap-x-4">
        <NavbarUser />
        {/*profile user */}
        <div className="w-full md:w-3/4">
          <ProfileTitle />
          <div className=" bg-[#020d18] mt-10  md:mt-32">
            <FavoriteItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
