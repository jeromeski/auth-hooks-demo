import axios from "axios";

const BASE_URL = "https://auth-backend-playground.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL
});

// export default axios.create(
//  {
//     baseURL: BASE_URL,
//     headers: {
//     "Content-Type": "application/json",
//     withCredentials: true
//   }
//  }
// )

/*
const {url, method, token} = configObj
  axios.create(url,{
    baseURL: BASE_URL,
    method,
    headers: {
      "Content-Type": "application/json",
      withCredentials: true
    }
  })
*/
