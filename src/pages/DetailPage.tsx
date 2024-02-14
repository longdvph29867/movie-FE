import { useEffect, useState } from "react";
import InfoDetail from "../components/DetailPage/InfoDetail";
// import { useParams } from "react-router-dom";

import { Movie } from "../types/movies";
import { movieService } from "../services/movieService";
import { Collapse, Tabs, TabsProps } from "antd";
import showingSevice from "../services/showingSevice";
import { Showing } from "../types/showing";
import { convertDate } from "../util";

const DetailPage = () => {
  // const { id } = useParams();
  const id = "659682f87ccc34bb2e8e75c0";
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [cinemasShowing, setcinemasShowing] = useState<Showing[]>([]);
  useEffect(() => {
    movieService
      .getMovieDetail(id as string)
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    showingSevice
      .getCinemaVyMovie(id)
      .then((response) => {
        console.log(response.data);
        setcinemasShowing(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeTabs = (key: string) => {
    console.log(key);
  };
  const onChangeCollape = (key: string | string[]) => {
    console.log(key);
  };

  const items: TabsProps["items"] = cinemasShowing.map((cinema) => {
    return {
      key: cinema.id,
      label: (
        <div className="text-white group">
          <img width={30} height={30} src={cinema.logo} />
          <p>{cinema.cinemaName}</p>
        </div>
      ),
      children: (
        <Collapse
          className="bg-white"
          items={cinema.listBranch.map((branch) => {
            return {
              key: branch.idBranch,
              label: (
                <div>
                  <p className="font-bold">{branch.cinemaBranchName}</p>
                  <p className="text-sm">{branch.location}</p>
                </div>
              ),
              children: (
                <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-5 gap-2 ">
                  {branch.listTime.map((time) => {
                    return (
                      <div className="border border-gray-300 shadow rounded-lg text-center p-2 hover:shadow-2xl hover:bg-gray-200 cursor-pointer">
                        <p className="font-bold">
                          {convertDate.date(time.showTime)}
                        </p>
                        <p className="font-bold">
                          {convertDate.time(time.showTime)}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <div>
                            <p>Vé thường</p>
                            <span>{time.normalPrice}</span>
                          </div>
                          <div>
                            <p>Vé Vip</p>
                            <span>{time.vipPrice}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ),
            };
          })}
          defaultActiveKey={["1"]}
          onChange={onChangeCollape}
        />
      ),
    };
  });

  return (
    <div className="bg-[#020d18]">
      <section className="relative">
        <div
          className="h-[598px] absolute top-0 left-0 w-full bg-cover bg-top"
          style={{
            backgroundImage:
              'url("http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/sr-single.jpg")',
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/60" />
        </div>
        <div className="container mx-auto relative py-44">
          <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
            <div className="lg:w-3/4">
              <InfoDetail movieDetail={movieDetail} />
              <div className="bg-[#152a3e] p-5 mt-10 text-white">
                <h1 className="font-bold text-xl">Lịch chiếu</h1>
                <Tabs
                  defaultActiveKey="1"
                  items={items}
                  onChange={onChangeTabs}
                  className="text-white"
                />
              </div>
              {/* list movie */}
              <div className="py-16">
                <div className="container mx-auto">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-2xl font-bold">
                      IN THEATER
                    </h3>
                    <div className="text-sm text-[#abb7c4]">
                      VIEW ALL <i className="fa-solid fa-chevron-right" />
                    </div>
                  </div>
                  <ul className="flex flex-wrap text-sm text-white font-semibold gap-5 my-6">
                    <li>
                      <a href="#" className="text-[#DCF836]">
                        #POPULAR
                      </a>
                    </li>
                    <li>
                      <a href="#" className="duration-300 hover:text-[#DCF836]">
                        #COMING SOON
                      </a>
                    </li>
                    <li>
                      <a href="#" className="duration-300 hover:text-[#DCF836]">
                        #TOP RATED
                      </a>
                    </li>
                    <li>
                      <a href="#" className="duration-300 hover:text-[#DCF836]">
                        #MOST REVIEWED
                      </a>
                    </li>
                  </ul>
                  <div className="grid gap-6 place-items-center md:grid-cols-4 sm:grid-cols-2 ">
                    <div className="relative max-w-[190px] group/item-movie">
                      <img src="./img/movie-item.jpeg" />
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex flex-col justify-end shadow-[inset_-5px_-50px_100px_-15px_#000000]">
                        <h4 className="text-white text-sm uppercase font-bold duration-500 group-hover/item-movie:text-[#DCF836]">
                          the revenant
                        </h4>
                        <p className="text-xl text-white font-medium">
                          <i className="fa-solid fa-star text-[#f4b508]" />
                          <span>7.4</span>
                          <span className="text-sm font-light">/10</span>
                        </p>
                      </div>
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex items-center justify-center duration-1000 group-hover/item-movie:bg-black/50">
                        <button className="w-28 h-10 uppercase text-sm text-white font-bold bg-[#F27221] rounded-full invisible opacity-0 duration-500 group-hover/item-movie:visible group-hover/item-movie:opacity-100">
                          read more <i className="fa-solid fa-caret-right" />
                        </button>
                      </div>
                    </div>
                    <div className="relative max-w-[190px] group/item-movie">
                      <img src="./img/movie-item.jpeg" />
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex flex-col justify-end shadow-[inset_-5px_-50px_100px_-15px_#000000]">
                        <h4 className="text-white text-sm uppercase font-bold duration-500 group-hover/item-movie:text-[#DCF836]">
                          the revenant
                        </h4>
                        <p className="text-xl text-white font-medium">
                          <i className="fa-solid fa-star text-[#f4b508]" />
                          <span>7.4</span>
                          <span className="text-sm font-light">/10</span>
                        </p>
                      </div>
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex items-center justify-center duration-1000 group-hover/item-movie:bg-black/50">
                        <button className="w-28 h-10 uppercase text-sm text-white font-bold bg-[#F27221] rounded-full invisible opacity-0 duration-500 group-hover/item-movie:visible group-hover/item-movie:opacity-100">
                          read more <i className="fa-solid fa-caret-right" />
                        </button>
                      </div>
                    </div>
                    <div className="relative max-w-[190px] group/item-movie">
                      <img src="./img/movie-item.jpeg" />
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex flex-col justify-end shadow-[inset_-5px_-50px_100px_-15px_#000000]">
                        <h4 className="text-white text-sm uppercase font-bold duration-500 group-hover/item-movie:text-[#DCF836]">
                          the revenant
                        </h4>
                        <p className="text-xl text-white font-medium">
                          <i className="fa-solid fa-star text-[#f4b508]" />
                          <span>7.4</span>
                          <span className="text-sm font-light">/10</span>
                        </p>
                      </div>
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex items-center justify-center duration-1000 group-hover/item-movie:bg-black/50">
                        <button className="w-28 h-10 uppercase text-sm text-white font-bold bg-[#F27221] rounded-full invisible opacity-0 duration-500 group-hover/item-movie:visible group-hover/item-movie:opacity-100">
                          read more <i className="fa-solid fa-caret-right" />
                        </button>
                      </div>
                    </div>
                    <div className="relative max-w-[190px] group/item-movie">
                      <img src="./img/movie-item.jpeg" />
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex flex-col justify-end shadow-[inset_-5px_-50px_100px_-15px_#000000]">
                        <h4 className="text-white text-sm uppercase font-bold duration-500 group-hover/item-movie:text-[#DCF836]">
                          the revenant
                        </h4>
                        <p className="text-xl text-white font-medium">
                          <i className="fa-solid fa-star text-[#f4b508]" />
                          <span>7.4</span>
                          <span className="text-sm font-light">/10</span>
                        </p>
                      </div>
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex items-center justify-center duration-1000 group-hover/item-movie:bg-black/50">
                        <button className="w-28 h-10 uppercase text-sm text-white font-bold bg-[#F27221] rounded-full invisible opacity-0 duration-500 group-hover/item-movie:visible group-hover/item-movie:opacity-100">
                          read more <i className="fa-solid fa-caret-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end list movie */}
              </div>
            </div>
            <div className="lg:w-1/4 lg:pt-[440px]">
              {/* list actor */}
              <div>
                <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
                  SPOTLIGHT CELEBRITIES
                </h4>
                <div className="grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                  <div className="flex items-center mt-7 group/actor">
                    <img
                      src="./img/actor.jpeg"
                      className="w-[70px] mr-4 rounded"
                    />
                    <div className="text-sm">
                      <h5 className="text-white font-medium duration-300 group-hover/actor:text-[#DCF836]">
                        Samuel N. Jack
                      </h5>
                      <p className="text-[#abb7c4] uppercase">actor</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-7 group/actor">
                    <img
                      src="./img/actor.jpeg"
                      className="w-[70px] mr-4 rounded"
                    />
                    <div className="text-sm">
                      <h5 className="text-white font-medium duration-300 group-hover/actor:text-[#DCF836]">
                        Samuel N. Jack
                      </h5>
                      <p className="text-[#abb7c4] uppercase">actor</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-7 group/actor">
                    <img
                      src="./img/actor.jpeg"
                      className="w-[70px] mr-4 rounded"
                    />
                    <div className="text-sm">
                      <h5 className="text-white font-medium duration-300 group-hover/actor:text-[#DCF836]">
                        Samuel N. Jack
                      </h5>
                      <p className="text-[#abb7c4] uppercase">actor</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-7 group/actor">
                    <img
                      src="./img/actor.jpeg"
                      className="w-[70px] mr-4 rounded"
                    />
                    <div className="text-sm">
                      <h5 className="text-white font-medium duration-300 group-hover/actor:text-[#DCF836]">
                        Samuel N. Jack
                      </h5>
                      <p className="text-[#abb7c4] uppercase">actor</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* list actor end */}
              {/* list tag */}
              <div className="text-white pt-12">
                <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
                  TAGS
                </h4>
                <ul className="flex items-center justify-start flex-wrap font-light capitalize text-[#abb7c4] mt-2.5">
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Batman
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      film
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      homeland
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Fast &amp; Furious
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Dead Walker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      King
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Beauty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Fast &amp; Furious
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Batman
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      film
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      homeland
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Fast &amp; Furious
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Dead Walker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      King
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block mr-2.5 mb-2.5 py-[5px] px-4 bg-[#152a3e]"
                    >
                      Beauty
                    </a>
                  </li>
                </ul>
                <div></div>
                {/* list tag end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
