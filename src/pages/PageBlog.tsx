import PageNavigation from "../components/Pagination/Pagination";
import TagItem from "../components/TrailerTag/TagItem";

const PageBlog = () => {
  return (
    <section className="relative font-['Dosis', sans-serif'] ">
      <div
        className="h-[300px] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: 'url("./img//banner-bg.jpeg")' }}
      >
        <div className="pt-14">
          <h1 className="text-4xl font-semibold text-white uppercase">
            BLOG LISTING - LIST
          </h1>
          <ul className="flex items-center justify-center gap-4 mt-3">
            <li className="">
              <a href="#" className="uppercase text-[#4280bf]">
                HOME
              </a>
            </li>
            <i className="text-[#abb7c4] fa-solid fa-chevron-right" />
            <li className="uppercase text-[#abb7c4]"> BLOG LISTING</li>
          </ul>
        </div>
      </div>
      <div className="py-16 bg-[#06121e]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
            <div className="lg:w-3/4">
              {/* list blog*/}
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col lg:flex-row w-auto lg:w-full bg-[#071829] overflow-hidden mb-[30px]">
                  <img
                    className="transition-all duration-500 ease-out hover:scale-110 w-[35%] rounded-[5px]"
                    src="	http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/bloglist-it1.jpg"
                    alt=""
                  />
                  <div className="p-[30px] ">
                    <h3 className="mt-[15px] text-[24px]">
                      <a href="#" className="text-lg font-bold text-[#4280bf]">
                        Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                      </a>
                    </h3>
                    <span className="text-[#abb7c4] font-light text-xs  ">
                      27 Mar 2017
                    </span>
                    <p className="mt-[15px] text-sm font-light leading-6 text-[#abb7c4]">
                      Africa's burgeoning animation scene got a boost this week
                      with the announcement of an ambitious new partnership that
                      will pair rising talents from across the continent ...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row w-auto lg:w-full bg-[#071829] overflow-hidden mb-[30px]">
                  <img
                    className="transition-all duration-500 ease-out hover:scale-110 w-[35%] rounded-[5px]"
                    src="	http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/bloglist-it1.jpg"
                    alt=""
                  />
                  <div className="p-[30px] ">
                    <h3 className="mt-[15px] text-[24px]">
                      <a href="#" className="text-lg font-bold text-[#4280bf]">
                        Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                      </a>
                    </h3>
                    <span className="text-[#abb7c4] font-light text-xs  ">
                      27 Mar 2017
                    </span>
                    <p className="mt-[15px] text-sm font-light leading-6 text-[#abb7c4]">
                      Africa's burgeoning animation scene got a boost this week
                      with the announcement of an ambitious new partnership that
                      will pair rising talents from across the continent ...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row w-auto lg:w-full bg-[#071829] overflow-hidden mb-[30px]">
                  <img
                    className="transition-all duration-500 ease-out hover:scale-110 w-[35%] rounded-[5px]"
                    src="	http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/bloglist-it1.jpg"
                    alt=""
                  />
                  <div className="p-[30px] ">
                    <h3 className="mt-[15px] text-[24px]">
                      <a href="#" className="text-lg font-bold text-[#4280bf]">
                        Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                      </a>
                    </h3>
                    <span className="text-[#abb7c4] font-light text-xs  ">
                      27 Mar 2017
                    </span>
                    <p className="mt-[15px] text-sm font-light leading-6 text-[#abb7c4]">
                      Africa's burgeoning animation scene got a boost this week
                      with the announcement of an ambitious new partnership that
                      will pair rising talents from across the continent ...
                    </p>
                  </div>
                </div>
              </div>
              <PageNavigation />
            </div>
            <div className=" lg:w-1/4">
              <div className="ml-[60px]">
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
                <div className="text-white mb-[60px] ">
                  <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
                    TAGS
                  </h4>
                  <ul className="flex items-center justify-start flex-wrap font-light capitalize text-[#abb7c4] mt-2.5">
                  <TagItem />
                  </ul>
                  <div></div>
                </div>
                
                <div className="mb-[60px]">
                  <img src="/ads1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBlog;
