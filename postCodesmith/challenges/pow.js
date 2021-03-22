/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
    if (power === 0) return 1 // edge case
    let result = 1
    while (power >= 1) {
        result *= base
        power--
    }
    return result
}


/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
    // for a recursive approach remember to write your base case
    // write your recursive logic here
    //base case - when power is 1, return base
    if (power === 0) return 1 //edge case
    if (power === 1) return base
    //multiply base by recursive call - (base and decrement the power)
    return base * pow(base, power - 1)
}

module.exports = { pow, powRecurse };
// * Big O analysis:
//  * Time complexity => 0(n) Linear time complexity to the 'power' argument.As you can see we are
//     * going on a loop until counter, which starts at the value of 'power', reaches 1. This means that
//         * the time that this algorithm will take to complete is proportional to the value of the 'power'
//             * argument.
//  *
//  * Space complexity: O(1) constant space complexity.We will create the same amount of variables, and
//     * will use / occupy the same amount of memory regardless of the size of any of the function's
//         * parameters.
//  * /

function pow(base, power) {
    // If we raise our base value to the first power, return 1
    if (power === 0) return 1;
    // otherwise, return our base value
    else if (power === 1) return base;
    // declare a variable with label value, assign it to be our passed in base number
    let value = base;
    // initialize counter and assign its value to be our passed in power value
    for (let counter = power; counter > 1; counter--) {
        // multiply our base value, times itself based on our counter's value
        value *= base;
    }
    // return our value
    return value;
}

/**
 * @name powRecurse - calculates base ^ power recursively
 * @param {Number} base
 * @param {Number} power
 * @returns {Number}
 *
 * notes: a recursive approach is sometimes considered more "elegant" given that it is usually
 * simpler and can be written with fewer lines of code. Downsides to recursion are that the call
 * stack is filled up with each recursive call which impacts space complexity.
 *
 * Big O analysis
 * Time complexity => 0(n) Linear time complexity to the 'power' argument. As you can see we are
 * recursively calling the function as many times as the value of the 'power' argument is.
 *
 * Space complexity => O(n) linear space complexity to the 'power' argument. Since the call
 * stack is increased with each recursive call this means that the space that this algorithm will
 * occupy in memory is proportional to the 'power' argument.
 */

function powRecurse(base, power) {
    // base case
    if (power === 0) return 1;
    if (power === 1) return base;
    // recursive logic here
    return base * pow(base, power - 1);
}

/**
 * @name powRecurseTCO - calculates base ^ power recursively (Tail Call Optimized)
 * @param {Number} base
 * @param {Number} power
 * @param {Number} value
 * @returns {Number}
 *
 * notes: This recursive solution adds Tail Call Optimization
 * (https://medium.com/@mlaythe/js-es6-recursive-tail-call-optimization-feaf2dada3f6)
 *
 * Big O analysis
 * Time complexity => 0(n) Linear time complexity to the 'power' argument. As you can see we are
 * recursively calling the function as many times as the value of the 'power' argument is.
 *
 * Space complexity => O(1) Constant space complexity to the 'power' argument. Behind the scenes
 * what tail call optimization is doing is simple. Instead of  creating a new stack frame for each
 * recursive call, it’s rewriting over the same stack frame which would convert your O(n) space
 * to O(1) space. It can do this, because each recursive call is no longer depending on other
 * recursive calls to finish, nor is it relying on storing local variables in each unique context.
 */

function powRecurseTCO(base, power, value = base) {
    // base case
    if (power === 0) return 1;
    if (power === 1) return value;
    // recursive logic here
    return pow(base, power - 1, value * base);
}
Collapse



