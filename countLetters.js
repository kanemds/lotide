// const assertEqual = require('./assertEqual');
// const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

const countLetters = (datas) => {
  let result = {};
  for (const data of datas) {
    if (data === " ") {
      continue;
    }
    if (result[data]) {
      result[data] += 1;
    } else {
      result[data] = 1;
    }
  }
  return result;
};

assertObjectsEqual(countLetters("lighthouse in the house") , {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1 });

module.exports = countLetters;