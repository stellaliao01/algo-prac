/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
    //create an empty obj variable to store the elements in the array
    const obj = {}
    //iterate over the array
    //push the element as the obj key and set the value to 1 and increment one if it appears
    array.forEach(el => {
        if (!obj[el]) {
            obj[el] = 1
        } else { obj[el] += 1 }
    })
    let result
    for (let key in obj) {
        if (obj[key] === 2) {
            result = key
        }
    }
    return parseInt(result)
};



/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    //create a map variable to store the elements in the array
    let testMap = new Map()
    array.forEach(el => {
        if (!testMap[el]) {
            testMap[el] = 1
        } else { testMap[el] += 1 }
    })
    // console.log(testMap)
    let result
    for (let key in testMap) {
        if (testMap[key] === 2) {
            result = key
        }
    }
    return parseInt(result)
};

console.log(duplicateNumberAdvanced([1, 2, 3, 4, 5, 6, 4]))

module.exports = { duplicateNumber, duplicateNumberAdvanced };/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

// O(n^2) --> nested loops brute force solution
const duplicateNumber1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        //inner loop to check all other elements against current element at i
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[j];
        }
    }
    // no duplicate in array
    return 'No duplicate found';
};

// O(n) time complexity, 0(n) space complexity - using object for cache
const duplicateNumber = (array) => {
    // create cache to store values
    const cache = {};
    // iterate over array
    for (let i = 0; i < array.length; i++) {
        // if num is in cache already, return it as the duplicate
        if (cache.hasOwnProperty(array[i])) return array[i];
        // if num is not found, add it to cache
        cache[array[i]] = true;
    }
    // no duplicate found
    return 'No duplicate found';
};

// O(n) time complexity, O(n) space complexity - using set for cache - set methods always have O(1) time complexity so it's slightly more efficient
const duplicateNumberSet = (array) => {
    // create cache to store values
    const cache = new Set();
    // iterate over array
    for (let i = 0; i < array.length; i++) {
        // if num is in cache already, return it as the duplicate
        if (cache.has(array[i])) return array[i];
        // if num is not found, add it to cache
        cache.add(array[i]);
    }
    // no duplicate found
    return 'No duplicate found';
};

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

// O(n) time complexity, O(1) space complexity
const duplicateNumberAdvanced = (array) => {
    // initialize min, max, and sum
    let min = Infinity,
        max = -Infinity,
        sum = 0;

    for (let i = 0; i < array.length; i++) {
        min = array[i] < min ? array[i] : min;
        max = array[i] > max ? array[i] : max;
        sum += array[i];
    }
    // calculate expected sum
    const expected = ((min + max) * (array.length - 1)) / 2;
    return sum - expected;
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };