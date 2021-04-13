export const extractDataFromObject = (resp) => {
  const obj = resp.data;
  const array = [];

  for (let key in obj) {
    array.push({
      ...obj[key],
      id: key,
    });
  }
  return array;
};

export const getId = (id) => {
  sessionStorage.setItem('id', JSON.stringify(id));
};
