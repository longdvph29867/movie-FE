const Search = () => {
  return (
    <div>
      <form className="flex items-center rounded-full overflow-hidden relative w-44 duration-500">
        <input
          type="text"
          className="h-10 outline-none py-1 pl-4 pr-10 w-44 placeholder:italic bg-[#233a50] text-[#ABB7C4]"
          placeholder="Search..."
        />
        <button
          type="button"
          className="absolute top-0 right-0 h-full w-10 text-[#F27221] text-lg bg-[#233a50]"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
  );
};

export default Search;
