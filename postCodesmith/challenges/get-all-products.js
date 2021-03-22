/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

const getAllProducts = array => {

};

module.exports = { getAllProducts };
/

// input: array of integers
// output: array of product values

// O(n^2) time | O(n) space
const getAllProducts = (array) => {
    // Our output array
    const products = [];
    // Outer traversal
    for (let i = 0; i < array.length; i++) {
        // initialize running product
        let runningProd = 1;
        // Inner traversal
        for (let j = 0; j < array.length; j++) {
            // So long as our inner traversal does not overlap with our outer one,
            if (i !== j) {
                // multiply running product by our array value at j
                runningProd *= array[j];
            }
            // Store our calculated product in our products array
            products[i] = runningProd;
        }
    }
    // return products
    return products;
};

// O(n) time | O(n) space
const getAllProducts = (array) => {
    // Initialize a new, empty array with 1s
    const products = new Array(array.length).fill(1);
    // Initialize a running product
    let leftRunningProduct = 1;
    // Iterate through our array (left to right)
    for (let i = 0; i < array.length; i++) {
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }
    // Initialize a running product
    let rightRunningProduct = 1;
    // Iterate through our array (right to left)
    for (let i = array.length - 1; i > -1; i--) {
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }
    // Return our products array
    return products;
};

