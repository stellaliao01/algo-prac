/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
    let arr = []
    let ast = "*"
    for (let i = n; i >= 0; i--) {
        let temp = ''
        for (let j = i; j < n; j++) {
            temp += ast
        }
        arr.push(temp)
    }
    return arr
};

// const drawStairs = n => {
//     let stair = 1
//     while (stair <= 1) {
//         console.log(''.repeat(n - stair).concat('*'.repeat(stair)))
//         stair += 1
//     }
// }

function staircase(n) {
    for (let i = 0; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i))
    }
}

// // console.log(drawStairs(5))

// const drawStairs = n => {
//      if (n < 0) return ' ';
//      let space = ' ';
//      let start = '*';
//      let spaceAmount = n - 1
//      let startAmount = 1;
//      for (let i = 0; i < n; i++) {
//           console.log(space.repeat(spaceAmount--) + start.repeat(startAmount++));
//      }
// };

console.log(drawStairs(6))
/*

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/
--+--
 /|\
/ | \

*/

// const drawStar = n => {

// };

// module.exports = { drawStairs, drawStar };