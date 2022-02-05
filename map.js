

const eqArrays = (firstSet,secondSet) => {
  
  if (firstSet.length !== secondSet.length) {
    return false;
  }
  for (let i = 0; i < firstSet.length; i++) {
    if ((firstSet[i] !== secondSet[i])) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = (a,b) => {
  if (eqArrays(a,b) === false) {
    console.log("🤣🤣 sadly, not equal!");
  } else {
    console.log("😉😉 It's equal!");
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);

const upperCase = words.map(word => word.toUpperCase());

const reverse = words.map(word => word.slice(1,3));
console.log(reverse);

// scenario 1
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
// scenario 2
assertArraysEqual(upperCase,[ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
// scenario 3
assertArraysEqual(reverse,[ 'ro', 'on', 'o', 'aj', 'oo' ]);

