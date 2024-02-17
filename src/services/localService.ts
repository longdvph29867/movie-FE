import { InforUserType } from "../types/login";

const USER_INFO_MOVIE = 'USER_INFO_MOVIE';
export const localUserService = {
  get: (): InforUserType | null => {
    const jsonData = localStorage.getItem(USER_INFO_MOVIE);
    return JSON.parse((jsonData as string));
  },
  set: (userInfo: object) => {
    const jsonData = JSON.stringify(userInfo);
    localStorage.setItem(USER_INFO_MOVIE, jsonData);
  },
  remove: () => {
    localStorage.removeItem(USER_INFO_MOVIE);
  },
}