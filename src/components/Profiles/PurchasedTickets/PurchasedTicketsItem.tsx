import moment from "moment";
import { TbTicketOff } from "react-icons/tb";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Ticket } from "../../../types/booking";
import { convertVND } from "../../../util";

type Props = {
  ticket: Ticket;
  showDeleteConfirm: (id: string) => void;
};

const PurchasedTicketsItem = ({ ticket, showDeleteConfirm }: Props) => {
  return (
    <div className=" relative group duration-300 overflow-hidden">
      <div className="sm:flex h-full md:h-[200px] group-hover:-translate-x-[100px] gap-1 md:gap-0 duration-300 relative z-10 bg-white flex-initial">
        <div className="md:flex w-[calc(100%-100px) md:w-[calc(100%-150px)] relative">
          <div className="h-[300px] md:h-[200px] md:w-[200px] flex-none overflow-hidden object-cover sm:object-none">
            <img className="" src={ticket.movie.poster} alt="" />
          </div>
          <div className="absolute md:static bottom-0 w-full md:w-[calc(100%-200px)] sm:px-5 py-1 flex flex-col justify-around bg-neutral-200/70 md:bg-white">
            <div className="border-y border-gray-400">
              <p className="flex justify-around items-center text-sm sm:text-base">
                <span className="w-[100px] font-bold text-center">
                  {moment(ticket.showTime).utcOffset("+00:00").format("dddd")}
                </span>
                <span className="w-[100px] text-base sm:text-xl font-bold text-center text-[#d83565]">
                  {moment(ticket.showTime).utcOffset("+00:00").format("MMM Do")}
                </span>
                <span className="w-[100px] font-bold text-center">
                  {moment(ticket.showTime).utcOffset("+00:00").format("YYYY")}
                </span>
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl lg:text-4xl text-[#d83565] font-bold">
                {ticket.movie.name}
              </h2>
            </div>
            <div className="flex justify-around sm:grid grid-cols-3 text-[#4a437e]  font-bold text-center sm:px-3">
              <p>
                Time:
                {moment(ticket.showTime).utcOffset("+00:00").format("HH:mm")}
              </p>
              <p>
                Seat:
                {ticket.seats.map((seat) => seat.seatNumber).join(", ")}
              </p>
              <p>
                Prices:
                {convertVND(
                  ticket.seats.reduce((total, price) => total + price.price, 0)
                )}
              </p>
            </div>
            <div className="border-t border-gray-400 pt-2 text-xs px-3">
              <p className="flex items-center">
                <span className="mr-2">
                  <BsCameraReelsFill />
                </span>
                {ticket.cinemaBranch.cinemaBranchName}
              </p>
              <p className="flex items-center">
                <span className="mr-2">
                  <IoLocationSharp />
                </span>
                {ticket.cinemaBranch.location}
              </p>
            </div>
          </div>
        </div>
        <div className="relative sm:h-[300px] md:h-[200px] border-t sm:border-l border-dashed border-black pt-5 sm:pl-5 flex items-center flex-none">
          <p className="sm:-rotate-90 text-gray-400 font-semibold text-xs absolute top-0 md:top-1/2 px-1 left-1/2 sm:left-3 -translate-x-1/2 w-full sm:w-[300px] md::w-[200px] flex justify-around items-center">
            <span>ADMIT ONE</span>
            <span className="text-gray-600 font-bold">ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div className="w-[150px] m-auto">
            <div className="barcode">
              <img
                src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                alt="QR code"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full absolute text-red-400 flex items-center justify-center top-0 right-0 w-[100px] bg-neutral-300">
        <button
          className="flex flex-col items-center"
          onClick={() => showDeleteConfirm(ticket.idBooking)}
        >
          <span className="text-5xl leading-3">
            <TbTicketOff />
          </span>
          Canel ticket
        </button>
      </div>
    </div>
  );
};

export default PurchasedTicketsItem;
