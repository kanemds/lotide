// const without = (setOne,setTwo) => {
//   const result = setOne.filter((item) => {
//     return setTwo.indexOf(item) < 0;
//   });
//   return result;
// };
const without = (setOne,setTwo) => {
  let result = [];
  for (let i = 0; i < setOne.length; i++) {
    if (setTwo.indexOf(setOne[i]) < 0) {
      console.log(setTwo.indexOf(setOne[i]));
      result.push(setOne[i]);
    }
  }
  return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, "3", "6", 9 , "v", "1","1"]));


module.exports = without;