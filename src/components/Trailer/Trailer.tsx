import TrailerList from "./TrailerList/TrailerList";
import { Movie } from "../../types/movies";
import TrailerShow from "./TrailerShow/TrailerShow";
import TitleTheater from "../MovieList/TitleTheater";
import { useSelector } from "react-redux";

const Trailer = () => {
  const trailers: Movie[] = useSelector(
    (state: any) => state.movieSlice.movieList
  );
  return (
    <>
      <TitleTheater />
      <div className="flex flex-col gap-5 mt-6 md:flex-row md:gap-0">
        <div className="md:w-2/3">
          <TrailerShow />
        </div>
        <div className="md:w-1/3 bg-[#0b1a2a] md:h-[368px] h-48 overflow-scroll grid md:grid-cols-1 sm:grid-cols-2">
          <TrailerList trailers={trailers} />
        </div>
      </div>
    </>
  );
};

export default Trailer;
