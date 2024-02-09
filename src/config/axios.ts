import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constant/constant";

export const BASE_URL = API_URL;
// const accessToken = localUserService.get()?.accessToken
const accessToken = '';
const configHeadres  = {
  "Authorization": "Bearer " + (accessToken ? accessToken : ''),
}
export const https:AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: configHeadres
})