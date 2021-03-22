/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

function balancedParens(input) {
    // const matches = {
    //     '[': ']',
    //     '{': '}',
    //     '(': ')'
    // }
    // const stack = [];
    // iterate over input
    // for (let i = 0; i < input.length; i++) {
    //     let char = input[i];
    //     //check to see if char is in matches
    //     if (matches.hasOwnProperty(char)) {
    //         //push to stack
    //         stack.push(char)
    //     } else if (char === ')' || char === '}' || char === ']') {
    //         // if Object.values(matches).includes(char)
    //         //if char is closing parens, pop off stack and check if it matches
    //         if (matches[stack.pop()] !== char) {
    //             //if pair is incorrect return false
    //             return false
    //         }
    //     }
    // }
    // // returns true if stack is empty (!0 === true) and all pairs have been popped off
    // return !stack.length

    const stack = []
    //iterate over the string
    //check if it's an open parens
    //if it is an open parens then push it to the stack
    //else if it's a closing parens
    //then check if the closing parens matches it's correct open parens

    for (let i = 0; i < input.length; i++) {
        let currElement = input[i]
        if (currElement === "(" || currElement === "{" || currElement === "[") {
            stack.push(currElement)
        }
        if (currElement === ")" || currElement === "}" || currElement === "]") {
            let lastElementInStack = stack[stack.length - 1]
            if (currElement === ")" && lastElementInStack === "(" || currElement === "}" && lastElementInStack === "{" || currElement === "]" && lastElementInStack === "[") {
                stack.pop()
            }
        }
    }
    return !stack.length
    // const BRACKET_PAIRS = {
    //     ')': '(',
    //     '}': '{',
    //     ']': '[',
    // };
    // const stack = [];
    // for (let i = 0; i < input.length; i++) {
    //     const CHAR = input[i];
    //     if (CHAR === '(' || CHAR === '{' || CHAR === '[') {
    //         stack.push(CHAR);
    //     } else if (CHAR === ')' || CHAR === '}' || CHAR === ']') {
    //         if (BRACKET_PAIRS[CHAR] !== stack.pop()) {
    //             return false;
    //         }
    //     }
    // }
    // return bracketStack.length === 0;
}

console.log(balancedParens('([{{}}])()')) // -> true
console.log(balancedParens('([{{}])()')) // -> false