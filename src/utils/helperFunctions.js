export const setToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const itemString = localStorage.getItem(key);
    return itemString ? JSON.parse(itemString) : null;
  }
};

export const removeFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const isItemInLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) !== null;
  }
  return false;
};

export const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
