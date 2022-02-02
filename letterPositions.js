const conutLetters = (sentence) => {
  let results = {};
  for (let i = 0; i < sentence.length; i ++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
      // take out empty space
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

console.log(conutLetters("lighthouse in the house"));