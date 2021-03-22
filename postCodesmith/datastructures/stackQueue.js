// do not use any native array methods
function Stack() {
    this.storage = {};
    this.index = 0;
}

Stack.prototype.push = function (value) {
    //create a new entrie in storage
    //set the key as index+1
    this.storage[this.index++] = value;
    return this.index;
};

Stack.prototype.pop = function () {
    //check if our length is 0
    if (this.index === 0) {
        //return undefined
        return undefined
    }
    //save value of deleted value
    let lastVal = this.storage[this.index - 1]

    //delete the value
    delete this.storage[this.index--]

    //return valuern lastVal
    return lastVal
};


// do not use any native array methods
function Queue() {
    this.storage = {};
    this.index = 0;
}

Queue.prototype.enqueue = function (value) {
    this.storage[this.index++] = value;
    return this.index;
};

Queue.prototype.dequeue = function () {
    //instntiate return obj
    const newStorage = {};
    //check if queue is empty
    if (this.index === 0) return undefined;

    //grab first element
    const first = this.storage[0];

    //delte the first element of the queue
    delete this.storage[0];

    //iterate through storage values
    const values = Object.values(this.storage);

    //delete all elements of storage
    for (let x in this.storage) {
        delete this.storage[x];
    }

    let i = 0;

    values.reduce((acc, el) => {
        acc[i++] = el;
        return acc;
    }, this.storage);

    this.index = i;
    //save new index values
    //return deleted element
    return first;
};


