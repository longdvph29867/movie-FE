import NavbarUser from "../components/profile/NavbarUser";
import ProfileTitle from "../components/profile/ProfileTitle";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { FC } from "react";

type Props = {
  Component: FC;
};
const ProfileLayout = ({ Component }: Props) => {
  return (
    <div>
      <Header />
      <div className="bg-[#020d18] relative py-48">
        <div
          className="absolute w-full h-[320px] top-0 left-0
      bg-[url(https://dims.apnews.com/dims4/default/0a73f78/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc0%2Fd7%2F8952bf0805373c77af588787a7fd%2Fca0bfc7687ac42fa8f4c10c46d5623ad)]"
        >
          <div className="bg-black/90 h-full"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between container lg:gap-0 gap-x-4 relative z-10">
          <NavbarUser />
          {/*profile user */}
          <div className="w-full md:w-3/4">
            <ProfileTitle />
            <div className=" bg-[#020d18] mt-10  md:mt-32">
              <Component />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
