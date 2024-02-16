
import { https } from "../config/axios"


export const genreServices = {
   getCategories(){
    return  https.get(`/genres`)
   }

}
