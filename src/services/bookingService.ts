import { https } from "../config/axios";
import { BookingType } from "../types/booking";

const bookingService = {
  postBooking(data: BookingType){
    return https.post("/bookings", data)
  }
} 

export default bookingService