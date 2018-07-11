const arr2obj = arr => {
  return arr.reduce((obj, value, index, arr) => {
    if (index % 2 == 0) {
      obj[value] = null;
    } else {
      obj[arr[index - 1]] = value;
    }
    return obj;
  }, {});
};

console.log(arr2obj([1, 2, "a", 3, "b", "c"]));
