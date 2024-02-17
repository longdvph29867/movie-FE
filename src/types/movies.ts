export interface Movie {
  _id:string
  name: string,
  poster: string,
  director: string,
  cast: string,
  genre: genre[]
  runningTime: number,
  language: string,
  rated: string,
  trailer: string,
  imgBanner: string,
}

interface genre {
  _id: string,
  categoryName: string,
  categorySlug: string
}

export interface TrailerType {
  _id: string,
  name: string,
  language: string,
  trailer: string,
  imgBanner: string,
}

export type DetailScheduleType = {
  movie: Movie,
  cinemaBranch: {
    cinemaBranchName: string,
    slug: string,
    location: string,
    id: string
  },
  showTime: string
}
