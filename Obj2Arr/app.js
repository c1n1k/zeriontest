const obj2arr = obj => {
  const arr = [];
  Object.keys(obj).map(x => {
    arr.push(x, obj[x]);
  });
  return arr;
};

console.log(obj2arr({ 1: 2, a: 3, b: "c" }));
