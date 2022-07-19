import axios from "axios"


export const axiosInstance = axios.create({
  baseURL: "https://ublog2app.herokuapp.com/backend/"
});