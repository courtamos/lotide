const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeybyValue", () => {
  it("returns 'drama' for 'The Wire'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'comedy' for 'Brooklyn Nine-Nine'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns 'sci_fi' for 'The Expanse'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

});

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};