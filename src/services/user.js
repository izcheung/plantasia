import apiFetch from "./api";

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", { username, password });
