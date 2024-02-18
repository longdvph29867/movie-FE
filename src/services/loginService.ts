import { https } from "../config/axios";
import { LoginType, RegisterType } from "../types/login";

const loginService={
  login(data: LoginType){
    return https.post('/auth/login', data)
  },
  register(data: RegisterType){
    return https.post('/auth/register', data)
  },
  logout(data: {refreshToken: string}){
    return https.post('/auth/logout', data)
  },
}

export default loginService