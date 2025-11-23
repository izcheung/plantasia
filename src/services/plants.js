import apiFetch from "./api";

export const getPlants = () => apiFetch("GET", "/plants");

export const getPlantId = (id) => apiFetch("GET", `/plants/${id}`);
