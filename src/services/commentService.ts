import { https } from "../config/axios";
import { PostComment } from "../types/comment";

const commentService={
    getCommentByMovie(idMovie: string){
        return https.get(`/comments/bymovie/${idMovie}`)
    },
    postCommentByMovie(data: PostComment){
        return https.post(`/comments`, data)
    },
}

export default commentService