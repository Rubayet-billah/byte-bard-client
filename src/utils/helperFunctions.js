export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const itemString = localStorage.getItem(key);
  return itemString ? JSON.parse(itemString) : null;
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const isItemInLocalStorage = (key) => {
  return localStorage.getItem(key) !== null;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
