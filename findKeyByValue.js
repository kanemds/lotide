const assertEqual = require('./assertEqual');


const findKeyByValue = (obj,value) => {
 
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;