// middle Function takes in an arr and returns the middle element(s)
const middle = function(arr) {
  // empty array to hold middle element(s)
  let middleElem = [];

  // arrays with one or two elements have no middle, return empty array
  if (arr.length === 1 || arr.length === 2) {
    return middleElem;
  }

  // finding middle elem of any arr
  const index = Math.floor(arr.length / 2);
  
  // if the arr length is even, push the first middle elm to middleElm
  if (arr.length % 2 === 0) {
    middleElem.push(arr[index - 1]);
  }

  // if arr length is odd or even, push the middle elm to midElm
  middleElem.push(arr[index]);

  // return final arr
  return middleElem;
};

module.exports = middle;