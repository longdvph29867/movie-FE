import { https } from "../config/axios";
import {Updateuser,Createuser} from '../types/users'
const userService = {
    updateUser(id:string,data:Updateuser){
        return https.put(`users/${id}`,data)
    },
    createUser(data:Createuser){
        return https.post(`users`,data)
    },
    getAllUser(){
        return https.get(`users`)
    },
    getUser(id:string){
        return https.get(`users/${id}`)
    },
    deleteUser(id:string){
        return https.delete(`users/${id}`)
    }
} 

export default userService