import axios from "axios";
import { BASE_URL } from "../constants";

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});
