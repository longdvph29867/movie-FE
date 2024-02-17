import { https } from "../config/axios";

const showingSevice = {
    getCinemaVyMovie(idMovie:string){
        return https.get(`/showings/by-movie?movie=${idMovie}`)
    }
} 

export default showingSevice