/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  return array.some(el => (el === target))
};


/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  const array = matrix.flat()
  return array.some(el => (el === target))

};

module.exports = { findInOrderedSet, findIn2dMatrix };


//their solution
/*
Write a function findInOrderedSet that determines if a given number exists within an array of numbers.
​
Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?
​
ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/


// This brute force approach simply traverses the entire array until the item is found, and returns false if it is not 
// O(n) time complexity, O(1) space complexity
const findInOrderedSet = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }
  return false;
}


// This more efficient approach, called "binary search", leverages the fact that the array is sorted.
// In each step through the while loop, half of the array's elements are discarded by comparing the target with the midpoint of the search range,
// then narrowing the range until the target is found or the search range closes in on itself.

// Iterative implementation of binary search
// O(log n) time complexity, O(1) space complexity
const findInOrderedSet2 = (array, target, startIndex = 0, endIndex = array.length - 1) => {
  let midIndex;

  while (startIndex <= endIndex) {
    midIndex = Math.floor((startIndex + endIndex) / 2);
    // If the midpoint of our search range equals the target, success! 
    if (array[midIndex] === target) return true;
    // If the target is greater than the midpoint, narrow the search range to the larger half
    if (array[midIndex] > target) endIndex = midIndex - 1;
    // If the target is less than the midpoint, narrow the search range to the smaller half
    if (array[midIndex] < target) startIndex = midIndex + 1;
  }

  // If the while loop's condition evaluates false, it means we've run out of elements to search, 
  // and the target is not in the array.
  return false;
}

// Recursive implementation of binary search
// O(log n) time complexity, O(1) space complexity
const findInOrderedSet3 = (array, target, startIndex = 0, endIndex = array.length - 1) => {
  let mid = Math.floor((startIndex + endIndex) / 2);
  // Basecase 1: If the midpoint of our search range equals the target, success! 
  if (target === array[mid]) return true;
  // Basecase 2: If we've run out of elements to search and still not found the target, it is not in the array. 
  if (startIndex === endIndex) return false;

  // Otherwise, make a recursive call with the same array, narrowing the search range to the lower or upper half
  if (target > array[mid]) return findInOrderedSet3(array, target, mid + 1, endIndex);
  if (target < array[mid]) return findInOrderedSet3(array, target, startIndex, mid - 1);
}


/*
Extension:
​
Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  
​
ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false
​
*/


// This brute force approach traverses the entire matrix until the target is found
// O(n^2) time complexity
const findIn2dMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    const subArray = matrix[i];
    for (let j = 0; j < subArray.length; j++) {
      if (subArray[j] === target) return true;
    }
  }
  return false;
};



/* 
   This more efficient approach performs a binary search on the middle *column* of the matrix,
   until only two potential candidate rows are left. From there, binary searches are performed on
   whichever portion of these two subarrays might contain the target.
   O(log m + log n) time complexity, where m and n represent the number of rows and columns in the matrix
   O(1) space complexity
*/

const findIn2dMatrix2 = (matrix, target) => {
  let n = matrix.length;
  let m = matrix[0].length;

  // If the matrix only has one row, perform binary search on it  
  if (n == 1) return findInOrderedSet2(matrix[0], target);


  // Perform binary search on the *rows* of the matrix until we find two adjacent rows where the target should be located
  // Initialize a "startRow" pointer representing the beginning of the binary search row range (aka indices of the matrix)
  let startRow = 0;
  // And a pointer for the end of the range
  let endRow = n - 1;
  // And a pointer for the midpoint of any given row
  let middleElement = Math.floor(m / 2);

  while ((startRow + 1) < endRow) {
    let midRow = Math.floor((startRow + endRow) / 2);

    if (matrix[midRow][middleElement] == target) return true;
    if (matrix[midRow][middleElement] > target) endRow = midRow;
    if (matrix[midRow][middleElement] < target) startRow = midRow;
  }

  // At this point the target is either in matrix[startRow] or matrix[endRow]

  if (target === matrix[startRow][middleElement]) return true;
  if (target === matrix[endRow][middleElement]) return true;

  // The target should be in either the first or second half of the first row candidate
  // or in the first or second half of the second row candidate
  // Check which condition applies, and then binary search that portion


  if (target < matrix[startRow][middleElement])
    return findInOrderedSet(matrix[startRow], target, 0, middleElement - 1);
  if (target > matrix[startRow][middleElement] && target <= matrix[startRow][m - 1])
    return findInOrderedSet(matrix[startRow], target, middleElement + 1, m - 1);

  if (target < matrix[endRow][middleElement] && target >= matrix[endRow][0])
    return findInOrderedSet(matrix[endRow], target, 0, middleElement - 1);
  if (target > matrix[endRow][middleElement])
    return findInOrderedSet(matrix[endRow], target, middleElement + 1, m - 1);
}
Collapse














Message #hack - hour - solutions






Thread
just - the - cohort

