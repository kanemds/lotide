const assertArraysEqual = require('./assertArraysEqual');


const middle = data => {
  
  let result = [];
 
  if (data.length < 3 || !Array.isArray(data)) {
    return [];
  }
  
  let item = data.length;
  if (item % 2 === 0) {
    result.push(data[item / 2 - 1]);
    result.push(data[item / 2]);
  } else {
    result.push(data[Math.floor(item / 2)]);
  }
  return result;
};


module.exports = middle;


