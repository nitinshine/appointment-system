import axios from "axios";

export const ai = axios.create({
  baseURL: "https://app.appointo.me",
});
