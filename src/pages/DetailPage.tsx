
import MovieList from "../components/MovieList/MovieList";
import SocialButton from "../components/SocialButton/SocialButton";
import ActorList from "../components/TrailerActor/ActorList";
import TagList from "../components/Tag/TagList";

const DetailPage = () => {
  return (
    <>
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
        <div className="container relative mx-auto py-44">
          <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
            <div className="lg:w-3/4">
              <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
                <div className="max-w-xs mx-auto lg:w-2/5">
                  <div>
                    <img
                      className="rounded-md max-h-[450px] w-full object-cover object-top"
                      src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/series-img.jpg"
                      alt=""
                    />
                    <div className="flex flex-col gap-3 text-center p-4 border-[3px] border-[#0c1c2c] mt-5 rounded">
                      <a
                        href="http://"
                        className="text-white uppercase block py-3 rounded-md bg-[#dd003f]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mr-3 fa-solid fa-play" />
                        WATCH TRAILER
                      </a>
                      <a
                        href="http://"
                        className="text-[#020d18] uppercase block py-3 rounded-md bg-[#dcf836]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mr-3 fa-solid fa-play" />
                        BUY TIKET
                      </a>
                    </div>
                  </div>
                </div>
                {/* center */}
                <div className="lg:w-3/5">
                  <div>
                    <h1 className="mb-6 text-4xl font-semibold text-white">
                      The Big Bang Theory
                    </h1>
                    {/* social */}
                    <div className="text-[#F27221] font-bold flex sm:items-center sm:flex-row flex-col md:gap-8 sm:gap-6 gap-3 uppercase mt-2 mb-10">
                      <SocialButton />
                      <SocialButton />
                    </div>
                    {/* rating */}
                    <div className="border-y border-[#405266] text-[#abb7c4] flex justify-start">
                      <div className="flex items-center justify-center">
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <p className="ml-2.5 text-sm py-1">
                          <span className="text-xl text-white">9</span> /10
                          <br />
                          <span className="text-white hover:text-[#4280bf] text-sm">
                            56 Reviews
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-start border-l border-[#405266] ml-7 pl-7">
                        <p className="mr-4 text-lg">Rate This Movie: </p>
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
                        <i className="text-2xl fa-solid fa-star" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-8">
                      <div>
                        <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                          Director:{" "}
                        </h6>
                        <p>
                          <a
                            href="#"
                            className="text-[#4280bf] hover:text-[#dcf836]"
                          >
                            Mark Cendrowski
                          </a>
                        </p>
                      </div>
                      <div>
                        <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                          Stars:{" "}
                        </h6>
                        <p>
                          <a
                            href="#"
                            className="text-[#4280bf] hover:text-[#dcf836]"
                          >
                            Robert Downey Jr, Chris Evans, Mark Ruffalo,
                            Scarlett Johansson
                          </a>
                        </p>
                      </div>
                      <div>
                        <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                          Genres:{" "}
                        </h6>
                        <p>
                          <a
                            href="#"
                            className="text-[#4280bf] hover:text-[#dcf836]"
                          >
                            Chuck Lorre, Bill Prady
                          </a>
                        </p>
                      </div>
                      <div>
                        <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                          Run time:{" "}
                        </h6>
                        <p className="text-[#abb7c4]">120 min</p>
                      </div>
                      <div>
                        <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                          Description:{" "}
                        </h6>
                        <p className="text-[#abb7c4]">
                          Leonard Hofstadter and Sheldon Cooper are both
                          brilliant physicists working at Cal Tech in Pasadena,
                          California. They are colleagues, best friends, and
                          roommates, although in all capacities their
                          relationship is always tested primarily by Sheldon's
                          regimented, deeply eccentric, and non-conventional
                          ways.
                        </p>
                      </div>
                      <div>
                        <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                          Plot Keywords:{" "}
                        </h6>
                        <p className="text-[#abb7c4] ">
                          <span className="time">
                            <a
                              href="#"
                              className="py-[2px] px-[5px] bg-[#233a50]"
                            >
                              superhero
                            </a>
                          </span>
                          <span className="time">
                            <a
                              href="#"
                              className="py-[2px] px-[5px] bg-[#233a50]"
                            >
                              marvel universe
                            </a>
                          </span>
                          <span className="time">
                            <a
                              href="#"
                              className="py-[2px] px-[5px] bg-[#233a50]"
                            >
                              comic
                            </a>
                          </span>
                          <span className="time">
                            <a
                              href="#"
                              className="py-[2px] px-[5px] bg-[#233a50]"
                            >
                              blockbuster
                            </a>
                          </span>
                          <span className="time">
                            <a
                              href="#"
                              className="py-[2px] px-[5px] bg-[#233a50]"
                            >
                              final battle
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* list movie */}
              <MovieList />
            </div>
            <div className="lg:w-1/4 lg:pt-[440px]">
              {/* list actor */}
              <ActorList />
              {/* list actor end */}
              {/* list tag */}
              <TagList />
              {/* list tag end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
