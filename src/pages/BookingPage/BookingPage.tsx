import { useDispatch } from "react-redux";
import ChairBooking from "./ChairBooking/ChairBooking";
import InfoMovie from "./InfoMovie/InfoMovie";
import ListChair from "./ListChair/ListChair";
import { clearSelectedChair } from "../../Toolkits/chairSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const params = useParams();
  const idShowing = params.id ? params.id : "65c8e0357be78149f194e1ce";
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearSelectedChair());
    };
  }, []);
  return (
    <div
      className={`pt-36 pb-20 bg-slate-800 min-h-screen`}
      style={{ backgroundImage: "url(./bg-2.jpg)" }}
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
