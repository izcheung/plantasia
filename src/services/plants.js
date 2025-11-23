import apiFetch from "./api";

export const getPlants = () => apiFetch("GET", "/plants");
