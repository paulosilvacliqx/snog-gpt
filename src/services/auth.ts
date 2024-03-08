export const TOKEN_KEY = "TOKEN_TRIPNESS";
export const USER = "USER";

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const logout = () => localStorage.removeItem(TOKEN_KEY);
