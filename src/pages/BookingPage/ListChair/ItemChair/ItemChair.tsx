import clsx from "clsx";
import { ChairType } from "../../../../types/chair";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChair } from "../../../../Toolkits/chairSlice";

type Props = {
  chair: ChairType;
};

const ItemChair = ({ chair }: Props) => {
  const dispatch = useDispatch();
  const selectedChair: ChairType[] = useSelector(
    (state: any) => state.chairSlice.selectedChair
  );
  const handleSelectChair = (chair: ChairType) => {
    dispatch(setSelectedChair(chair));
  };
  return (
    <button
      className={clsx(
        "w-9 h-9 bg-white rounded",
        { "!bg-amber-500 text-white": chair.seatVip },
        { "!bg-gray-500 text-white": chair.booked },
        {
          "!bg-green-400 text-white": selectedChair.some(
            (item) => item._id === chair._id
          ),
        }
      )}
      disabled={chair.booked}
      onClick={() => {
        handleSelectChair(chair);
      }}
    >
      {chair.seatNumber}
    </button>
  );
};

export default ItemChair;
