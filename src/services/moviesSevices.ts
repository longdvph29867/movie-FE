import { https } from "./config"


const movieServices = {
    getDetail(id:string){
      return  https.get(`/movies/${id}`)
    },
   getAll(){
    return  https.get(`/movies`)
   },
   getCategories(){
    return  https.get(`/categories`)
   }

}

export default movieServices