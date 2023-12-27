import axios from "axios";

const baseURL = "https://api.admin.u-code.io";

const request = axios.create({
  baseURL,
  timeout: 100000,
  headers: {
    // eslint-disable-next-line no-undef
    Authorization: `Bearer ${import.meta.env.VITE_REACT_TOKEN}`,
  },
});

export default request;
