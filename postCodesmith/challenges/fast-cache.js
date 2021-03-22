/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = func => {
    const obj = {}
    return (input) => {
        if (obj[input]) {
            return obj[input]
        }
        obj[input] = func(input)
        return obj[input]
    };
};

function tester(num) {
    return num * num
}
console.log(tester(5))
let test = fastCache(tester)

console.log(test(5))
/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

// const fastCacheAdvanced = func => {
//     const cache = {}
//     return (..args) => {
//     const argsString = JSON.stringify(args);
//     cache.hasOwnProperty(args)
// }
// };

/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = (func) => {
    const cache = {};
    return (arg) => {
        if (cache.hasOwnProperty(arg)) {
            return cache[arg];
        }
        const result = func(arg);
        cache[arg] = result;
        return result;
    };
};

// /*
//    Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
//    HINT: you might need to use the spread operator...
//   */

// const fastCacheAdvanced = (func) => {
//     const cache = {};
//     return (...args) => {
//         const argsString = JSON.stringify(args);
//         if (cache.hasOwnProperty(argsString)) {
//             return cache[argsString];
//         }
//         const result = func(...args);
//         cache[argsString] = result;
//         return result;
//     };
// };


module.exports = { fastCache, fastCacheAdvanced };