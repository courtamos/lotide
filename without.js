// eqArrys Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertArraysEqual Function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`[${arr1}] and [${arr2}] are equal`);
  } else {
    console.log(`[${arr1}] and [${arr2}] are NOT equal`);
  }
};

// without Function
const without = function(source, itemsToRemove) {
  // create new array for it's to be pushed to
  let newArr = [];

  // loop source array
  for (let i = 0; i < source.length; i++) {
    // remove not wanted items and continue the loop
    if (itemsToRemove.includes(source[i])) {
      continue;
      // push items into new array
    } else {
      newArr.push(source[i]);
    }
  }
  // return new array without itemsToRemove
  return newArr;
};

// test code
const example1 = [1, 2, 3];

console.log(assertArraysEqual(without(example1, [1]), [2, 3]));
console.log(assertArraysEqual(example1, [1, 2, 3]));

console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));
console.log(assertArraysEqual(without([9, 5, 5, 4, 3, 1], [5, 1]), [9, 4, 3]));
