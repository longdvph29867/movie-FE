import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constant/constant";
import { localUserService } from "../services/localService";

export const BASE_URL = API_URL;
const accessToken = localUserService.get()
const configHeadres  = {
  "Authorization": "Bearer " + (accessToken?.tokens.access.token ? accessToken?.tokens.access.token : ''),
}
export const https:AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: configHeadres
})