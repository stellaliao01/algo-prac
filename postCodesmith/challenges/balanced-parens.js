/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(')  // false
 *   balancedParens('()') // true
 *   balancedParens(')(')  // false
 *   balancedParens('(())')  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}') // true
 *  balancedParens('[({})]')   // true
 *  balancedParens('[(]{)}') // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }') // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); ') // false
 *
 *
 */

const balancedParens = input => {
  // iterate through input
  // check if the curr el is an open parens / and check for the correct closing parens
  // check if curr el is a closing parents / check to make sure it's the right one
  // check if all the opening/closing brackets are a match and in the right order 

  // create a variable to store the brackets
  // create an empty array variable - stack
//   let check = '()[]{}<>'
//   let arr = []
//   let otherArr = []
//   let other

//   for (let el of input) {
//     for (let parens of check) {
//       if (el === parens) {
//         otherArr.push(el)
//       }
//     }
//   }
//   //   console.log(otherArr)
//   for (let el of otherArr) {
//     otherArr = otherArr.join('')
//     let i = el.indexOf(el)

//     if (el[i] === '(' || el[i] === '{' || el[i] === '[' || el[i] === '<') {
//       arr.push(el[i])
//     }else {
//       other = arr.pop()
//       if (el[i] !== otherArr[other]) {
//         return false
//       }
//     }
//     return arr.length === 0
//   }
// }


//greg's approach 
// store matching pairs in an object
const matches = {
  '[': ']',
  '{': '}',
  '(': ')',
};
// create a stack to keep track of parens, braces, or brackets
const stack = [];
// iterate over the input
for (let i = 0; i < input.length; i++) {
  let char = input[i];
  // check if character is in matches
  if (matches.hasOwnProperty(char)) {
    //push to stack
    stack.push(char);
  } else if (char === ')' || char === '}' || char === ']') {
    // if character is a closing of a pair, pop off the stack and check if it matches with the correct pair
    if (matches[stack.pop()] !== char) {
      // if the pair is incorrect return false
      return false;
    }
  }
}
// returns true if stack is empty (!0 === true) and all pairs have been popped off
return !stack.length;
};
​
// globally define so we're not re-defining in each recursive call
const brackets = {
'{': '}',
'(': ')',
'[': ']',
};
​
// create a new set using the values in brackets
// keeps single 'source of truth' for what a closing
// bracket is, but also enables us to retrieve a
// closing bracket without another loop
const closingBrackets = new Set(Object.values(brackets));
​
/**
* @name balancedParensRecursive
* @param str - entire string to check
* @param charIdx - index of current character we're checking
*                  enables us to keep an O(n) time complexity
* @param stack - running stack of brackets to balance
*/
const balancedParensRecursive = (str, charIdx = 0, stack = []) => {
// base case: current index is greater than the
//    number of characters in the entire string
// return: true if stack is empty, false if not
if (charIdx >= str.length) return !stack.length;
const char = str[charIdx];
// recursive cases:
// case 1: current first char in str is opening bracket
// return: recursive call with inputs:
// str
// charIdx - current charIdx + 1
// stack - current stack + push on closing bracket for char
if (brackets[char]) {
  stack.push(brackets[char]);
  return balancedParensRecursive(str, charIdx + 1, stack);
}
// case 2: current first char in str is closing bracket
// return: false if top of stack doesn't match this bracket
// return: recursive call with inputs:
// str
// charIdx - current charIdx + 1
// stack - current stack w/ top of stack popped off
if (closingBrackets.has(char)) {
  if (stack.pop() !== char) return false;
  return balancedParensRecursive(str, charIdx + 1, stack);
}
// case 3: current first char in str is not a bracket at all
// return: recursive call with inputs:
// str
// charIdx - current charIdx + 1
// stack - current stack
return balancedParensRecursive(str, charIdx + 1, stack);
}

module.exports = { balancedParens}

balancedParens(' const wow = { yo: thisIsAwesome() }')
