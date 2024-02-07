const ChangePass = () => {
  return (
    <div>
      <form className="password">
        <h4>02. Change password</h4>
        <div className="row">
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">Old Password</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="**********"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">New Password</label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="***************"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 form-it">
            <label className="text-[#abb7c4] font-medium">
              Confirm New Password
            </label>
            <input
              className="text-[#abb7c4] bg-[#233a50] h-10 rounded-md pl-2 w-full mt-3"
              type="text"
              placeholder="*************** "
            />
          </div>
        </div>
        <div className="">
          <div className="mt-4">
            <div className="">
              <button className="px-10 py-3 bg-[#dd003f] text-white font-bold text-sm uppercase rounded-full hover:text-black duration-300">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePass;
