const assertEqual = require('./assertEqual');

// let tail = (keys) => {
//   if (keys.length <= 1) {
//     return [];
//   }
//   return keys.slice(1);
// };

let tail = (data) => {
  let value = [];
  for (let i = 0; i < data.length; i++) {
    if (i >= 1) {
      value.push(data[i]);
    }
  }
  return value;
};


module.exports = tail;

