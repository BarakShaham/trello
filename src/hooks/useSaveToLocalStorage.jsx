export const useSaveToLocalStorage = storageTitle => {
  const saveToLocalStorage = data => {
    try {
      localStorage.setItem(storageTitle, JSON.stringify(data));
    } catch (error) {
      console.log('local storage is full');
    }
  };
  return { saveToLocalStorage };
};
