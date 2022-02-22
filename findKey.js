const assertEqual = require('./assertEqual');

const findKey = (keys, callback) => {
  
  for (const key in keys) {
    if (callback(keys[key])) {
      console.log(keys[key]);
      return key;
      
    }
  }
  return undefined;
};


const key = findKey({
  "Blue Hill": { stars: 1 },
  "noma":      { stars: 2 },
  "Akaleri":   { stars: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
},x => x.stars === 2); // => "noma"

assertEqual(key,"noma");

module.exports = findKey;