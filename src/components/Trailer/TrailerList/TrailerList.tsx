import { TrailerType } from "../../../types/movies";
import TrailerItem from "./TrailerItem/TrailerItem";

type Props = {
  trailers: TrailerType[];
};

const TrailerList = ({ trailers }: Props) => {
  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-2">
      {trailers.map((trailer, index) => (
        <TrailerItem key={index} trailer={trailer} />
      ))}
    </div>
  );
};

export default TrailerList;
