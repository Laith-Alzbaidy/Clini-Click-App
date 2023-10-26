import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json", // Set the correct Content-Type header for JSON
  },
});
