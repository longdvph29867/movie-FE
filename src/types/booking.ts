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

export type Ticket ={
  idBooking:string
  cinemaBranch: {
    cinemaBranchName: string,
    cinemaBranchCode: string,
    slug: string,
    location: string
  },
  movie: {
    idMovie: string,
    name: string,
    poster: string,
    director: string
    imgBanner:string
  },
  seats: [
    {
      seatNumber: number,
      price: number
    }
  ],
  showTime: string,
  user: string,
  bookingTime: string
}