import TrailerList from "./TrailerList/TrailerList";
import { TrailerType } from "../../types/movies";
import TrailerShow from "./TrailerShow/TrailerShow";
import TitleTheater from "../MovieList/TitleTheater";
import { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import { useDispatch } from "react-redux";
import { setTrailerActive } from "../../Toolkits/movieSlice";

const Trailer = () => {
  const [trailers, setTrailers] = useState<TrailerType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    movieService
      .getTrailer()
      .then((res) => {
        setTrailers(res.data);
        dispatch(setTrailerActive(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <TitleTheater />
      <div className="flex flex-col gap-5 mt-6 md:flex-row md:gap-0">
        <div className="md:w-2/3">
          <TrailerShow />
        </div>
        <div className="md:w-1/3 bg-[#0b1a2a] md:h-[368px] h-48 overflow-scroll">
          <TrailerList trailers={trailers} />
        </div>
      </div>
    </>
  );
};

export default Trailer;
