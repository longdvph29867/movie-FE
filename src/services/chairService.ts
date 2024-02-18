import { https } from "../config/axios";

const chairService = {
  getChairByShowing(idShowing:string){
    return https.get(`/seats?showing=${idShowing}`)
  }
} 

export default chairService