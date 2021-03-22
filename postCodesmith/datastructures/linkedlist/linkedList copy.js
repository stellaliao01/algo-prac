
// function LinkedList() {
//     this.head = null;
//     this.tail = null;
// }

// function Node(val, next = null) {
//     this.value = val;
//     this.next = next;
// }
// // adds node to end of list
// LinkedList.prototype.push = function (value) {
//     let currentNode = new Node(value, this.head)
//     // console.log(currentNode)
//     //check if this.head is null, if it is, set the head to the value passed in
//     if (!this.head) {
//         this.head = currentNode
//         // this.tail = this.head
//     }
//     else {
//         let pointer = this.head
//         while (pointer.next) {
//             pointer = pointer.next
//         }
//         pointer.next = currentNode
//         // pointer.tail = pointer
//     }
// };

// // returns true if value is present in the list
// LinkedList.prototype.contains = function (value) {

// };

// // Bonus
// // adds node to beginning of list
// LinkedList.prototype.addToHead = function (value) {

// };

// // Extra Bonus
// // insert an item at the position specified
// LinkedList.prototype.insert = function (value, position) {

// };

// // Extra Bonus
// // remove first occurrence of value from list
// LinkedList.prototype.removeItem = function (value) { };

// // Extra Bonus
// // remove element at specified position in list
// LinkedList.prototype.removePosition = function (position) { };


// const ll = new LinkedList()
// ll.push(100)
// ll.push(200)
// ll.push(300)
// console.log(ll)

// Construct Single Node
// class Node {
//     constructor(value, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// // Create/Get/Remove Nodes From Linked List
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     // Insert first node
//     insertFirst(data) {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }

//     // Insert last node
//     insertLast(data) {
//         let node = new Node(data);
//         let current;

//         // If empty, make head
//         if (!this.head) {
//             this.head = node;
//         } else {
//             current = this.head;

//             while (current.next) {
//                 current = current.next;
//             }

//             current.next = node;
//         }

//         this.size++;
//     }

//     // Insert at index
//     insertAt(data, index) {
//         //  If index is out of range
//         if (index > 0 && index > this.size) {
//             return;
//         }

//         // If first index
//         if (index === 0) {
//             this.insertFirst(data);
//             return;
//         }

//         const node = new Node(data);
//         let current, previous;

//         // Set current to first
//         current = this.head;
//         let count = 0;

//         while (count < index) {
//             previous = current; // Node before index
//             count++;
//             current = current.next; // Node after index
//         }

//         node.next = current;
//         previous.next = node;

//         this.size++;
//     }

//     // Get at index
//     getAt(index) {
//         let current = this.head;
//         let count = 0;

//         while (current) {
//             if (count == index) {
//                 console.log(current.data);
//             }
//             count++;
//             current = current.next;
//         }

//         return null;
//     }

//     // Remove at index
//     removeAt(index) {
//         if (index > 0 && index > this.size) {
//             return;
//         }

//         let current = this.head;
//         let previous;
//         let count = 0;

//         // Remove first
//         if (index === 0) {
//             this.head = current.next;
//         } else {
//             while (count < index) {
//                 count++;
//                 previous = current;
//                 current = current.next;
//             }

//             previous.next = current.next;
//         }

//         this.size--;
//     }

//     // Clear list
//     clearList() {
//         this.head = null;
//         this.size = 0;
//     }

//     // Print list data
//     printListData() {
//         let current = this.head;

//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// ll.insertAt(500, 3);
// ll.removeAt(2)

// // ll.clearList();
// // ll.getAt(2);

// ll.printListData();
// console.log(ll)



// const removeNthFromEnd (head, n) => {
//     //have a dummy node and return the next
//     let dummy = new ListNode(0, head)
//     let leftPointer = dummy
//     let rightPointer = head
//     while (n > 0 && rightPointer !== null) {

//         rightPointer = rightPointer.next
//         n -= 1
//     }
//     while (rightPointer) {
//         leftPointer = leftPointer.next
//         rightPointer = rightPointer.next
//     }

//     leftPointer.next = leftPointer.next.next
//     //L 
//     //1-> 2 -> 3, so now its 1 -> 3
//     return dummy.next


// }


// // DOUBLY LINKED LIST

// class LinkedList {
//     constructor() {
//         this.head = this.tail = null
//     }

//     // add to the end of the list / tail
//     append(value) {
//         // if list is empty
//         if (!this.tail) {
//             this.head = this.tail = new Node(value)
//         }
//         // if linkedlist has >= one node
//         else {
//             let oldTail = this.tail
//             this.tail = new Node(value)
//             oldTail.next = this.tail
//             this.tail.prev = oldTail
//         }
//     }

//     //add to beginning of list / head
//     prepend(value) {
//         // if list is empty
//         if (!this.head) {
//             this.head = this.tail = new Node(value)
//         }
//         // if linkedlist has >= one node
//         else {
//             let oldHead = this.head
//             this.head = new Node(value)
//             oldHead.prev = this.head
//             this.head.next = oldHead
//         }
//     }

//     deleteHead() {
//         // if list is empty (no head)
//         if (!this.head) {
//             return null
//         }
//         // if linkedlist has >= 1 node
//         else {
//             let removedHead = this.head
//             // if list has only 1 node left
//             if (this.head === this.tail) {
//                 this.head = this.tail = null
//             }
//             //if list has >1 node
//             else {
//                 this.head = this.head.next
//                 this.head.prev = null
//             }
//             return removedHead.value
//         }
//     }

//     deleteTail() {
//         // if list is empty (no tail)
//         if (!this.tail) {
//             return null
//         }
//         // if linkedlist has >= one node
//         else {
//             let removedTail = this.tail
//             // if list has only 1 node left
//             if (this.head === this.tail) {
//                 this.tail = this.head = null
//             }
//             //if list has >1 node
//             else {
//                 this.tail = this.tail.prev
//                 this.tail.next = null
//             }
//             return removedTail.value
//         }
//     }

//     search(value) {
//         let currentNode = this.head

//         while (currentNode) {
//             if (currentNode.value === value) {
//                 return currentNode
//             }
//             currentNode = currentNode.next
//         }

//         return null
//     }
// }

// class Node {
//     constructor(value, prev, next) {
//         this.value = value
//         this.next = next || null
//         this.prev = prev || null
//     }
// }

// const list = new LinkedList()

// list.append(1)
// list.append(2)
// list.append(3)

// list.prepend(0)
// list.prepend(-1)

// list.search(1)
// list.search(3)
// list.search(999)

// list.deleteHead() // -1
// list.deleteTail() // 3
// list.deleteTail() // 2
// list.deleteHead() // 0

// list.deleteHead() // 1

// list.deleteTail() // null




// var reverseList = function (head) {
//     //3 pointers, previous set to null, the head, and the next
//     let prev = null
//     while (head !== null) {
//         console.log(head, "head before")
//         let nextNode = head.next
//         console.log(nextNode, "nextnode")
//         head.next = prev  //chopping off the rest of head so head.next doesn't exist on first iteration
//         console.log(head.next, "head.next", head, "head before prev")
//         prev = head // prev is now [1] because theres no more head.next
//         console.log(prev, "prev")
//         head = nextNode // resetting head to to previous head.next
//         console.log(head, "head after")

//     }
//     return prev
// };

//1,2,3,4,5
// nextNode = head.next = 2,3,4,5
// head.next = 2,3,4,5 = null
// prev = [1]
// head = 2,3,4,5

// //2,3,4,5
// nextNode = head.next = 3,4,5
// head.next = 3,4,5 = prev = [1] -> null
// //so head.next == [1] -> null
// prev is now = to head which is [2] -> [1] -> null
// head = 3,4,5

// //3,4,5
// nextNode = head.next = 4,5
// head.next = 4,5 = [2] -> [1] -> null
// prev = [3] -> [2] -> [1] -> null
// head = 4,5

// //4,5
// nextNode = head.next = 5
// 5 = [3] -> [2] -> [1] -> null
// prev = 4 -> [3] -> [2] -> [1] -> null
// head = 5

// //5
// nextNode = head.next = null
// null =  4 -> [3] -> [2] -> [1] -> null
// prev = 5 -> 4 -> [3] -> [2] -> [1] -> null



// class LinkedList {
//     constructor() {
//         this.head = this.tail = null
//     }

//     // add to the end of the list / tail
//     append(value) {
//         // if list is empty
//         if (!this.tail) {
//             this.head = this.tail = new Node(value)
//         }
//         // if linkedlist has >= one node
//         else {
//             let oldTail = this.tail
//             this.tail = new Node(value)
//             oldTail.next = this.tail
//             this.tail.prev = oldTail
//         }
//     }

//     //add to beginning of list / head
//     prepend(value) {
//         // if list is empty
//         if (!this.head) {
//             this.head = this.tail = new Node(value)
//         }
//         // if linkedlist has >= one node
//         else {
//             let oldHead = this.head
//             this.head = new Node(value)
//             oldHead.prev = this.head
//             this.head.next = oldHead
//         }
//     }
// }
// class Node {
//     constructor(value, prev, next) {
//         this.value = value
//         this.next = next || null
//         this.prev = prev || null
//     }
// }

// const list = new LinkedList()

// console.log(list.append(1))
// console.log(list.append(2))
// console.log(list.append(3))

// console.log(list.prepend(0))
// console.log(list.prepend(-1))


// Construct Single Node
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(value) {
        let node = new Node(value);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
}

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertLast(4);

console.log(ll)


// const reverseList = (head) => {
//     //3 pointers, previous set to null, the head, and the next
//     console.log(head.next)
//     let prev = null
//     while (head !== null) {
//         let nextNode = head.next
//         head.next = prev
//         prev = head
//         head = nextNode // resetting head to to previous head.next
//     }
//     return prev
// };



// const testLinkedList = {
//     "head": "1",
//     "nodes": [
//         { "id": "1", "next": "2", "value": 1 },
//         { "id": "2", "next": "3", "value": 2 },
//         { "id": "3", "next": "4", "value": 3 },
//         { "id": "4", "next": "5", "value": 4 },
//         { "id": "5", "next": "6", "value": 5 },
//         { "id": "6", "next": "7", "value": 6 },
//         { "id": "7", "next": "8", "value": 7 },
//         { "id": "8", "next": null, "value": 8 }
//     ]
// }

// console.log(reverseList(testLinkedList))

//use cases IRL
//music player -> start to end = circular linked list
//web browser -> going back and forward 
//


// var mergeTwoLists = function(l1, l2) {
//     //have to traverse the first list
//     //check if the head.val is greater than the head of the 2nd list
//     //if it is, then we want to 
//     //create a new list overall?
//     let dummy = new ListNode(0)
//     let head = dummy
    
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             dummy.next = l1
//             l1 = l1.next
//         } else {
//              dummy.next = l2
//             l2 = l2.next
//         }
//         dummy = dummy.next
//     }
//     if (l1) { 
//     dummy.next = l1
//     } else {
//         dummy.next = l2
//     }
//     return head.next
    
// };

var middleNode = function(head) {
    
    let pointer1 = head
    let pointer2 = head
    
    while (pointer2 !== null && pointer2.next !== null) {
        pointer2 = pointer2.next.next
        pointer1 = pointer1.next
    }
    return pointer1
};