import { https } from "../config/axios";

const actorService={
    getAllActor(limit=10){
        return https.get(`/actors?limit=${limit}`)
    },
}

export default actorService