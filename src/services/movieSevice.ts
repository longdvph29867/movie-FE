import { https } from "../config/axios"


export const movieServices = {
    getDetail(id:string){
      return  https.get(`/movies/${id}`)
    },
   getMovies(){
    return  https.get(`/movies`)
   },
   getCategories(){
    return  https.get(`/categories`)
   }

}
