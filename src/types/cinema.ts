export type CinemaChainType = {
  cinemaName: string,
  cinemaCode: string,
  slug: string,
  logo: string
}
export type CinemaBranchType = {
  cinemaBranchName: string,
  cinemaBranchCode: string,
  slug: string,
  location: string
}

export type ShowingTimeType = {
  idShowing: string,
  showTime: string,
  vipPrice: number,
  normalPrice: number
}

export type ListShowingByBranchType = {
  _id: string,
  name: string,
  poster: string,
  director: string
  trailer: string
  imgBanner: string
  listTime: ShowingTimeType[]
}