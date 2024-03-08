import { https } from "../config/axios";
const authService = {
    forgotPassword(email:object){
        return https.post(`/auth/forgot-password`,email)
    },
    resetPassword(token:string,data:object){
        return https.post(`/auth/reset-password/${token}`,data)
    },
    sendVerifyEmail(){
        return https.post('/auth/send-verification-email')
    }
} 

export default authService