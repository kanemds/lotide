// const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      result = result.concat(data[i]);
    } else {
      result.push(data[i]);
    }
  }
  return result;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]) ,[1, 2, 3, 4, 5, 6]);



module.exports = flatten;