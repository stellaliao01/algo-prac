/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {

};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {

};

module.exports = { DoublyLinkedList, Node };

/*
This method should add a node to the end of the doubly linked list
 */
/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  // create a new instance of Node and pass the inputted 'val' to it
  const newNode = new Node(val);
  // if list is empty
  if (!this.head) {
    // eassign this.head & this.tail to the new Node to be added
    this.head = newNode;
    this.tail = newNode;
    // if not, add the new Node by reassigning the value this.tail to point to the new Node
  } else {
    // first, point this.tail's next to the new Node
    this.tail.next = newNode;
    // make sure to assign prev pointe (DLL)
    newNode.prev = this.tail;
    // change the value of this.tail to point to the newly added Node
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.remove = function (val) {
  // if list is empty, nothing to remove, so return list
  if (!this.head) return;
  // if value is in head, remove head
  if (this.head.val === val) {
    // is this the only item on the list?
    // if so, head and tail are both set to null
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    // otherwise, update the head to the next value and remove the prev reference
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return;
  }
  // if the value doesn't exist on the head node
  // use recursive helper function to traverse through list
  // 2 scenarios:
  // A) we find the value to remove
  // B) the value does not exist so nothing to remove
  const removeFromList = (curNode, val) => {
    // basecase: if finished traversing, return as there's nothing to remove
    if (!curNode) return;
    // if curNode's value matches value we're looking to remove
    if (curNode.val === val) {
      // glue prev and next nodes together, bypassing curNode
      curNode.prev.next = curNode.next;
      // if the next node is not null, also take care of the previous pointer (DLL)
      if (curNode.next) curNode.next.prev = curNode.prev;
      // otherwise, we're at tail, update tail as well (DLL)
      else this.tail = curNode.prev;
    }
    // otherwise, keep going with the next node
    else removeFromList(curNode.next, val);
  };
  // call helper function with the node after head node (since already checked)
  removeFromList(this.head.next, val);
};

//* Iterative solution
DoublyLinkedList.prototype.remove = function (val) {
  // If the list is empty
  if (!this.head) return;
  // Ask the question of if the inputted 'val' matches the value inside the head node and if the head is not the only node in the doubly linked list
  if (this.head.val === val) {
    // is this the only item on the list?
    // if so, head and tail are both set to null
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    // otherwise, update the head to the next value and remove the prev reference
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  // if list is not empty, and head wasn't the only node with matching value
  else {
    // create a variable to track traversal
    let currNode = this.head;
    // traverse the LL
    while (currNode) {
      // create a variable to refence the next node
      const nextNode = currNode.next;
      // create a variable to reference next node's value
      // is current node's next value is 'null'?
      // if it is, assign nextVal to null
      // if not, assign nextVal whatever value is referenced inside of the current node's next property
      const nextVal = currNode.next === null ? null : currNode.next.val;
      // ask if nextNode is currently pointing to the same reference as this.tail and if the value we're searching for is in the next node, which would be the tail
      if (nextNode === this.tail && nextNode.val === val) {
        // if so, reassign this.tail.prev to be the new this.tail
        this.tail = this.tail.prev;
        // then, reassign the new this.tail's next value to be null
        this.tail.next = null;
        // return to end iteration & function
        return;
        // ask the question of if the value inside the next node is the one to be removed
      }
      if (nextVal === val) {
        // if it is, glue currNode and currNode.next.next together
        currNode.next = currNode.next.next;
        // then reassign the currNode.next.prev value to point to the currNode (DLL)
        currNode.next.prev = currNode;
        // return to end iteration & function
        return;
      }
      // continue traversal
      currNode = currNode.next;
    }
  }
};

module.exports = { DoublyLinkedList, Node };