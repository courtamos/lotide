const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr === undefined) {
      return 'undefined'
    } else {
      return arr[0]
    }
  }
}

// test cases
assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head([1]), 1); // pass
assertEqual(head([]), 5); // fail, undefined
assertEqual(head([5,6,7]), 6); // fail
assertEqual(head([]), ); // pass, undefined