//index

import genre from "./genre";


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
