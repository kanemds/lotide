const eqArrays = require('./eqArrays');

const assertArraysEqual = (a,b) => {
  if (eqArrays(a,b) === false) {
    console.log("🤣🤣 sadly, not equal!");
  } else {
    console.log("😉😉 It's equal!");
  }
};

module.exports = assertArraysEqual;