function twoSumlol (array, target) {
    // //brute force
    // for(let i=0; i<array.length; i++) {
    //   for(let j=i+1; j <array.length; j++) {
    //     if ((array[i] + array[j]) === target) {
    //       return [i, j]
    //     }
    //   }
    // }
    // return false
    const obj = {}
    //store complement in obj if there is one
    for (let i=0; i<array.length; i++) {
      let complement = target - array[i] 
      if (complement in obj) {
        return [obj[complement], i]
      } else {
        obj[array[i]] = i
      }
    }
   return false
  }


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
function staircase(n) {
  for (let i = 0; i <= n; i++) {
      console.log(' '.repeat(n - i) + '#'.repeat(i))
  }
}


//balancedparens
const stack = []
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
///balanced str
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

//grid traveler
const gridTraveler = (m, n, cache = {}) => {
  // have a key that uniquely represent both inputs
  const key = m + ',' + n
  //are the arguments in the memo? if they are, return the cached value 
  if (key in cache) return cache[key]

  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  cache[key] = gridTraveler(m - 1, n, cache) + gridTraveler(m, n - 1, cache)
  return cache[key]
}

//removing dups 
var removeDuplicates = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let right = 0
  for (let i = 1; i < nums.length; i++) {
      if (nums[right] !== nums[i]) {
          right++
          nums[right] = nums[i]
      }
  }
  return right + 1
};