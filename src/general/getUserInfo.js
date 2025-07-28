import $ from "jquery";
import { toast } from "react-toastify";
import { API_URL_USERS_PATH } from "./constants.js";

export function getUserInfo() {
  let userInfo = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    phone: localStorage.getItem("phone"),
    registrationDate: localStorage.getItem("registrationDate"),
    ordersCount: localStorage.getItem("ordersCount"),
    petsCount: localStorage.getItem("petsCount"),
  };
  return userInfo;
}
