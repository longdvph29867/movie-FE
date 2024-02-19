import { https } from "../config/axios";

const cinemaService={
  getAllCinemaChain(){
    return https.get('/cinemachains')
  },
  getAllCinemaBranch(code: string){
    return https.get(`/cinemabranchs?cinemaCode=${code}`)
  },
}

export default cinemaService