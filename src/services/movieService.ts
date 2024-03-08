import { https } from "../config/axios"
import { FormMovieType } from "../types/movies"

export const movieService = {
  getMovies: (limit: number = 18, page = 1, genre: string | undefined = undefined, filterTime: string | null = null, search: string | null = null) => {
    let newUrl = `/movies?sortBy=createdAt:desc&limit=${limit}&page=${page}`;
    if(genre) {
      newUrl += `&genre=${genre}`
    }
    if(search) {
      newUrl += `&search=${search}`
    }
    if(filterTime) {
      if(filterTime === 'lower_100') {
        newUrl += '&lower_time=100'
      }
      else if(filterTime === '100_120') {
        newUrl += '&greater_time=100&lower_time=120'
      }
      else if(filterTime === 'greater_120') {
        newUrl += '&greater_time=120'
      }
    }
    return https.get(newUrl)
  },
  getMovieDetail: (id:string) => {
    return https.get(`/movies/${id}`)
  },
  getTrailer: () => {
    return https.get(`/movies/trailer`)
  },
  postMovie: (data: FormMovieType) => {
    return https.post(`/movies`, data)
  },
  putMovie: ( id: string, data: FormMovieType) => {
    return https.put(`/movies/${id}`, data)
  },
  deleteMovie: (id: string) => {
    return https.delete(`/movies/${id}`)
  }
}