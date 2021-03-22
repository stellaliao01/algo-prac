/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

[1, 2]

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `coinSum`:

// aka, there's only one way to make 1p. that's with a single 1p piece
coinSum(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
coinSum(2) === 2
*/

// Time Complexity = O(2 ** n)? Space Complexity = O(2 ** n)?
function coinSumCalculator() {
    const COINS = [1, 2, 5, 10, 20, 50, 100, 200];
    // Cache results for improved lookup time of future calls
    const cachedSums = {
      0: { 0: 0 },
    };
    // Return a function to allow memoization of cached results
    return function calcCombinations(total, currentCoin = 0) {
      // Prevent accessing data outside of bounds
      if (total < 0 || currentCoin === COINS.length || COINS[currentCoin] > total) {
        return 0;
      }
      // Initialize the cache
      if (!(total in cachedSums)) {
        cachedSums[total] = {};
      } else if (currentCoin in cachedSums[total]) {
        // If cached, return the number of ways the current coin can be used to reach the total
        return cachedSums[total][currentCoin];
      }
      if (COINS[currentCoin] === total) {
        // The number of combinations must be 1 if the current coin's value is equal to the total
        cachedSums[total][currentCoin] = 1;
      } else {
        // Calculate the possible combinations of coins recursively
        const NEW_TOTAL = total - COINS[currentCoin];
        cachedSums[total][currentCoin] =
          calcCombinations(NEW_TOTAL, currentCoin) + calcCombinations(total, currentCoin + 1);
      }
      return cachedSums[total][currentCoin];
    };
  }
  
  const coinSum = coinSumCalculator();
  