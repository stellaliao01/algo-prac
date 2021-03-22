/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    //create an empty obj variable
    //iterate through the array
    //store each element as the key in an obj and the amount of times it appears as the value
    //then we want to loop through our obj variable and look for the highest value and then return the higher key 
    const obj = {}
    array.forEach(function (el) {
        if (!obj[el]) {
            obj[el] = 0
        }
        obj[el] += 1
    })

    let maxVal = 0
    let result

    for (let key in obj) {
        if (obj[key] >= maxVal) {
            maxVal = obj[key]
            result = key
        }
    }
    return parseInt(result)
};

// console.log(mode([1, 1, 1, 2, 3, 3, 4, 4, 5, 5]))
// console.log(mode([-7, -7, -7]))
/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
    array = array.flat()
    return mode(array)
};
// console.log(modeNested([1, 2, 3, [4, 5], 6, 3, 2, 2, 5]))

* /


// Time Complexity: O(2n) --> O(n)
// Space Complexity: O(n)

const mode = array => {
    // keep track of frequence at each value 
    const cache = {}; // { ele: frequencey, ele: frequency }
    // store current mode, initalize to infinity
    let mode = -Infinity;
    // store max freq of that current mode
    let maxFreq = 0;

    // iterate through the arr
    array.forEach(ele => {
        // insert each val as a key in cache
        // if val already exists as a key (truthy), break out parens, add 1 to existing value
        // if val does not exist (undefined), then right side of || is evaluated, and cache[val] initalized to 1
        cache[ele] = (cache[ele] || 0) + 1; // true || X

        // check if current element has occured more times than the max occurrence of any value so far
        // edge case: check if another element has occurred the same number of times as current element
        // if so, check if current element is greater than the stored mode
        if (cache[ele] > maxFreq || (cache[ele] === maxFreq && ele > mode)) {
            // if so, then we have a new mode
            // update max count to frequency of current element
            maxFreq = cache[ele];
            // update mode to current element
            mode = ele;
        };

    });

    return mode;
};




// Test Cases
console.log(mode([3, 3])); // 3
// console.log(mode([3, 2, 4, 3])) // 3
// console.log(mode([7, 5, 8, 8, 2, 5])); // 8
// console.log(mode([7, 5, 8, 8, 10, 10, 10, 2, 2, 2, 2, 5])); // 2








/*
​
Extension:
​
Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.
​
Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.
​
e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 
​
*/

const modeNested = array => {

};

module.exports = { mode, modeNested };