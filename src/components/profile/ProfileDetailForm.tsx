const ProfileDetailForm = () => {
  return (
    <div className="p-7 border-2 border-[#0f2133]">
      <form className="user text-sm">
        <h4 className="uppercase text-white font-bold">Profile details</h4>
        <div className="sm:grid grid-cols-2 gap-x-7 mt-5">
          <div className="mt-3">
            <label className="text-[#abb7c4] font-medium">Username</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-2"
              type="text"
              placeholder="edwardkennedy"
            />
          </div>
          <div className="mt-3">
            <label className="text-[#abb7c4] font-medium">Email Address</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-2"
              type="text"
              placeholder="edward@kennedy.com"
            />
          </div>
          <div className="mt-3">
            <label className="text-[#abb7c4] font-medium">First Name</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-2"
              type="text"
              placeholder="Edward "
            />
          </div>
          <div className="mt-3">
            <label className="text-[#abb7c4] font-medium">Last Name</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-2"
              type="text"
              placeholder="Kennedy"
            />
          </div>
          <div className="mt-3">
            <label className="text-[#abb7c4] font-medium">Country</label>
            <select className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-2">
              <option value="united">United States</option>
              <option value="saab">Others</option>
            </select>
          </div>
          <div className="mt-3">
            <label className="text-[#abb7c4] font-medium">State</label>
            <select className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-2">
              <option value="united">New York</option>
              <option value="saab">Others</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <div className="">
            <button className="px-10 py-3 bg-[#dd003f] text-white font-bold text-sm uppercase rounded-full hover:text-black duration-300">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetailForm;
