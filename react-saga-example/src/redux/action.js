export const addAction = (data) => {
  console.log("action called", data);
  return {
    type: "ADD_TO_CART",
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("remove called", data);
  return {
    type: "REMOVE_TO_CART",
    data,
  };
};
export const emptyCart = (data) => {
  console.log("empty called", data);
  return {
    type: "EMPTY_CART",
  };
};

console.log("⁄€‹›ﬁﬂ‡°·‚—±’”∏∏∏Ò¨Áˇ‰´„Œ/* ÍÎ˝ */ÔÒ¯ÚÆ¿˘¯˘¯Â˜ı◊Ç˛¸»`⁄€⁄€⁄");
