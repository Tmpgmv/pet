export const LOGIN = "/login";
export const ACCOUNT = "/account";
export const CHANGE_EMAIL = "/email";
export const CHANGE_PHONE = "/phone";
export const PETS = "/pets";
export const CAROUSEL = "/slider";

export const SERVER_URL = "https://pets.сделай.site"
export const API_URL = SERVER_URL + "/api";
export const API_URL_REGISTRATION_PATH = API_URL + "/register";
export const API_URL_SUBSCRIPTION_PATH = API_URL + "/subscription";
export const API_URL_LOGIN_PATH = API_URL + "/login";
export const API_URL_USERS_PATH = API_URL + "/users";
export const API_URL_USERS_POSTS = API_URL_USERS_PATH +"/orders"; // Объявления, добавленные пользователем.
export const API_CHANGE_EMAIL_URL = API_URL_USERS_PATH + CHANGE_EMAIL;
export const API_CHANGE_PHONE_URL = API_URL_USERS_PATH + CHANGE_PHONE;
export const API_PETS_URL = API_URL + PETS;
export const API_CAROUSEL_URL = API_PETS_URL + CAROUSEL;

