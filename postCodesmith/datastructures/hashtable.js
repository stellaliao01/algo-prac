function HashTable() {
    this.SIZE = 16;
    // the array will be instantiated as [undefined, undefined....]
    // pop() and push() shouldn't be used on the storage
    this.storage = new Array(this.SIZE);
}

function Node(value) {
    this.value = value;
    this.next = null;
}

// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function (key, value) {
    //get our hash code that will be our index
    let hash = hashCode(key, this.SIZE);
    if (!this.storage[hash]) {
        this.storage[hash] = {};
    }
    this.storage[hash][key] = value;
};

// return a previously stored value
HashTable.prototype.get = function (key) {
    //pass key into hashCode again
    const hash = hashCode(key, this.SIZE);
    return this.storage[hash][key];
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function (key) {
    //get hash value with input key
    const hash = hashCode(key, this.SIZE);
    //set storage at hash index to undefined
    let deletedItem = this.storage[hash][key];
    delete this.storage[hash][key];
    return deletedItem;
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        var letter = string.charCodeAt(i);
        hash = (hash << 5) - hash + letter;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % size;
}
