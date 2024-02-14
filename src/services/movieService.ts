import { https } from "../config/axios"

export const movieService = {
  getMovies: () => {
    return https.get('/movies')
  },
  getMovieDetail: (id:string) => {
    return https.get(`/movies/${id}`)
  }
}