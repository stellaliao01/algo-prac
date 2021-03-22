/*

Write a function that works the same as Promise.all

From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

The Promise.all() method returns a single Promise that resolves when all of the
promises passed as an iterable have resolved or when the iterable contains no
promises. It rejects with the reason of the first promise that rejects.

Hint:

use the Promise constructor. The Promise constructor takes in two arguments:
"resolve" and "reject". Calling "resolve" on a value will complete will the
value. Calling "reject" on a value will error-out with the value.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for info on the Promise constructor.

*/

const promiseAll = promises => {

};


module.exports = { promiseAll };



const promiseAll = (promises) => {
    // return a new promise object ("The Grand Promise")
    return new Promise((resolve, reject) => {
        // create number of resolved promises counter
        let numResolvedPromises = 0;
        // create return array
        const resultArr = [];
        // iterate through indices of promises array
        for (let index in promises) {
            // call promises at index
            promises[index]
                // when promise resolves, name return value 'data'
                .then((data) => {
                    // increment number of resolved promises counter
                    numResolvedPromises++;
                    // set result array at index to returned data
                    resultArr[index] = data;
                    // check if all promises have resolved, if so, resolve "Grand Promise" with resultArr
                    if (numResolvedPromises === promises.length) resolve(resultArr);
                })
                // if any of the promises return an error
                .catch((err) => {
                    // call reject on "Grand Promise"
                    reject(err);
                });
        }
    });
};

const papaBear = new Promise((resolve, reject) => {
    setTimeout(() => resolve('papaBear'), 3000);
});
const mamaBear = new Promise((resolve, reject) => {
    setTimeout(() => resolve('mamaBear'), 2000);
});
const babyBear = new Promise((resolve, reject) => {
    setTimeout(() => resolve('babyBear'), 1000);
});

const covid19 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('CORONAVIRUS')), 3000);
});

promiseAll([papaBear, mamaBear, babyBear]) // --> ['papaBear', 'mamaBear', 'babyBear']
    .then((result) => {
        console.log(result);
    })
    .catch((err) => console.log(err));

promiseAll([papaBear, mamaBear, covid19, babyBear]) // --> Error: CORONAVIRUS
    .then((result) => {
        console.log(result);
    })
    .catch((err) => console.log(err));