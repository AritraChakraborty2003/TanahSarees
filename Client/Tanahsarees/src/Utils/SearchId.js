export const SearchId = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === id) {
      return true;
    }
  }
  return false;
};
