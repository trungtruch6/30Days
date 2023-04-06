function arrToObj(arr) {
  arr.reduce((index, cur) => {
    index[(cur[0] = cur[1])];
  }, {});
}

const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
console.log(obj1);
//  Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
