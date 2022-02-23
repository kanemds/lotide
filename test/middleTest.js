// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

// Note that for comparing arrays, Chai gives us assert.deepEqual.

// because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.

describe("middle", ()=> {
  it("return []", ()=> {
    assert.deepEqual(middle([1,2]), []);
  });
  it("return [2] for [1, 2, 3] ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("return [2, 3] for [1, 2, 3, 4]", ()=> {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });
  it("return [3, 4] for [1, 2, 3, 4, 5, 6]", ()=> {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
  
});




