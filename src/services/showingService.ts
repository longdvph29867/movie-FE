import { https } from "../config/axios";

const showingService = {
  getCinemaVyMovie(idMovie:string){
    return https.get(`/showings/by-movie?movie=${idMovie}`)
  },
  getDetailSchedule(idMovie:string){
    return https.get(`/showings/${idMovie}`)
  },
  getCinemaByBranch(slug:string){
    return https.get(`/showings/by-cinema-branch?cinemaBranch=${slug}`)
  },
} 

export default showingService