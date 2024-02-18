import { useDispatch } from "react-redux";
import ChairBooking from "./ChairBooking/ChairBooking";
import InfoMovie from "./InfoMovie/InfoMovie";
import ListChair from "./ListChair/ListChair";
import { clearSelectedChair } from "../../Toolkits/chairSlice";
import { useEffect } from "react";

const BookingPage = () => {
  const idShowing = "65c8e0357be78149f194e1ce";
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearSelectedChair(null));
    };
  }, []);
  return (
    <div
      className={`pt-36 pb-20 bg-slate-800 min-h-screen bg-[url('./bg-2.jpg')]`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="xl:w-2/3 w-full">
          <ListChair idShowing={idShowing} />
        </div>
        <div className="xl:w-1/3 w-full">
          <InfoMovie idShowing={idShowing} />
          <ChairBooking idShowing={idShowing} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;