const ProfileDetailForm = () => {
  return (
    <div>
      <form className="user">
        <h4 className="uppercase text-white font-bold">Profile details</h4>
        <div className="grid grid-cols-2 gap-x-7 mt-7">
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">Username</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="edwardkennedy"
            />
          </div>
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">Email Address</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="edward@kennedy.com"
            />
          </div>
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">First Name</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="Edward "
            />
          </div>
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">Last Name</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="Kennedy"
            />
          </div>
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">Country</label>
            <select className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3">
              <option value="united">United States</option>
              <option value="saab">Others</option>
            </select>
          </div>
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">State</label>
            <select className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3">
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
