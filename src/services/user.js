import apiFetch from "./api";

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", { username, password });

export const createSession = ({ username, password }) =>
  apiFetch("POST", "/users/session", { username, password });

// Session token
const SESSION_KEY = "token";
export const setSessionToken = (sessionToken) => {
  return localStorage.setItem(SESSION_KEY, sessionToken);
};

export const getSessionToken = () => {
  return localStorage.getItem(SESSION_KEY);
};

export const removeSessionToken = () => {
  return localStorage.removeItem(SESSION_KEY);
};
