import axios from "axios";

import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://server-hotel-five.vercel.app",
  withCredentials: true,
});
const UseAxios = () => {
  return axiosSecure;
};

export default UseAxios;
