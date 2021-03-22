function LinkedList(...args) {
    this.head = null;
    this.tail = null;

    this.args = args;
    args.forEach((el) => {
        this.push(el);
    });
}

function Node(val) {
    this.value = val;
    this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function (value) {
    if (this.head === null) {
        this.head = new Node(value);
        this.tail = this.head;
    } else {
        let temp = this.head;
        while (temp.next !== null) {
            // console.log(temp);
            temp = temp.next;
        }
        temp.next = new Node(value);
        this.tail = temp.next;
    }
};

// returns true if value is present in the list
LinkedList.prototype.contains = function (value) {
    // check if list is empty
    if (this.head === null) return false;
    //instantiate temp to head node
    let temp = this.head;
    //traverse. while temp is not null
    while (temp !== null) {
        //check if temp.value is value
        if (temp.value === value) return true;
        // console.log(temp);
        temp = temp.next;
    }
    return false;
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function (value) {
    //have temp point to head
    const temp = this.head;
    //change head to new node
    this.head = new Node(value);
    this.head.next = temp;
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function (value, position) {
    if (position === 0) {
        this.addToHead(value)
        return
    }

    let prev = this.head
    let temp = this.head

    //iterate while node is not value
    for (i = 0; i < position; i += 1) {
        //overwrite previous next and past next
        if (prev.next !== null) {
            temp = prev
            prev = prev.next
        }

    }
    temp.next = new Node(value)
    temp.next.next = prev
};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function (value) { };

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) { };
