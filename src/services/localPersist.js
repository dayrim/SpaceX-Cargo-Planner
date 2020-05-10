export const loadShipments = () => {
  const defaultShipment = JSON.stringify([]);
  return JSON.parse(localStorage.getItem("shipments") || defaultShipment);
};

export const saveShipments = (shipments) => {
  localStorage.setItem("shipments", JSON.stringify(shipments));
};
