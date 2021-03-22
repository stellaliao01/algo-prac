function fib(n, cache = {}) {
    if (n in cache) return cache[n]
    if (n <= 2) return 1
    cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
    return cache[n]
}




function iterativeFibArray(num) {
    let result = [0, 1]
    if (num === 1) return result[0];
    if (num === 2) return result[1];
    for (let i = 0; i < num - 2; i++) {
        console.log(i, num, result)
        result.push(result[i] + result[i + 1])
    }
    console.log('This is result: ', result)
    return result[result.length - 1]
}

console.log(iterativeFibArray(4))
console.log(iterativeFibArray(6))

//Time o(2^n) O(n) space || the bottle neck we're experiencing here is time complexity, not desirable 
//2^n implication is that if you did fibrecurse(50) = 2^50 steps to do = 1.12e , very large quantiy. 16 digits, like quadrillion
const fibrecurse = (n) => {
    if (n <= 2) return 1
    return fibrecurse(n - 1) + fibrecurse(n - 2)
}


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 

const fibbb = (n, memoValue) => {
    if (n <= 2) return 1
    if (memoValue) return memoValue
    // memo[n] = fib(n - 1) + fib(n - 2)
    memoValue = useMemo(() => fib(n - 1, memoValue) + fib(n - 2, memoValue))
    // return memo[n]
    return memoValue
}

// console.log(fibbb(2))
// console.log(fibbb(5))
// console.log(fibbb(8))
// console.log(fibbb(20))
// console.log(fibbb(50))
// console.log(fibbb(100))