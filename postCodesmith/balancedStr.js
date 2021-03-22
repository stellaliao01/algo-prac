
// function balStr(str) {

//     let stack = [];

//     // for loop through the string
//     for (let i = 0; i < str.length; i++) {
//         let tempStr = "";
//         let tempCount = i;
//         if (str[i] === "<") {
//             tempCount++;
//             if (str[tempCount] !== '/') {
//                 while (str[tempCount] !== ">") {
//                     tempStr += str[tempCount];
//                     tempCount++;
//                 }
//                 stack.push(tempStr);
//                 i = tempCount;
//             } else {
//                 tempCount++;
//                 while (str[tempCount] !== ">") {
//                     tempStr += str[tempCount];
//                     tempCount++;
//                 }
//                 let element = stack.pop();
//                 if (element !== tempStr) return element;
//                 i = tempCount;
//             }
//         }
//     }
//     // have temp str to hold inner characters
//     // if str[i] = '<'
//     // capture characters in temp
//     // at '>' push temp to stack

//     // if str[i] = '/'
//     // capture the letters in temp
//     // at '>', compare temp to stack.pop()

//     if (stack.length === 0) return true;
//     else return stack.pop();

// }


function balStr(str) {
    // const dict = {
    //     "</div>": "<div>",
    //     "</b>": "<b>",
    //     "</i>": "<i>",
    //     "</em>": "<em>",
    //     "</p>": "<p>"
    // }

    // const stack = []
    // let substringStartIndex
    // //iterate over the string 
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === "<") {
    //         substringStartIndex = i
    //     }
    //     if (str[i] === ">") {
    //         // console.log(substringStartIndex, i)
    //         let checkElement = str.substring(substringStartIndex, i + 1)

    //         if (checkElement[1] === "/") {
    //             // console.log(checkElement.substring(2, checkElement.length - 1))
    //             if (checkElement.substring(2, checkElement.length - 1) === stack[stack.length - 1].substring(1, stack[stack.length - 1].length - 1)) {
    //                 stack.pop()
    //             }
    //             else {
    //                 return stack[stack.length - 1].substring(1, stack[stack.length - 1].length - 1)
    //             }
    //         }
    //         else {

    //             stack.push(checkElement)
    //         }
    //     }
    // }
    // return true


    //have a stack to push the necessary element into and then pop if it matches the closing element
    //have a temporary start index to push into the substring
    //iterate over the string 
    //check if the element is an "<"
    //if it is then substring the word into the stack
    //if the element is a ">" then we have reached the end of the first element

    //if the element at index 1 is a slash
    //then we want to compare the word, to the last word in the stack
    //if they're the same, then we want to pop off the element from the stack

    const stack = []
    let substringStartIndex
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "<") {
            substringStartIndex = i
        }
        if (str[i] === ">") {
            let elementCheck = str.slice(substringStartIndex, i + 1)
            if (elementCheck[1] === "/") {
                if (elementCheck.slice(2, -1) === stack[stack.length - 1].slice(1, -1)) {
                    stack.pop()
                }
                else {
                    return stack[stack.length - 1].slice(1, -1)
                }
            }
            else {
                stack.push(elementCheck)
            }
        }
    }
    return true
}
console.log(balStr("<div><div><b></b></div></p>")) // div
console.log(balStr("<div>abc</div><p><em><i>test test test </b> </em> </p>")) // i 
console.log(balStr("<div><b></b></div><i></i>")) //true