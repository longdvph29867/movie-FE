import { https } from "../config/axios";

const actorService={
    getAllActor(limit=10){
        return https.get(`/actors?limit=${limit}`)
    },
    getDetailActor(id: string){
        return https.get(`/actors/${id}`)
    },
}

export default actorService