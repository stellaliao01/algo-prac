
// function lev(str1, str2) {
//     const grid = []
  
//     for (let i=0; i<str1.length+1; i++) {
//       const row = []
//       for (let j=0; j<str2.length+1; j++) {
//         row.push(j)
//       }
//       row[0] = i
//       grid.push(row)
//     }
  
//     for (let i=1; i<str1.length +1; i++) {
//       for(let j=1; j<str2.length +1; j++) {
//         if(str1[i-1] === str2[j-1]) {
//           grid[i][j] = grid[i-1][j-1]
//         } else {
//           grid[i][j] = (1 + Math.min(grid[i-1][j-1], grid[i-1][j], grid[i][j-1]))
//         }
//       }
//     }
  
//     return grid[str1.length][str2.length]
//   }
  
//   console.log(lev('trek', "toikr"))
  
//   const levDistance = (str1, str2) => {
//     const len1 = str1.length;
//     let i = 0;
//     const len2 = str2.length;
//     let j = 0;
//     const grid = Array.from(Array(len1 + 1), () => new Array(len2 + 1).fill(0));
//     console.log(grid)
    
//     for (let i = 0; i < len1 + 1; i++) {
//       for (let j = 0; j < len2 + 1; j++) {
//         if (i === 0 ) {
//           grid[i][j] = j;
//         } else if (j === 0) {
//           grid[i][j] = i;
//         } else {
//           if (str1[i] === str2[j]){
//             grid[i][j] = grid[i - 1][j - 1];
//           } else {
//             grid[i][j] = Math.min(Math.min(grid[i - 1][j], grid[i][j - 1]),
//                          grid[i - 1][j - 1]) + 1;
//           }
//         }
        
//       }
//     }
//     return grid[len1][len2];
    
//   }


//   function reverse(str) {
//       //iterative
//       let result = ''

//       for(let i=str.length-1; i>=0; i--){
//           result += str[i]
//       }
//       return result

//       //other iterative
//         let i=0
//         let j=str.length-1
//         while(i<=j) {
//             swap(0, str.length-1, str)
//             i++
//             j--
//         }

//     function swap(i, j, str) {
//         let temp = str[i]
//         str[i] = str[j]
//         str[j] = temp
//     }
//     return str
//     //recursive approach
//     function helper(str, i=0, j=str.length-1) {
//         if (i <= j) return str
//         // let swapped = (i, j, str)
//         return helper(swapped(i, j, str), i+=1, j-=1)
//     }
//     return helper(str)
//   }

//   console.log(reverse('hellow'))



// //   '''

// // You are given a string made of xs and underscores, and newlines. Underscores represent an empty space and an x represents a filled in square. Imagine that this string represents a histogram. 

// // Return an array representing the heights of each bar in the histogram. 

// // non-empty string will ONLY contain 'x', '_', '\n'

// // assume equal row col

// // assume no 'broken' bars

// // x
// // -
// // x
// // => [1]



// // Examples
// // ___x
// // _x_x
// // _xxx
// // xxxx

// // returns [1, 3, 2, 4]

// // ____x
// // ____x
// // ____x
// // __x_x
// // xxxxx

// // returns [1, 1, 2, 1, 5]

// // ____
// // ____
// // ____
// // ____

// // return [0, 0, 0, 0]


// // turned into an array of strings of equal length
// // string => .split(\n) arr + 4
// // 0123
// // [___x] => 1
// // [_x_x] => 2
// // [_xxx]
// // [xxxx]

// // get the arrays, nest into one larger array,
// // then reiterate thru each arr
// // conditional to check if its an 'x'
// //     output[j] +=1

// // output => [1 3 2 4]



// // ___x
// // _x__
// // _xxx
// // xxxx

// // returns [1, 3, 2, 2]
// // invalid = {0, 1, 2, 3}
// //  0 1 2 3
// // [1 3 2 2] <= output

// // iterating from the bottom of the array to the top of array

// // have an invalid check(set/obj) to push each index that becomes invalid(checking if the element is an underscore)

// // if it's an x and if our index is not in the set or obj, increment our output

// '''
// def xs(s): 
//     arr = s.split('\n')
//     output = [0 for i in range(len(arr)-1)]
//     # print(output)
    
//     for i in range(len(arr)): 
//         for j in range(len(arr[i])):
//             if arr[i][j] == 'x':
//                 output[j] += 1
//     return output 
              
// print(xs(
// '''
// ___x
// _x_x
// _xxx
// xxxx'''))


 //eceba -> ece if 2 

//  function longestSubstringGivenK(str, k) {
    
//   let dict = {}
//   for (let i=0; i<str.length; i++) {
//       dict[str[i]] = (dict[str[i]] || 0) +1
//   }

//   let output = ""

//   while (k > 0) {
//     let currMax = -Infinity

//       for(let key in dict) {
//         if (dict[key] > currMax) {
//           currMax = dict[key]
//         }
//       }
 
//       for (let key in dict) {
//         if (dict[key] === currMax) {
//           while(dict[key] > 0){
//             output += key
//             dict[key]-=1
//           }
//         }
//       }

//       k--

//   }
//   return output
// }

// console.log(longestSubstringGivenK('ecebaade', 2))




 function longeststringGivenK(str, k) {

  let dict = {}
  let start = 0
  let total = 0

  for (let i=0; i<str.length; i++) {
    dict[str[i]] = (dict[str[i]] || 0) +1

    if (Object.keys(dict).length <=k) {
      //if at any points its greater
      total = Math.max(total, i-start+1)
    } else {
      dict[str[start]]--

      if (dict[str[start]]=== 0) delete dict[str[start]]
      start++
    }

  }
  return total

 }


/* 
Your previous Python 3 content is preserved below:

'''
Function Signature:
function longestSubstring(string: String, k: Int) -> String
Examples

start = 0
end = 6

total = Math.abs(start-end)
low = 0 <= change when we have to decrease set and object
high = 1

"bbbbxxabc", 3 => abaca
  l  
         h
      
set() = a,b,c 
 
 
obj {
 a: 1
 b: 1
 c: 1
 d: 
}

conditional check: Object.keys(obj).length <= 3
store the first pointer to the last pointer location

"abacad", 4 => abacad
'''

*/

function longestSubstring (str, k) {
  let start=0
  let end=0
  
  let low=0
  let high=0
  
  let set = new Set()
  let dict = {}
  
  let total= 0

   
    while(high < str.length) {
      dict[str[high]] = (dict[str[high]] || 0) + 1
      set.add(str[high])
      
      while (set.size > k) {
         dict[str[low]]-=1
         if (dict[str[low]] === 0) {
           set.delete(str[low])
         } 
          low++
      }

      if ((high-low) > (end - start)){
         end = high
         start = low
      }
      high++
    }
 
    return str.substring(start, end+1)
  
}


console.log(longestSubstring('aceba',3)) // ace
console.log(longestSubstring('bbbbxxacc',3)) // bbbxxa


var reverseWords = function(s) {
  //    s = s.split(" ").reverse().join(" ")
  
  //     if (s[0] === " " || s[s.length-1] === " ") {
  //      removeSpace(s)
  //     }
      
  //     return s
  // };
  
  // function removeSpace (str) {
  //     if (str[0] === " " && str[str.length-1] === " ") return removeSpace(str.slice(1,-1))
  //     else if (str[str.length-1] === " ") return removeSpace(str.slice(0, -1))
  //     else if (str[0] === "0") return removeSpace(str.slice(1))
  // }
       return s
              .split(' ')               //create an array of words separated based by spaces
              .filter(x => x !== '')//remove empty strings to take care of extra whitespace
              .reverse()                //reverse the array of words
              .join(' ');               //join the words back together with spaces inbetween
      
      
       let output = ""; 
    let counter = 0;
    
    for ( let i = str.length-1; i >= 0; i--) {
      //console.log(str[i])
      // if (str[i] === " ") you don't have to do anything 
      if( str[i] !== " ") {
        // start counting how many letters in that word 
        counter++;
          
        if ( i === 0 || str[i-1] == " ") {
        // when it encounter the "end of the word"
        // or when the i-1 is out of range 
        // ^ when i = 0
        // stop counting 
        // add sliced string to the output
          if( output.length === 0){
            output = output + str.slice(i, i +  counter)
            //console.log(output)
            counter = 0;
          } else {
            output = output + " " + str.slice(i, i +  counter)
            //console.log(output)
            counter = 0;
          }
        }
      }
    }
    return output;
  }