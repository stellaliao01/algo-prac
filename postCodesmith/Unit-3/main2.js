/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
// Time Complexity O(n/2) = O(n), Space Complexity = O(n)
function palindrome(string) {
    const trimmedString = string.replace(/\W/g, '').toUpperCase();
    function recursiveCheck(str) {
        if (str.length <= 1) return true
        if (str[0] === str[str.length - 1]) {
            return recursiveCheck(str.slice(1, -1))
        }
        return false
    }
    return recursiveCheck(trimmedString)
}

// console.log(palindrome('level')) // true
// console.log(palindrome('test')) // false
// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"))// true

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
// Time Complexity = O(sqrt(n) / 6) = O(sqrt(n)), Space Complexity = O(1)
// All primes greater than 3 are of the form 6k ± 1, where k is any integer greater than 0.
// e.g. (6 * 1) - 1 = 5, (6 * 1) + 1 = 7, (6 * 2) - 1 = 11, (6 * 2) + 1 = 13, etc.
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

// console.log(isPrime(2))
// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(7))

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
 * performance difference.
 */
// Time Complexity = O(2**n) , Space Complexity = O(n)
// Not sure how to describe how caching affects time complexity
function fibonacciCalculator(n, cache = { 0: 1, 1: 1, 2: 1 }) {
    if (n in cache) return cache[n]

    cache[n] = fibonacciCalculator(n - 1) + fibonacciCalculator(n - 2)

    return cache[n]
}


// console.log(fibonacciCalculator(2))
// console.log(fibonacciCalculator(3))
// console.log(fibonacciCalculator(4))
// console.log(fibonacciCalculator(5))
// console.log(fibonacciCalculator(6))
// console.log(fibonacciCalculator(35))

/** returns a function with a context bound to this
 * const matt = {
 *  name: 'matt',
 *  shout: function() {
 *      alert(this.name);
 *  }
 * };
 * let boundShout = functionBind(matt.shout, matt);
 * boundShout(); -> alerts 'matt;
 * boundShout = functionBind(matt.shout, {name: 'kim'});
 * boundShout(); -> alerts 'kim'
 */
// Time Complexity = O(1), Space Complexity = O(1)
function functionBind(func, context) {
    context.newFunction = func
    return function () {
        return context.newFunction()
    }
}

// Time Complexity = O(3 ** n), Space Complexity = O(n^2)
// // Calculates every sequence of throws a single player could throw over an n-round game of rock-paper-scissors.
// function rpsSequenceCalculator(rounds) {
//     const options = [rock, paper, scizzors]
//     let result = []


//     for (leti = 0; i < rounds; i++) {
//         let tempArr = []
//         for (let j = 0; j < options.length; j++) {
//             tempArr.push(options[j])
//         }
//     }



// }

// Returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors.
// const rockPaperScissors = rpsSequenceCalculator();

// 1 round game, they can only either throw rock || paper || scissors 
//2 round // they can throw rock rock || rock paper || rock scissors || paper rock || paper scizzors || paper paper 


// Time Complexity = O(n**2), Space Complexity = O(n)
function insertionSort(array) {
    let count = 0
    while (count < array.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array)
            }
        }
        count++
    }
    return array
}

function swap(i, j, array) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}


// console.log(insertionSort([5, 4, 2, 3, 1]))
// Time Complexity = O(n**2), Space Complexity = O(n)
function bubbleSort(array) {
    let counter = 0
    let isSorted = false
    while (!isSorted) {
        isSorted = true
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array)
                isSorted = false
            }

        }
        counter++
    }
    return array

}

// console.log(bubbleSort([5, 4, 3, 1, 2]))
function merge(leftArray, rightArray) {

}

// Time Complexity = O(nlogn), Space Complexity = O(n)
function mergeSort(array) {

}
