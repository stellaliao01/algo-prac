/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
// Time Complexity O(n/2) = O(n), Space Complexity = O(n)
function palindrome(string) {
    // Remove punctuation and spaces, then convert string to uppercase
    const trimmedString = string.replaceAll(/\W/g, '').toUpperCase();
  
    function recursiveCheck(inputString) {
      if (inputString.length <= 1) {
        return true;
      }
      if (inputString[0] !== inputString[inputString.length - 1]) {
        return false;
      }
      return recursiveCheck(inputString.slice(1, inputString.length - 1));
    }
    return recursiveCheck(trimmedString);
  }
  
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
    if (num < 3) {
      return num > 1; // 2 is the smallest prime number
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    // Loop through all prime numbers between 5 and sqrt(num)
    for (let i = 5; i ** 2 <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
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
  function fibonacciCalculator() {
    // Cache results for improved lookup time of future calls
    const cachedResults = {
      0: 0,
      1: 1,
      2: 1,
    };
    // Return a function to allow for memoization of results
    function calcAndCache(n) {
      if (n in cachedResults) {
        return cachedResults[n];
      }
      // Calculate the result if it is not cached
      cachedResults[n] = calcAndCache(n - 1) + calcAndCache(n - 2);
      return cachedResults[n];
    }
    return calcAndCache;
  }
  
  const nthFibonacci = fibonacciCalculator();
  
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
    context.boundFunction = func;
    return () => {
      return context.boundFunction();
    };
  }
  
  // Time Complexity = O(3 ** n), Space Complexity = O(n^2)
  // Calculates every sequence of throws a single player could throw over an n-round game of rock-paper-scissors.
  function rpsSequenceCalculator() {
    // Cache results for improved lookup time of future calls
    const cachedSequences = {
      0: [],
      1: [['rock'], ['paper'], ['scissors']],
    };
    // Return a function to allow for memoization of results
    return function calcPossibleSequences(numRounds) {
      // Calculate the sequence if it is not cached
      if (!(numRounds in cachedSequences)) {
        const previousThrows = calcPossibleSequences(numRounds - 1);
        const throwsRock = previousThrows.map((prevThrow) => ['rock'].concat(prevThrow));
        const throwsPaper = previousThrows.map((prevThrow) => ['paper'].concat(prevThrow));
        const throwsScissors = previousThrows.map((prevThrow) => ['scissors'].concat(prevThrow));
        // Cache the calculated sequence
        cachedSequences[numRounds] = throwsRock.concat(throwsPaper, throwsScissors);
      }
      return cachedSequences[numRounds];
    };
  }
  
  // Returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors.
  const rockPaperScissors = rpsSequenceCalculator();
  
  // Time Complexity = O(n**2), Space Complexity = O(n)
  function insertionSort(array) {
    const sortedArray = array;
    for (let i = 1; i < sortedArray.length; i++) {
      for (let j = i; j > 0; j--) {
        if (sortedArray[j] > sortedArray[j - 1]) {
          break; // Number is in the correct location
        }
        // Swap the current number with the previous if it is larger than the current number
        [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];
      }
    }
    return sortedArray;
  }
  
  // Time Complexity = O(n**2), Space Complexity = O(n)
  function bubbleSort(array) {
    const sortedArray = array;
    let sortedIndex = array.length;
    // Repeat until all items have been sorted
    while (sortedIndex > 1) {
      let lastSwapIndex = 0;
      // Move the largest unsorted element to the correct location in the array
      for (let i = 1; i < sortedIndex; i++) {
        if (sortedArray[i - 1] > sortedArray[i]) {
          [sortedArray[i - 1], sortedArray[i]] = [sortedArray[i], sortedArray[i - 1]];
          lastSwapIndex = i;
        }
      }
      sortedIndex = lastSwapIndex;
    }
    return sortedArray;
  }
  
  function merge(leftArray, rightArray) {
    const output = [];
    const COMBINED_LENGTH = leftArray.length + rightArray.length;
    let leftIndex = 0;
    let rightIndex = 0;
    while (output.length < COMBINED_LENGTH) {
      // Push the smallest number un-merged number into the output array
      if (rightIndex === rightArray.length || leftArray[leftIndex] <= rightArray[rightIndex]) {
        output.push(leftArray[leftIndex]);
        leftIndex += 1;
      } else {
        output.push(rightArray[rightIndex]);
        rightIndex += 1;
      }
    }
    return output;
  }
  
  // Time Complexity = O(nlogn), Space Complexity = O(n)
  function mergeSort(array) {
    if (array.length <= 1) {
      return array; // The array is already sorted
    }
    // Split the array in half
    const MIDPOINT = Math.ceil(array.length / 2);
    // Recursively sort the two halves of the array
    const leftSorted = mergeSort(array.slice(0, MIDPOINT));
    const rightSorted = mergeSort(array.slice(MIDPOINT));
    // Merge the two arrays in the correct order
    return merge(leftSorted, rightSorted);
  }
  