import NavbarUser from "../components/Profile/NavbarUser";
import ProfileTitle from "../components/Profile/ProfileTitle";
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
          className="absolute w-full h-[320px] top-0 left-0"
          style={{ backgroundImage: "url(/bg-2.jpg)" }}
        ></div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between container lg:gap-0 gap-x-4 relative z-10">
          <NavbarUser />
          {/*profile user */}
          <div className="w-full md:w-3/4">
            <ProfileTitle />
            <div className=" bg-[#020d18] mt-10  md:mt-28 relative">
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
