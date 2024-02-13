import { useState } from "react";
import InfoDetail from "../components/DetailPage/InfoDetail";
// import { useParams } from "react-router-dom";

import { Movie } from "../types/movies";
import { movieService } from "../services/movieService";

const DetailPage = () => {
  // const { id } = useParams();
  const id = "659682f87ccc34bb2e8e75b4";
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  useState(() => {
    movieService
      .getDetail(id as string)
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }),
    [movieDetail];

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
            <InfoDetail movieDetail={movieDetail} />
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
              </div>
              {/* list tag end */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
