//index
import axios from "axios";
import { localUserService } from "./localSevices";

export const BASE_URL = "https://movie-api-five-bice.vercel.app/";
const configHeadres = {
  Authorization: "Bearer " + localUserService.get()?.accessToken,
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeadres,
});