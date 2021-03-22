/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {

}

module.exports = { mergeSort };

const mergeSort = (array) => {
  // check to see if array is splittable - if not, return array
  if (array.length < 2) return array;

  // split array into two arrays down the middle
  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);

  // run merge function on the subarrays passing through the merge sort function
  return merge(mergeSort(left), mergeSort(right));
};

// * Merge helper function
const merge = (left, right) => {
  // decleare an empty result array
  const result = [];
  // while both halves have length
  while (left.length && right.length) {
    // if left at first idx is smaller or equal to right at first idx
    if (left[0] <= right[0]) {
      // push left at first idx into result
      result.push(left.shift());
      // if not, push right into result
    } else {
      result.push(right.shift());
    }
  }
  // if there's anything left in left, push the remainder in left into result
  while (left.length) result.push(left.shift());
  // if there's anything left in right, push the remainder in right into result
  while (right.length) result.push(right.shift());

  // when both arrays are empty, return merge-sorted array
  return result;
};

module.exports = { mergeSort };