
const BlogSearch = () => {
  return (
    <div className="mb-[60px]">
    <h4 className=" text-lg text-white uppercase font-bold mb-[30px] pb-[15px] border-b border-[#405266]">
      Search
    </h4>
    <div className="relative">
      <input
        className="text-sm font-light h-10 pl-2 pr-4  bg-[#233a50] rounded-[3px] w-full"
        type="text"
        placeholder="Enter keywords"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <img
          src="/search-bgsb.png"
          alt="Search"
          className="w-5 h-5"
        />
      </div>
    </div>
  </div>
  )
}

export default BlogSearch
