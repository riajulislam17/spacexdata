import axios from "axios";

export default axios.create({
  baseURL: "https://api.spacexdata.com/v3/launches",
  headers: {
    "Content-type": "application/json"
  }
});