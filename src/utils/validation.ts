export const isValidPrice = (price: number): boolean => {
  return price >= 0 && Number.isFinite(price);
};

export const isValidQuantity = (quantity: number): boolean => {
  return quantity >= 0 && Number.isInteger(quantity);
};

export const isValidOrder = (items: any[]): boolean => {
  return Array.isArray(items) && items.length > 0;
};