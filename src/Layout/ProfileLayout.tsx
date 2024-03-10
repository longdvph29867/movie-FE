import NavbarUser from "../components/Profile/NavbarUser";
import ProfileTitle from "../components/Profile/ProfileTitle";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { localUserService } from "../services/localService";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  const user = localUserService.get()?.user;
  return (
    <div>
      <Header />
      <div className="bg-[#020d18] relative">
        <div
          className="absolute w-full h-[350px] top-0 left-0"
          style={{ backgroundImage: "url(/bg-2.jpg)" }}
        ></div>
        <div className="pt-60 py-20 flex mt-5 flex-col lg:flex-row items-center md:items-start justify-between container lg:gap-0 gap-x-4 relative z-10">
          <NavbarUser />
          {/*profile user */}
          <div className="w-full lg:w-3/4">
            <ProfileTitle userName={user?.name} />
            <div className=" bg-[#020d18] mt-10 lg:mt-20 relative">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
