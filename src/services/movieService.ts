import { https } from "../config/axios"

export const movieService = {
  getMovies: () => {
    return https.get('/movies?limit=12')
  },
  getMovieDetail: (id:string) => {
    return https.get(`/movies/${id}`)
  }
}