
/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

const nestedArrMax = arr => {
    if (arr.length === 0) return undefined
    arr = arr.flat()
    return Math.max(...arr)
};


/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {

};

module.exports = { nestedArrMax, nestedArrMaxLevel };


/* 
​
Write a function to find the largest number in an arbitrarily nested array of numerical values. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.
​
Ex:
​
const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10
​
const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10
​
*/


// Iterative Solution
// Time Complexity - O(n)
// Space Complexity - O(3n)

// Worth mentioning: The prompt specified an array of numerical values. 
// If that wasn't specified, we would have to either:
//  - check each item in reduce to make sure it is a number
//  - rewrite our regex to replace all values that aren't numbers, spaces or commas

const nestedArrMaxIterative = arr => {
    if (arr.length < 1) return undefined;
    //stringify input array
    const stringArr = JSON.stringify(arr);
    // remove all brackets in the string
    // replace starting and closing brackets
    // numString is now a string representing a flat array
    const numString = `[${stringArr.replace(/\[|\]/g, "")}]`;
    // parse numString back into array
    const numArrayFlat = JSON.parse(numString);
    // reduce flat array to find max
    const max = numArrayFlat.reduce((acc, cur) => {
        if (acc > cur) return acc;
        else return cur;
    })
    return max;
}


// Linear Recursive Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
// Advantages - better space complexity! We're not creating any new arrays.
const nestedArrMax = arr => {
    let max;

    arr.forEach(el => {
        // check if the element is an array
        // if it is, recursively find largest value from that array 
        // compare largest value from sub array with the current max
        if (Array.isArray(el)) max = Math.max(nestedArrMax(el), max);
        // check if max is still undefined or current element is greater than max
        // if it is, set max to current element
        if (!max || el > max) max = el;
    });

    return max;
};

/*
​
Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.
​
The original array is considered to be at depth 1, any inner array is depth 2, etc.
​
Ex:
​
const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1
​
nestedArrMaxLevel(arrNested, 2);
-> 6
​
nestedArrMaxLevel(arrNested, 3);
-> 10
​
*/


// Extension: Linear Recursive Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
// Similar approach to the recursive solution for the standard problem
// Decrement level with each turn, and return the current max if we're at level 1

const nestedArrMaxLevel = (arr, level) => {
    let max;

    arr.forEach(el => {
        if (Array.isArray(el)) {
            // if level is 1, we've hit the deepest level we're allowed to go to - no more recursion
            if (level === 1) return max;
            // find max of nested array, decrementing level
            max = Math.max(nestedArrMaxLevel(el, level - 1), max);
        }
        if (!max || el > max) max = el;
    });

    return max;
};


module.exports = { nestedArrMax, nestedArrMaxLevel };