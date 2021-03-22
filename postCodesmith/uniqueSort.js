const uniqSort = (arr) => {
    const cache = {}
    const result = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            result.push(arr[i])
            cache[arr[i]] = true
        }
    }
    return result.sort((a, b) => a - b)
}

// console.log(uniqSort([4, 2, 2, 3, 2, 2, 3, 1]))

const times10 = (n) => {
    return n * 10
}

const cache = {}

const memoTimes10 = (n) => {

    if (!cache[n]) {
        let result = times10(n)
        cache[n] = result
        return result
    } else {
        console.log('return cached result')
        return cache[n]
    }
}

// console.log(memoTimes10(4))
// console.log(memoTimes10(4))
// console.log(memoTimes10(10))

const memoizedClosureTimes10 = (n) => {
    let cache = {}

    return (n) => {
        if (n in cache) {
            console.log('return cached result')
            return cache[n]
        }
        else {
            let result = n * 10
            cache[n] = result
            return result
        }
    }

}

// const memoClosureTimes10 = memoizedClosureTimes10()
// console.log(memoClosureTimes10(10))
// console.log(memoClosureTimes10(10))
// console.log(memoClosureTimes10(100)) 

const memoizedClosureTimesM = (cb) => {
    let cache = {}

    return (n) => {
        if (n in cache) {
            console.log('return cached result')
            return cache[n]
        }
        else {
            let result = cb(n)
            cache[n] = result
            return result
        }
    }
}

// const memoClosureTimesM = memoizedClosureTimesM(times10)
// console.log(memoClosureTimesM(10))
// console.log(memoClosureTimesM(10))
// console.log(memoClosureTimesM(100))
