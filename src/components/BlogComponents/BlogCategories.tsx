const BlogCategories = () => {
  return (
    <div className="mb-[60px]">
      <h4 className=" text-lg text-white uppercase font-bold mb-[30px] pb-[15px] border-b border-[#405266]">
        Categories
      </h4>
      <ul>
        <li className="mb-[15px]">
          <a className="text-[#abb7c4] font-light text-sm" href="#">
            Awards (50)
          </a>
        </li>
        <li className="mb-[15px]">
          <a className="text-[#abb7c4] font-light text-sm" href="#">
            Box office (38)
          </a>
        </li>
        <li className="mb-[15px]">
          <a className="text-[#abb7c4] font-light text-sm" href="#">
            Film reviews (72)
          </a>
        </li>
        <li className="mb-[15px]">
          <a className="text-[#abb7c4] font-light text-sm" href="#">
            News (45)
          </a>
        </li>
        <li className="mb-[15px]">
          <a className="text-[#abb7c4] font-light text-sm" href="#">
            Global (06)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategories;
