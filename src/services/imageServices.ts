import { https } from "../config/axios";

const imageService={
    postImage(formData: FormData){
        return https.post('/images', formData)
    },
}

export default imageService