import { https } from "../config/axios"

export const movieService = {
  getMovies: () => {
    return https.get('/movies?limit=18')
  },
  getMovieDetail: (id:string) => {
    return https.get(`/movies/${id}`)
  },
  getTrailer: () => {
    return https.get(`/movies/trailer`)
  }
}