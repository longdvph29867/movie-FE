import { https } from "./config"


const movieSevices = {

    // movies sevices
    getDetail(id:string){
      return  https.get(`/movies/${id}`)
    }
}

export default movieSevices