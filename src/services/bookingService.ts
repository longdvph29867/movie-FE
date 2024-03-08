import { https } from "../config/axios";
import { BookingType } from "../types/booking";

const bookingService = {
  postBooking(data: BookingType){
    return https.post("/bookings", data)
  },
  getAllByUser(idUser:string){
    return https.get(`/bookings?user=${idUser}`)
  },
  deleteById(id:string){
    return https.delete(`/bookings/${id}`)
  },
} 

export default bookingService