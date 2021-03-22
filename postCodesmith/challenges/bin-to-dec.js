/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString) {
    if (binString.length === 0 && binString === "0") return 0
    // need an interger to keep track of the place so we can set that interger as the number to math.Pow
    let pow = 0
    let one = 1
    let zero = 0
    let result = 0
    //iterate through the string to read it from the right to left
    //for each iteration we want to turn the string to a number 
    for (let i = binString.length - 1; i >= 0; i--) {
        if (binString[i] === "1") {
            result += (one * Math.pow(2, pow))
            pow++
        } else {
            result += (zero * Math.pow(2, pow))
            pow++
        }
    }
    return result
};


// console.log(binToDec('0'))
// console.log(binToDec('11'))
// console.log(binToDec('101'))


module.exports = { binToDec }; For more information on how to read binary, check out this article:
https://m.wikihow.com/Read-Binary
​
* /
// input is a string binary num
// output is a decimal num
function binToDec(binString) {
    // dec result variable to return 
    let result = 0;
    // dec var to keep track of index from right to left without split or reverse, out counter idx
    let idx = 0;
    // iterarte through the string backwards since we want to start right to left
    for (let i = binString.length - 1; i > -1; i--) {
        //re asign the result var to equal evaluated result of adding the prev result val with the 
        // curr val multiplied with 2 ( base 2 system instead of ten) to the power of the index.
        if (binString[i] === '1') {
            // last num is actually the first in binary so the loop would decrement 
            result += Math.pow(2, idx)
        }
        idx++
    }
    // return result 
    return result

};



console.log(binToDec('0')) // 0
console.log(binToDec('11')) // 3
console.log(binToDec('100'))// 4
console.log(binToDec('101')) // 5
console.log(binToDec('0101')) // 5

module.exports = { binToDec };




