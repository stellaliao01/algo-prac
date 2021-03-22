/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {

};

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };

const needleInHaystack = (string, substring) => {
    // loop through char of string
    for (let i = 0; i < string.length; i++) {
        // loop through substring
        for (let j = 0; j < substring.length; j++) {
            // if char of string is not equal to char of substring, break
            if (string[i + j] !== substring[j]) {
                break;
                // else if all chars processed, must be true
            } else if (j === substring.length - 1) {
                return true;
            }
        }
    }
    return false;
};

const needleInHaystack2 = (string, substring) => {
    // Iterate through string while there is at least substring.length number of chars left
    for (let i = 0; i + substring.length <= string.length; i += 1) {
        // If slice from current char to length of substring equals substring, return true
        if (substring === string.slice(i, i + substring.length)) return true;
    }
    //else return false
    return false;
};