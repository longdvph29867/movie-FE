import { https } from "../config/axios";
import {UserUpdateView} from '../types/users'
const userService = {
    updateUser(id:string,data:UserUpdateView){
        return https.put(`users/${id}`,data)
    }
} 

export default userService