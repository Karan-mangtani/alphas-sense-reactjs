import { User } from "./data";
export const setIsLogin = (value) => {
  localStorage.setItem("login", value);
};

export const clearLogin = () => {
  localStorage.removeItem("login");
};

export const getLogin = () => {
  return localStorage.getItem("login");
};

export const verifyUser = (formUser) => {
  return JSON.stringify(formUser) === JSON.stringify(User);
};