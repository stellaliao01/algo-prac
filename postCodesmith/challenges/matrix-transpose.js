/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/

const matrixTranspose = matrix => {

};

/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/

const matrixRotate = matrix => {

};


module.exports = { matrixTranspose, matrixRotate };
Big O Analysis(where n is length of input array and m is length of each inner array)
Time Complexity: O(n * m)
Space Complexity: O(n * m)
    * /


const matrixTranspose = matrix => {
    // edgecase 
    if (!matrix.length) return matrix;
    // declare arr to hold final result        
    const transposed = [];
    // iterate through the arr as long as i < then the length of the inner arrays, in this case 2                   
    for (let i = 0; i < matrix[0].length; i += 1) {
        const row = [];
        // iterate through inner arr, on each iteration push every curr inner item which is an arr at index i
        for (let j = 0; j < matrix.length; j += 1) {
            row.push(matrix[j][i]);
        }
        transposed.push(row);
    }

    return transposed;
};


// Solution #2: Using Array.prototype.map
// const matrixTranspose = matrix => {
//   if (!matrix.length) return matrix;
//   return matrix[0].map((col, i) => matrix.map(row => row[i]));
// };


/*
Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.
​
For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]
​
console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]
​
BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).
​
*/
/* 
Solution #1:
 Notice how the ith row inside of the rotated array will contain all the ith elements
 in each of the inner arrays from the input array (pushed in reversed order).
​
Big O Analysis (where n is length of input array)
 Time Complexity: O(n²)
 Space Complexity: O(n²)
*/

const matrixRotate = matrix => {
    // edgecases 
    if (!matrix.length) return matrix;
    if (matrix.length !== matrix[0].length) return undefined;

    // result arr to return 
    const rotated = [];
    const n = matrix.length;

    for (let i = 0; i < n; i += 1) {
        const row = [];
        for (let j = 0; j < n; j += 1) {
            // n -j-1 allows us to decrement our idx num each iteration 
            row.push(matrix[n - j - 1][i]);
        }
        rotated.push(row);
    }

    return rotated;
};


/* 
Solution #2: Rotates the matrix in place (constant space complexity).
Big O Analysis (where n is length of input array)
 Time Complexity: O(n²)
 Space Complexity: O(1)
*/

const matrixRotate = matrix => {
    if (!matrix.length) return matrix;
    if (matrix.length !== matrix[0].length) return undefined;

    const n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i += 1) {
        const first = i;
        const last = n - i - 1;

        for (let j = first; j < last; j += 1) {
            const adjust = j - first;
            const top = matrix[first][j];

            // left -> top
            matrix[first][j] = matrix[last - adjust][first];

            // bottom -> left
            matrix[last - adjust][first] = matrix[last][last - adjust];

            // right -> bottom
            matrix[last][last - adjust] = matrix[j][last];

            // top -> right
            matrix[j][last] = top;
        }
    }
    return matrix;
};



module.exports = { matrixTranspose, matrixRotate };