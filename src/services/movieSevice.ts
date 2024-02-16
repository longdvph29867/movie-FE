import { https } from "../config/axios"


export const movieServices = {

   getMovies(){
    return  https.get(`/movies`)
   },


}
