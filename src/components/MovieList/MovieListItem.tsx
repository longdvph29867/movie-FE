import { Movie } from "../../types/movies";
import Rating from "../Rating/Rating";
const MovieListItem: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="relative max-w-[190px] group/item-movie w-full">
      <img
        src={movie.poster}
        alt={movie.name}
        className="h-[250px] w-full object-cover"
      />
      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex flex-col justify-end shadow-[inset_-5px_-50px_100px_-15px_#000000]">
        <h4 className="text-white text-sm uppercase font-bold duration-500 group-hover/item-movie:text-[#DCF836]">
          {movie.name}
        </h4>
        <Rating rating={movie.rated} />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full py-5 duration-1000 px-7 group-hover/item-movie:bg-black/50">
        <button className="w-28 h-10 uppercase text-sm text-white font-bold bg-[#F27221] rounded-full invisible opacity-0 duration-500 group-hover/item-movie:visible group-hover/item-movie:opacity-100">
          read more <i className="fa-solid fa-caret-right" />
        </button>
      </div>
    </div>
  );
};

export default MovieListItem;
