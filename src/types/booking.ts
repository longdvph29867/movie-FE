export type BookingType = {
  showing: string,
  user: string | undefined,
  seats:     {
    seatId: string,
    seatNumber: number,
    price: number
    }[],
  totalPrice: number
}