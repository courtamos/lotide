const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1] for ('hello').e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [0, 2] for ('LHL').L", () => {
    assert.deepEqual(letterPositions("LHL").L, [0, 2]);
  });
});