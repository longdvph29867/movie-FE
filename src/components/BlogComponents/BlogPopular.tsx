const BlogPopular = () => {
  return (
    <div className="mb-[60px]">
      <h4 className=" text-lg text-white uppercase font-bold mb-[30px] pb-[15px] border-b border-[#405266]">
        most popular
      </h4>
      <div className="flex items-center justify-start mb-15">
        <span className="text-[#4f5b68] font-light text-[48px] w-[30%] uppercase">
          01
        </span>
        <h6 className="text-base w-[70%]  font-bold leading-[1px]">
          <a href="#" className="text-[#4280bf] text-sm">
            Korea Box Office: Beauty and the Beast Wins Fourth
          </a>
        </h6>
      </div>
      <div className="flex items-center justify-start mb-15">
        <span className="text-[#4f5b68] font-light text-[48px] w-[30%] uppercase">
          02
        </span>
        <h6 className="text-base w-[70%]  font-bold leading-[1px]">
          <a className="text-[#4280bf] text-sm" href="#">
            Homeland Finale Includes Shocking Death{" "}
          </a>
        </h6>
      </div>
      <div className="flex items-center justify-start mb-15">
        <span className="text-[#4f5b68] font-light text-[48px] w-[30%] uppercase">
          03
        </span>
        <h6 className="text-base w-[70%]  font-bold leading-[1px]">
          <a className="text-[#4280bf] text-sm" href="#">
            Fate of the Furious Reviews What the Critics Saying
          </a>
        </h6>
      </div>
    </div>
  );
};

export default BlogPopular;
