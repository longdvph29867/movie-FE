import { useDispatch } from "react-redux";
import { Movie } from "../../types/movies";
import SocialButton from "../SocialButton/SocialButton";
import { setOptionVideo } from "../../Toolkits/watchVideoSlice";
interface Props {
  movieDetail: Movie | null;
  scrollToComponent: () => void;
}
const InfoDetail = ({ movieDetail, scrollToComponent }: Props) => {
  const dispatch = useDispatch();
  const handleOptionVideo = () => {
    dispatch(setOptionVideo({ isOpen: true, url: movieDetail?.trailer }));
  };
  return (
    <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
      <div className="lg:w-2/5 max-w-xs mx-auto">
        <div>
          <img
            className="rounded-md max-h-[450px] w-full object-cover object-top"
            src={movieDetail?.poster}
          />
          <div className="flex flex-col gap-3 text-center p-4 border-[3px] border-[#0c1c2c] mt-5 rounded">
            <button
              onClick={handleOptionVideo}
              className="text-white uppercase block py-3 rounded-md bg-[#F27221]"
              rel="noopener noreferrer"
            >
              <i className="mr-3 fa-solid fa-play" />
              WATCH TRAILER
            </button>
            <button
              onClick={scrollToComponent}
              className="text-[#020d18] uppercase block py-3 rounded-md bg-[#dcf836]"
              rel="noopener noreferrer"
            >
              <i className="mr-3 fa-solid fa-play" />
              BUY TIKET
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5">
        <div>
          <h1 className="text-4xl text-white font-semibold mb-6">
            {movieDetail?.name}
          </h1>
          <div className="text-[#F27221] font-bold flex sm:items-center sm:flex-row flex-col md:gap-8 sm:gap-6 gap-3 uppercase mt-2 mb-10">
            <SocialButton
              styleSocial={<i className="fa-solid fa-heart"></i>}
              socialButton="Add to favorite"
            />
            <SocialButton
              styleSocial={<i className="fa-solid fa-share-nodes"></i>}
              socialButton="Share"
            />
          </div>
          <div className="border-y border-[#405266] text-[#abb7c4] sm:flex justify-start py-1 sm:py-0">
            <div className="flex items-center sm:justify-center">
              <i className="text-2xl text-[#f5b50a] fa-solid fa-star" />
              <p className="ml-2.5 text-sm py-1">
                <span className="text-xl text-white">9</span> /10
                <br />
                <span className="text-white hover:text-[#4280bf] text-sm">
                  56 Reviews
                </span>
              </p>
            </div>
            <div className="sm:flex items-center justify-start sm:border-l border-[#405266] sm:ml-7 sm:pl-7 mt-2 sm:mt-0">
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
                physicists working at Cal Tech in Pasadena, California. They are
                colleagues, best friends, and roommates, although in all
                capacities their relationship is always tested primarily by
                Sheldon's regimented, deeply eccentric, and non-conventional
                ways.
              </p>
            </div>
            <div>
              <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                Plot Keywords:
              </h6>
              <p className="text-[#abb7c4] space-x-1">
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
  );
};

export default InfoDetail;
