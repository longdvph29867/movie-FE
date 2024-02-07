import NavbarUser from "../components/profile/NavbarUser";
import ProfileTitle from "../components/profile/ProfileTitle";
import ProfileDetailForm from "../components/profile/ProfileDetailForm";

const ProfileLayout = () => {
  return (
    <div>
      <div className="flex justify-between px-16 bg-[#020d18]">
        <NavbarUser />
        {/*profile user */}
        <div className="w-3/4">
          <ProfileTitle />
          <div className="border-2 border-[#0f2133] bg-[#020d18] mt-28">
            <div className="p-7">
              <ProfileDetailForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
