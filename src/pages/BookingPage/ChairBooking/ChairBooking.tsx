import { useDispatch, useSelector } from "react-redux";
import { ChairType } from "../../../types/chair";
import { setSelectedChair } from "../../../Toolkits/chairSlice";
import { localUserService } from "../../../services/localService";
import { message } from "antd";
import { BookingType } from "../../../types/booking";
import bookingService from "../../../services/bookingService";
type Props = {
  idShowing: string;
};
const ChairBooking = ({ idShowing }: Props) => {
  const dispatch = useDispatch();
  const handleDeleteChair = (chair: ChairType) => {
    dispatch(setSelectedChair(chair));
  };
  const selectedChair: ChairType[] = useSelector(
    (state: any) => state.chairSlice.selectedChair
  );
  const totalPrice = selectedChair.reduce((totalPrice, item) => {
    return (totalPrice += item.price);
  }, 0);

  const handleBookingTicket = () => {
    if (selectedChair.length === 0) {
      message.warning("Please choose a seat!");
      return;
    }
    const data: BookingType = {
      showing: idShowing,
      user: localUserService.get()?.user.id,
      seats: selectedChair.map((chair) => ({
        seatId: chair._id,
        seatNumber: chair.seatNumber,
        price: chair.price,
      })),
      totalPrice,
    };
    bookingService
      .postBooking(data)
      .then((res) => {
        console.log(res);
        location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-white mt-5 font-sans">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border-2 py-1 border-white/50 leading-8">
              Seat number
            </th>
            <th className="border-2 py-1 border-white/50 leading-8">Price</th>
            <th className="border-2 py-1 border-white/50 leading-8">Cancel</th>
          </tr>
        </thead>
        <tbody className="text-[#F27221]">
          {selectedChair.map((chair, index) => (
            <tr key={index}>
              <td className="border-2 py-1 border-white/50 leading-8">
                Ghế {chair.seatNumber}
              </td>
              <td className="border-2 py-1 border-white/50 leading-8">
                {chair.price}
              </td>
              <td className="border-2 py-1 border-white/50 leading-8">
                <button onClick={() => handleDeleteChair(chair)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border-2 py-1 border-white/50 leading-8">
              Tổng tiền:
            </td>
            <td
              className="border-2 py-1 border-white/50 leading-8 text-[#F27221]"
              // @ts-ignore
              colSpan="2"
            >
              {totalPrice}
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        className="
      text-white text-xl 
      bg-[#F27221] 
      py-3 
      px-5 
      mt-5 
      rounded-md 
      hover:bg-white 
      hover:text-[#F27221] 
      duration-300 
      font-bold"
        onClick={handleBookingTicket}
      >
        Booking Ticket
      </button>
    </div>
  );
};

export default ChairBooking;
