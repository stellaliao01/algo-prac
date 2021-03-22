/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion']
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat']
arr3 = [2, 100, 2000, 'dog', 3, 'lion']

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
  // iterate over the arrays 
  //   // check if the element is included in the other array

  //   const arr = []
  //   let result = args.reduce((acc, cv) => {
  //     return acc.filter(el => {
  //       if (cv.includes(el)) {
  //         arr.push(el)
  //       }
  //     })
  //   })
  //   console.log(arr)
  //   return arr
  let obj = new Map()
  let REsult = []
  let count = args.length

  for (let array of args) {
    for (let el of array) {
      if (!obj[el]) {
        obj[el] = 1
      }
      else obj[el] += 1
    }
  }
  for (let key in obj) {
    if (obj[key] === count) {
      REsult.push(key)
    }
  }

  if (REsult.length === 0) return 'Nothing in Common!'
  return REsult
}

arr1 = [2, 10, 'cat', 3, 99, 2000, 'dog', 'lion']
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat']
arr3 = [2, 100, 2000, 'dog', 3, 'lion']

// commonElements(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']


//CHERIES approach 
  // instantiate empty cache
  const memory = {};
  // loop over your array of arrays
  for (let i = 0; i < args.length; i++){
    const currentArray = args[i];
    // iterate over each individual array
    for (let j = 0; j < currentArray.length; j += 1) {
      const currentArrayItem = currentArray[j];
      // if the currentArrayItem doesn't exist in memory, add it and set value to 1
      if (!memory[currentArrayItem]) memory[currentArrayItem] = 1;
      // else increment value
      else memory[currentArrayItem] += 1;
      // way to write two conditionals using ternary operator
      // !memory[currentArrayItem] ? memory[currentArrayItem] = 1 : memory[currentArrayItem] === i ? memory[currentArrayItem] += 1 : null;
    }
  }
  // loop through memory object keys
  const common = Object.keys(memory)
  // filter out values that exist in all the arrays - if a key has a value equal to the length of the arguments (the num of input arrs), it has appeared in all of them
  .filter(item => memory[item] === args.length)
  // map through the filtered object keys and parse it into the correct data type - if the key is a stringified number, return a number
  .map(item => isNaN(Number(item)) ? item : Number(item));
  // if the common array is empty and has no elements in it, return "Nothing in Common!"
  if (!common.length) return 'Nothing in Common!'
  // else return the common elements
  return common;
}
​
// does account for duplicates within an array
// Time complexity: O(n^2) 
const commonElements = (...args) => {
// instantiate empty cache
const memory = {};
// loop over your array of arrays
for (let i = 0; i < args.length; i++){
  const innerObj = {};
  const currentArray = args[i];
  // iterate over each individual array
  for (let j = 0; j < currentArray.length; j += 1) {
    const currentArrayItem = currentArray[j];
    // this if else statement will factor in if the object already has a current item as a key, so that we don't increment a duplicate item in the currentArray
    // if array element doesn't exist as key in innerObj, add it and set it to true
    if (!innerObj[currentArrayItem]) {
      innerObj[currentArrayItem] = true;
    } else {
      // if we've seen the item, this will skip the rest of the loop
      continue;
    }
    // if the currentArrayItem doesn't exist in memory, add it and set value to 1
    if (!memory[currentArrayItem]) memory[currentArrayItem] = 1;
    // else increment value
    else if (memory[currentArrayItem] === i) memory[currentArrayItem] += 1;
    // way to write two conditionals using ternary operator
    // !memory[currentArrayItem] ? memory[currentArrayItem] = 1 : memory[currentArrayItem] === i ? memory[currentArrayItem] += 1 : null;
  }
}
// loop through memory object keys
const common = Object.keys(memory)
// filter out values that exist in all the arrays - if a key has a value equal to the length of the arguments (the num of input arrs), it has appeared in all of them
.filter(item => memory[item] === args.length)
// map through the filtered object keys and parse it into the correct data type - if the key is a stringified number, return a number
.map(item => isNaN(Number(item)) ? item : Number(item));
// if the common array is empty and has no elements in it, return "Nothing in Common!"
if (!common.length) return 'Nothing in Common!'
// else return the common elements
return common;
}
​
​
// Extension - does NOT account for duplicates within an array
// Time Complexity: O(n) - even though there are multiple loops, none of them are nested
const commonElementsOptimized = (...args) => {
// concat all elements from all arrays together into one array
const allElements = args.reduce((output, curArg) => ([...output, ...curArg]), []);

// create a cache counter of how many times each element exists in the concatenated array
const allElementsCache = allElements.reduce((cache, el) => {
  if (!cache[el]) cache[el] = 0;
  cache[el] += 1;
  return cache;
}, {});
// find all the common elements by:
//  1. filtering for only ones we've seen n number of times
//     (where n is equal to number of input args)
//  2. mapping over common elements and converting number elements 
//     back into number data types since they were stored in the 
//     cache as a string (because all object keys are stored as strings)
const common = Object.keys(allElementsCache)
  .filter(key => allElementsCache[key] === args.length)
  .map(key => isNaN(Number(key)) ? key : Number(key));
​
// return the common elements in their proper data type
return common.length ? common : 'Nothing in Common!';
}
​
​
​
// Extension to the extension - does account for duplicates within an array
// Time Complexity: O(n)
const commonElementsOptimized  = (...args) => {
  // go through each arg array
  // concat all array elements together
  // track in indexMap at what index a new array starts
  let concatArr = [];
  const indexMap = {};
  args.forEach((arr, i) => {
    indexMap[concatArr.length] = true;
    concatArr = [...concatArr, ...arr]
  });
  let seenInCurrentArray = {};
  const memory = {};
  // then go through the concat array
  // create cache counter for how many times we've seen an element
  // filtering out duplicates WITHIN an array by using the for each array
  concatArr.forEach((item, i) => {
    if (indexMap[i]) seenInCurrentArray = {};
    if (!seenInCurrentArray[item]) {
      if (!memory[item]) memory[item] = 0;
      memory[item] += 1;
      seenInCurrentArray[item] = true;
    }
  });
  // go through cache keys and filter for only items with same count as num of array args
  // also since we used object keys, need to re-parse items that were numbers back into nums
  const common = Object.keys(memory)
    .filter(item => memory[item] === args.length)
    .map(item => isNaN(Number(item)) ? item : Number(item));
    if (!common.length) return 'Nothing in Common!';
  return common;
}



/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
}

module.exports = {commonElements, commonElementsOptimized}
