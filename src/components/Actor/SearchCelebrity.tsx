const SearchCelebrity = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-white text-xl mb-3">SearchCelebrity</h1>
      <div className="border-t text-[#abb7c4] py-3">
        <div className="mt-3">
          <label className="block font-bold mb-2" htmlFor="">
            Celebrity name
          </label>
          <input
            className="h-10 rounded-md bg-[#233a50] pl-1 outline-none w-full"
            type="text"
            placeholder="Enter keyword"
          />
        </div>
        <div className="mt-3">
          <label className="block font-bold mb-2" htmlFor="">
            Celebrity Letter
          </label>
          <select
            className="h-10 rounded-md bg-[#233a50] pl-1 outline-none w-full"
            name=""
            id=""
          >
            <option value="">Actor</option>
            <option value="">Performer</option>
          </select>
        </div>
        <div className="mt-3">
          <label className="block font-bold mb-2" htmlFor="">
            Category
          </label>
          <select
            className="h-10 rounded-md bg-[#233a50] pl-1 outline-none w-full"
            name=""
            id=""
          >
            <option value="">Viet Nam</option>
            <option value="">Us</option>
          </select>
        </div>
        <div className="mt-3">
          <label className="block font-bold mb-2" htmlFor="">
            Year of birth
          </label>
          <div className="flex justify-between gap-5">
            <select
              className="h-10 rounded-md bg-[#233a50] pl-1 outline-none w-full"
              name=""
              id=""
            >
              <option value="">1990</option>
              <option value="">Other</option>
            </select>
            <select
              className="h-10 rounded-md bg-[#233a50] pl-1 outline-none w-full"
              name=""
              id=""
            >
              <option value="">2002</option>
              <option value="">Other</option>
            </select>
          </div>
        </div>
        <button className="mt-3 w-full h-10 text-white bg-red-500 rounded font-bold uppercase">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SearchCelebrity;
