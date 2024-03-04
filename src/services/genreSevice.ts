import { https } from "../config/axios";

const genreSevice={
    getAllGenre(){
        return https.get('/genres')
    },
    getGenreDetail(slug: string){
        return https.get(`/genres/${slug}`)
    },
    createGenre(data:object){
        return https.post('/genres',data)
    },
    updateGenre(id:string,data:object){
        return https.put(`/genres/${id}`,data)
    },
    deleteGenre(id:string){
        return https.delete(`/genres/${id}`)
    }
}

export default genreSevice