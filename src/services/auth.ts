import { UserDataAuth } from "../contexts/ContextsFiles/UserData";

export const TOKEN_KEY = "TOKEN_TRIPNESS";
export const USER = "USER";

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const logout = () => localStorage.removeItem(TOKEN_KEY);

export const setUser = (user: UserDataAuth) =>
  localStorage.setItem(USER, JSON.stringify(user));

export const getUser = (): UserDataAuth =>
  JSON.parse(localStorage.getItem(USER) || "");
