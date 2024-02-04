import { Movie } from "../../types/movies";
interface Props {
  movieDetail: Movie | null;
}
const InfoDetail = ({ movieDetail }: Props) => {
  return (
    <div className="lg:w-3/4">
      <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
        <div className="lg:w-2/5 max-w-xs mx-auto">
          <div>
            <img
              className="rounded-md max-h-[450px] w-full object-cover object-top"
              src={movieDetail?.poster}
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
            <h1 className="text-4xl text-white font-semibold mb-6">
              {movieDetail?.name}
            </h1>
            {/* social */}
            <div className="text-[#F27221] font-bold flex sm:items-center sm:flex-row flex-col md:gap-8 sm:gap-6 gap-3 uppercase mt-2 mb-10">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 flex items-center justify-center border border-[#F27221] rounded-full">
                  <i className="fa-solid fa-heart" />
                </span>
                <span className="text-sm">Add to favorite</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 flex items-center justify-center border border-[#F27221] rounded-full">
                  <i className="fa-solid fa-share-nodes" />
                </span>
                <span className="text-sm">Share</span>
              </div>
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
                <p className="text-lg mr-4">Rate This Movie: </p>
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
            <div className="mt-8 flex flex-col gap-3">
              <div>
                <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                  Director:{" "}
                </h6>
                <p>
                  <a href="#" className="text-[#4280bf] hover:text-[#dcf836]">
                    Mark Cendrowski
                  </a>
                </p>
              </div>
              <div>
                <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                  Stars:{" "}
                </h6>
                <p>
                  <a href="#" className="text-[#4280bf] hover:text-[#dcf836]">
                    Robert Downey Jr, Chris Evans, Mark Ruffalo, Scarlett
                    Johansson
                  </a>
                </p>
              </div>
              <div>
                <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                  Genres:{" "}
                </h6>
                <p>
                  <a href="#" className="text-[#4280bf] hover:text-[#dcf836]">
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
                  Leonard Hofstadter and Sheldon Cooper are both brilliant
                  physicists working at Cal Tech in Pasadena, California. They
                  are colleagues, best friends, and roommates, although in all
                  capacities their relationship is always tested primarily by
                  Sheldon's regimented, deeply eccentric, and non-conventional
                  ways.
                </p>
              </div>
              <div>
                <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                  Plot Keywords:{" "}
                </h6>
                <p className="text-[#abb7c4] ">
                  <span className="time">
                    <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                      superhero
                    </a>
                  </span>
                  <span className="time">
                    <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                      marvel universe
                    </a>
                  </span>
                  <span className="time">
                    <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                      comic
                    </a>
                  </span>
                  <span className="time">
                    <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                      blockbuster
                    </a>
                  </span>
                  <span className="time">
                    <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
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
      <div className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl font-bold">IN THEATER</h3>
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
  );
};

export default InfoDetail;
