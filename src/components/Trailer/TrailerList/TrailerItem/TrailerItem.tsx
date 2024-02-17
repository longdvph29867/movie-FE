import { useDispatch, useSelector } from "react-redux";
import { TrailerType } from "../../../../types/movies";
import { setTrailerActive } from "../../../../Toolkits/movieSlice";
type Props = {
  trailer: TrailerType;
};
const TrailerItem = ({ trailer }: Props) => {
  const dispatch = useDispatch();
  const trailerActive: TrailerType = useSelector(
    (state: any) => state.movieSlice.trailerActive
  );
  const handleChangeTrailer = (trailer: TrailerType): void => {
    dispatch(setTrailerActive(trailer));
  };

  return (
    <>
      <div
        onClick={() => handleChangeTrailer(trailer)}
        className={`flex items-start gap-3 p-3 cursor-pointer ${
          trailerActive._id === trailer._id ? "bg-[#1c3d5d]" : ""
        }`}
      >
        <div className="w-1/3">
          <img src={trailer.imgBanner} alt="" />
        </div>
        <div className="w-2/3">
          <h5 className="text-sm font-medium text-white">{trailer.name}</h5>
          <p className="text-xs text-white mt-1">{trailer.language}</p>
        </div>
      </div>
    </>
  );
};

export default TrailerItem;
