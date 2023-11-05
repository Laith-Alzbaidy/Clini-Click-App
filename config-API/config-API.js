import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json", // Set the correct Content-Type header for JSON
  },
});

// import axios from "axios";
// import Cookies from "js-cookie";
// const instance = axios.create({
//   baseURL: process.env.BASE_URL,
//   headers: {
//     "Content-Type": "application/json", // Set the correct Content-Type header for JSON
//   },
// });

// instance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = Cookies.get("token");
//     if (token) {
//       config.headers["Authorization"] = tokenW;
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// export default instance;
