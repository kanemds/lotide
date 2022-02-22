const assertArraysEqual = require('./assertArraysEqual');


const middle = data => {
  
  let result = [];
 
  if (data.length < 3 || !Array.isArray(data)) {
    return [];
  }
  
  let nums = data.filter(data => Number(data));
  let item = nums.length;
  if (item % 2 === 0) {
    result.push(nums[item / 2 - 1]);
    result.push(nums[item / 2]);
  } else {
    result.push(nums[Math.floor(item / 2)]);
  }
  return result;
};

module.exports = middle;


