import apiFetch from "./api";
export const addToCart = ({ plantId, quantity, potColor }) =>
  apiFetch("POST", `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor,
  });
