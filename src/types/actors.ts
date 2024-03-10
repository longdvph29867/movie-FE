export type ActorType = {
  name: string,
  birthday: string,
  image: string,
  biography: string,
  nationality: string,
  movies: string[],
  active: true,
  id: string
}

// export type DetailActor = 

type Movie =  {
  _id: string,
  name: string,
  poster: string,
  director: string,
  runningTime: number,
  rated: string
}

export type DetailActor = Omit<ActorType, "movies">  & {movies: Movie[]}