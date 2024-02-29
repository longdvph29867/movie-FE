import { https } from "../config/axios";

const actorService={
    getAllActor(){
        return https.get('/actors')
    },
}

export default actorService
