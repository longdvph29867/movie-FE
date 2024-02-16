
import { https } from "../config/axios"
export const actorServices = {
   getActors(){
    return  https.get(`/actors`)
   }

}
