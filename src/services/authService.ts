import { https } from "../config/axios";
const authService = {
    forgotPassword(email:object){
        return https.post(`/auth/forgot-password`,email)
    },
    resetPassword(data:object){
        return https.post(`/auth/reset-password`,data)
    },
    sendVerifyEmail(){
        return https.post('/auth/send-verification-email')
    }
} 

export default authService