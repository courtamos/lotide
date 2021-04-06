const flatten = function(arr) {
  const newArr = []; // empty array to push into

  for (let i = 0; i < arr.length; i ++) { //loop through arr
    const current = arr[i]; // var to hold current position in loop

    if (!Array.isArray(current)) { // check to see if current is NOT an array
      newArr.push(current); // if NOT array push current into newArr
    }

    for (let j = 0; j < arr[i].length; j ++) { // loop through nested arrays
      newArr.push(current[j]); // push current into newArr
    }
  }

  return newArr;
};

module.exports = flatten;