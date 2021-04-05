const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['lighthouse', 'labs'] for ['yo yo', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['yo yo', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });

  it("returns [] for ['yo yo']", () => {
    assert.deepEqual(tail(['yo yo']), []);
  });

});
