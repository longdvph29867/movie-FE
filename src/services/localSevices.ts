export const MOVIE_USER = 'MOVIE_USER';
export const localUserService = {
  get: () => {
    const jsonData = localStorage.getItem(MOVIE_USER);
    if(jsonData){
        return JSON.parse(jsonData);
    }
  },
  set: (userInfo:string) => {
    const jsonData = JSON.stringify(userInfo);
    localStorage.setItem(MOVIE_USER, jsonData);
  },
  remove: () => {
    localStorage.removeItem(MOVIE_USER);
  }
}