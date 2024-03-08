type Cast = {
  id: string,
  name: string
}
export type Movie = {
  _id:string
  name: string,
  poster: string,
  director: string,
  cast: Cast[],
  genre: Genre[]
  runningTime: number,
  language: string,
  country: string,
  rated: string,
  trailer: string,
  imgBanner: string,
  description: string
}

export type FormMovieType = Omit<Movie, '_id' | 'cast' | 'genre' | 'poster' | 'imgBanner' | 'rated'> & {cast: string[], genre: string[], poster: string, imgBanner: string }
export type FormMovieValue = Omit<Movie, '_id' | 'cast' | 'genre' | 'poster' | 'imgBanner' | 'rated'> & {cast: string, genre: string[], imagePoster: File[], imgBanner: File[] }

type Genre = {
  _id: string,
  genreName: string,
  genreSlug: string
}

export type TrailerType = {
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
