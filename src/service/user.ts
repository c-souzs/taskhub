import { UserLogin } from "../types/user";
import api from "./axios";

export const postUser = async ({ email, password }: UserLogin) => {
  const response = await api.post("/user/auth/register", {
    login: email, 
    password
  });

  return response;
}

export const loginUser = async ({ email, password }: UserLogin) => {
  const response = await api.post<{token: string}>("/user/auth/login", {
    login: email, 
    password
  });

  return response;
}