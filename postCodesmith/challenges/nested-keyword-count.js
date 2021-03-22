/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {

};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {

};

module.exports = { keywordCount, keywordMode };


/*
​
Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.
​
keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0
​
*/

const keywordCount = (array, keyword) => {
    let total = 0;

    array.forEach(el => {
        if (Array.isArray(el)) total += keywordCount(el, keyword);
        if (el === keyword) total++;
    });

    return total;
};

console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')) // -> 2 because 'hi' appears twice
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')) // -> 3
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol')) // -> 0

/*
​
Extension:
​
Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.
​
keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']
​
*/

const keywordMode = (array) => {
    const tally = {};
    let maxCount = 0;

    const process = arr => {
        arr.forEach(val => {
            if (Array.isArray(val)) {
                process(val);
                return;
            }

            tally[val] = (tally[val] || 0) + 1;
            maxCount = Math.max(maxCount, tally[val]);
        });
    };

    process(array);

    const keywords = Object.keys(tally);
    const results = keywords.filter(word => tally[word] === maxCount);
    return results.sort();
};

module.exports = { keywordCount, keywordMode };