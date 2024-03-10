import Rating from "../../Rating/Rating";
import SpanContent from "../../Date/SpanContent";
import SocialButton from "../../SocialButton/SocialButton";
import { Movie } from "../../../types/movies";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOptionVideo } from "../../../Toolkits/watchVideoSlice";
type Props = {
  movie?: Movie;
  index?: number;
};

const BannerItem = ({ movie, index }: Props) => {
  const dispatch = useDispatch();
  const handleOptionVideo = () => {
    dispatch(setOptionVideo({ isOpen: true, url: movie?.trailer }));
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center gap-3 md:flex-row flex-col-reverse">
          <div id={`slick-slide-text-${index}`} className="w-full md:w-2/3">
            <div className="flex items-center md:justify-start justify-center gap-1 text-xs font-semibold text-white uppercase">
              <span className="px-1.5 py-1 rounded bg-[#1692bb]">Sci-fi</span>
              <span className="px-1.5 py-1 rounded bg-[#f5b50a]">Action</span>
              <span className="px-1.5 py-1 rounded bg-[#dd003f]">
                advanture
              </span>
            </div>
            <h1 className="mt-5 mb-2 text-4xl font-bold text-white uppercase sm:text-6xl text-center md:text-left">
              {movie?.name ? movie.name : "guardians of the galaxy"}{" "}
              <span className="text-[#abb7c4] text-4xl font-light">2024</span>
            </h1>
            <div>
              <div className="text-[#F27221] font-bold flex sm:items-center md:justify-start justify-center sm:flex-row flex-col md:gap-8 sm:gap-6 gap-3 uppercase mt-2">
                <SocialButton
                  socialButton="Watch Trailer"
                  styleSocial={<i className="pl-1 fa-solid fa-play" />}
                  callback={handleOptionVideo}
                />
                <SocialButton
                  socialButton="Add to favorite"
                  styleSocial={<i className="fa-solid fa-heart" />}
                />
                <SocialButton
                  socialButton="Share"
                  styleSocial={<i className="fa-solid fa-share-nodes" />}
                />
              </div>
              <div className="flex flex-col mt-4 sm:items-center sm:flex-row md:justify-start justify-center">
                <Rating rating={movie?.rated ? movie.rated : "9"} />
                <ul className="text-[#ABB7C4] flex items-center sm:flex-row flex-col">
                  <SpanContent content="Run Time: 2h21'" />
                  <SpanContent content="Rated: PG-13" />
                  <SpanContent content="Release: 1 May 2014" />
                </ul>
              </div>
              <div className="mt-8 mb-3 flex md:justify-start justify-center">
                <Link to={`/detail/${movie?._id}`}>
                  <span className="font-semibold text-sm text-white uppercase py-2.5 px-6 rounded-full bg-[#F27221]">
                    MORE DETAIL
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div id={`slick-slide-img-${index}`} className="md:w-1/3 md:block ">
            <img
              src={movie?.poster ? movie.poster : "./shin.jpeg"}
              alt=""
              className="w-72 h-[410px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
