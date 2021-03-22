/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {

};

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };

const permPalin = (str) => {
    // if input is not a string
    if (typeof str !== 'string') return false;
    // if input is an empty string
    if (str === '') return true;


    // helper functions permute, isPalindrome, and swap
    const permute = (string, start, index) => {

        if (start === string.length - 1) return array.push(string);

        for (let i = start; i < string.length; i++) {
            // swap string at start and current index
            string = swap(string, start, i);
            // recursively call permute to open new execution context with swapped string
            permute(string, start + 1, i);
            // swap back at start and current index before incrementing index
            string = swap(string, start, i);
        }
    }

    const isPalindrome = string => {
        // sanitize string
        const newString = string.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

        for (let i = 0; i < Math.floor(newString.length / 2); i++) {
            if (newString[i] !== newString[(newString.length - 1) - i]) return false;
        }

        return true;
    }

    const swap = (string, i, j) => {
        console.log(`swap(${str})`, i, j);
        const arr = string.split('');
        [arr[j], arr[i]] = [arr[i], arr[j]];
        return arr.join('');
    }

    // array to store permutations of string
    const array = [];

    // populate array with permutations
    permute(str, 0);

    // iterate through permutation array to find if any strings are palindromes
    for (let i = 0; i < array.length; i += 1) {
        if (isPalindrome(array[i])) return true
    }

    // if no palindrome detected in array, return false
    return false;

}

/**
 * 2. Memoize string and check for appropriate number of odd occurences
 * 
 * - If string length is even, there should be no odd character frequencies
 * - If string length is odd, there should be one odd character frequency
 * 
 * - Memoized object examples
 * 
 * permPalinII('aabbccc')
 * - string length = 7 & one odd character frequency => true
 * => { 'a': 0, 'b': 0, 'c': 1 } 
 * 
 * permPalinII('ffedeedd')
 * - string length = 8 & two odd character frequencies => false
 * => { 'd': 1, 'e': 1, 'f': 0} 
 * 
 * permPalinII('ffggfg')
 * - string length = 6 & zero odd character frequencies => true
 * => { 'f': 0, 'g': 0 }
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 */
const permPalinII = str => {
    // if input is not a string
    if (typeof str !== 'string') return false;
    // if input is an empty string
    if (str === '') return true;

    const cache = {};

    // determine whether string length is even or odd
    const strLengthEven = str.length % 2 === 0;

    // populate cache with characters as keys,
    // and whether or not each character occurs an even (0) or odd (1) amount of times
    // - like bit flipping => 'b' occurs 5 times => {'b': 1}, 'a' occurs 4 times => {'a': 0}
    for (let i = 0; i < str.length; i++) {
        cache[str[i]] = cache[str[i]] === 1 ? 0 : 1;
    }

    // calculates how many 1's exist as values in the object - the number of characters with odd frequencies
    const oddFreqChars = Object.entries(cache).reduce((acc, currArr) => {
        return currArr[1] > 0 ? acc + 1 : acc
    }, 0)

    // if string length is even and no odd character frequencies => true
    if (strLengthEven && !oddFreqChars) return true;
    // else if string length is odd and only one odd character frequency => true
    else if (!strLengthEven && oddFreqChars === 1) return true;
    // else there is no palindrome possible
    else return false;

}
