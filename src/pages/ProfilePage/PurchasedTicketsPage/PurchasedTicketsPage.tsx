import { useEffect, useState } from "react";
import PurchasedTicketsItem from "../../../components/Profile/PurchasedTickets/PurchasedTicketsItem";
import bookingService from "../../../services/bookingService";
import { localUserService } from "../../../services/localService";
import { Ticket } from "../../../types/booking";
import { Modal, message } from "antd";
import { TbTicketOff } from "react-icons/tb";

const PurchasedTicketsPage = () => {
  const userLocal = localUserService.get()?.user;
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    if (userLocal) {
      fetchData(userLocal.id);
    }
  }, []);
  const fetchData = async (idUser: string) => {
    try {
      const response = await bookingService.getAllByUser(idUser);
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { confirm } = Modal;
  const showDeleteConfirm = async (id: string) => {
    confirm({
      title: "Cancel tickect",
      icon: (
        <p className="text-red-400 text-2xl mr-2">
          <TbTicketOff />
        </p>
      ),
      content: "Are you sure you want to cancel this ticket?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        try {
          await bookingService.deleteById(id);
          setTickets((pre) => {
            return pre.filter((item) => item.idBooking !== id);
          });
        } catch (error) {
          message.error(error.response.data.message);
        }
      },
    });
  };
  return (
    <>
      <div className="mb-5">
        <h1 className="font-bold text-white text-xl">Tickets</h1>
      </div>
      {tickets.map((ticket, index) => (
        <div key={index} className="mb-3">
          <PurchasedTicketsItem
            showDeleteConfirm={showDeleteConfirm}
            ticket={ticket}
          />
        </div>
      ))}
    </>
  );
};

export default PurchasedTicketsPage;
