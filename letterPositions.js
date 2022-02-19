const letterPositions = (sentence) => {
  let results = {};
  for (let i = 0; i < sentence.length; i ++) {
    const letter = sentence[i].toLowerCase();
    if (letter === " ") {
      continue;
      // take out empty space
    }
    if (results[letter]) {
      //when there is same letter, since, its array, we can push the index.
      results[letter].push(i);
    } else {
      //this one make the key became array
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;