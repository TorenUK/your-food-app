import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-food-app.herokuapp.com/",
});

export default instance;
