import { Movie } from "../../../types/movies";
import TrailerItem from "./TrailerItem/Traileritem";

type Props = {
  trailers: Movie[];
};

const TrailerList = ({ trailers }: Props) => {
  return (
    <div>
      {trailers.map((trailer, index) => (
        <TrailerItem key={index} trailer={trailer} />
      ))}
    </div>
  );
};

export default TrailerList;
