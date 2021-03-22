
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}
function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

// function countElements(head, count=0) {
//     // Write your code here.
// //iterative approach
// //     let curr = head
// //     let count = 0
    
// //     while (curr) {
// //       count++
// //       curr = curr.next
// //     }
// //     return count
  
//   //recursive approach
//   //base case 
//   if (!head) return count
//   //recursive call - set head to head.next and increment count by 1
//   return countElements(head=head.next, count+=1)
// }

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(countElements(null)) // 0
// console.log(countElements(LL1)) // 3
// console.log(countElements(new ListNode())) // 1


// function append(head, target, curr=head) {
    // Write your code here.
    
  //iterative approach
    //edge case to handle null
    // if (!head) return new ListNode(target)
    // //pointer so we don't lose track of of the original list
    // let curr = head
    // //iterate over the list until we reach the last element
    // while (curr.next){
    //   curr = curr.next
    // }
    // //set the next element to the next new target
    // curr.next = new ListNode(target)
    // //return the original ll
    // return head
  
  //recursive approach
    // //edge case
//     if (!head) return new ListNode(target)
//     if (!curr.next) {
//       curr.next = new ListNode(target)
//       return head
//     }
//     return append(head, target, curr = curr.next)
  
// }

// function appendRecursive(node, value) {
//   if (node.next) {
//     appendRecursive(node.next, value);
//   } else {
//     node.next = new ListNode(value);
//   }
//   return node
// }

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(arrayify(append(null, 1))) // [1]
// console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
// console.log(arrayify(append(new ListNode(), 7))) // [0, 7]
// console.log(arrayify(appendRecursive(LL1, 7))) // [1, 4, 5, 7]

function sumElements(head, sum=0) {
    // Write your code here.
  //iterative approach
//     if (!head) return 0
//     let sum = 0
//     while (head) {
//       sum += head.value
//       head = head.next
//     }
  
//     return sum
//   if (!head) return 0
//   if (!head.next) return head.value
  
//   return head.value += sumElements(head=head.next)

  //
    if (!head) return sum
    if (!head.next) return head.value
    sum = head.value
    return sumElements(head.next, sum+=head.value)

}

// // // Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sumElements(null)) // 0
console.log(sumElements(LL1)) // 10
console.log(sumElements(new ListNode(1))) // 1

        
// function findMax(head, max=-Infinity) {
//     // Write your code here.
//     //iterative approach
//   //   let max = -Infinity
//   //   while (head) {
//   //     if (head.value > max) {
//   //       max = head.value
//   //     }
//   //     head = head.next
//   //   }
//   // return max
  
//   //recursive approach
//   if (!head) return max
//   if (head.value > max) {
//     max=head.value
//   }
//   return findMax(head.next, max)
// }


// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
// var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
// var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
// console.log(findMax(LL1)) // 5
// console.log(findMax(LL2)) // 7
// console.log(findMax(LL3)) // 0
// console.log(findMax(new ListNode(1))) // 1

// function searchLL(head,  target) { 
//     // Write your code here.
//     //iterative 
//     // while (head) {
//     //   if (head.value === target) {
//     //     return true
//     //   } else if (head.value > target) {
//     //     return false
//     //   } else {
//     //     head = head.next
//     //   }
//     // } 
//     // return false
  
//   //recursive approach
//   if (head && head.value === target) return true
//   if (head) {
//       return searchLL(head.next, target)
//   }

//   return false
// }

// // Test Cases
// let LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
// console.log(searchLL(null, 1)) // false
// console.log(searchLL(LL1, 2)) // true
// console.log(searchLL(LL1, 4)) // false
// console.log(searchLL(LL1, -1)) // false
// console.log(searchLL(LL1, 10)) // true
// console.log(searchLL(LL1, 11)) // false

//Remove All Nodes with value in a Linked List 
function removeNodes(head, target) { 
    // Write your code here.
    if (!head) return new ListNode()
    let curr = head
    let prev
    while(curr) {
        if (curr.value !== target)  {
            prev = curr
            // console.log('prev', prev)
            curr = curr.next
        }
        else {
            if (!prev) {
                head = curr.next
                break
            }
            if (curr.next !== undefined || curr.next !== null) {
              prev.next = curr.next
            }
            else {
                prev.next = null
            }
            curr = prev
        }
    }
    return head
}
//recursive
function removeNodes(head, target) { 
    if (!head) return null

    if (head.value === target) {
      return removeNodes(head.next, target);
    } 
      head.next = removeNodes(head.next, target);
      return head;

  }

 


//iterate over the ll until it's null
    //check if ll.val === to target, 
    //if it is, then we need to have a reference to the previous node && a reference to the next node
    //set the previous node.next = to the next node 


// Test Cases
// var LL1 = new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
// console.log(arrayify(removeNodes(null, 1))) // []
// console.log(arrayify(removeNodes(LL1, 1))) // [4, 2, 3, 2, 2] 
// console.log(arrayify(removeNodes(LL1, 2))) // [4, 3]
// console.log(arrayify(removeNodes(LL1, 3))) // [4]
// console.log(arrayify(removeNodes(LL1, 4))) // []

//Insert an element into a sorted linked list (iterative or recursive
// function insert(head, target) {
//     // Write your code here.
//     if (!head) return new TreeNode(target)
//     let curr = head
//     let prev
//     let currDiff =0
//     while (head){
//         if (head.value < target) {
//             prev = head
//             head = head.next
//         }
//         if (head.value > target ) {
            
//         }
//     }
// }

// Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
// var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
// console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
// console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
// console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
// console.log(arrayify(insert(null, 1))) // [1]

//Remove a target element from a sorted linked list (iterative or recursive) 
function remove(head, target) {
    // Write your code here.
    //if there's no head, return null
    if (!head) return null
    //edge case --checks if head exists && the first node in the linked list is === target 
    while (head && head.value === target) {
        head = head.next
    }
    //reference to head
    let curr = head
    // //reference to previous 
    // let prev = curr
    // //iterate over curr until curr is null
    // while(curr) {
    //     //checks if the curr value is not the target, then we update prev to curr and set curr head to the next
    //     if (curr.value !== target)  {
    //         prev = curr
    //         curr = curr.next
    //     }
    //     //checks if curr value is the target
    //     else {
    //         //if curr.next is not null then we move the pointer from the previous's next = to curr.next -- "removing the node"
    //        if (curr.next) {
    //           prev.next = curr.next
    //         }
    //         //else if there is no node after the current node, we set the previous's next to null -- "removing the node"
    //         else {
    //             prev.next = null
    //         }
    //         //update curr to curr.next
    //         curr = curr.next
    //     }
    // }
    // return head
   
//     let curr = head;

//     while (head && head.value === target) {
//       head = head.next;
//     }

    while (curr) {
      if (curr.next && curr.next.value === target) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
  
    return head;


}

// Test Cases
// var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
// console.log(arrayify(remove(LL1, 1))) // [-1, 3, 4]
// console.log(arrayify(remove(LL1, -1))) // [3, 4]
// // console.log(LL1)
// console.log(arrayify(remove(LL1, 4))) // [3]
// console.log(arrayify(remove(LL1, 5))) // [3]
// console.log(arrayify(remove(new ListNode(1), 1))) // []
// Test Cases
// var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
// LL1 = remove(LL1, 1)
// console.log(arrayify(LL1)) // [-1, 3, 4]
// LL1 = remove(LL1, -1)
// console.log(arrayify(LL1)) // [3, 4]
// LL1 = remove(LL1, 4)
// console.log(arrayify(LL1)) // [3]
// LL1 = remove(LL1, 5)
// console.log(arrayify(LL1)) // [3]
// LL1 = remove(new ListNode(1), 1)
// console.log(arrayify(LL1)) // []



//Find the middle element from a linked list in one pass 
// [1,2,3,4] 
//      s
//        f 
function findMiddle(head) {
    // Write your code here.
    if (!head) return null
    //two pointers, one faster than the slow
    let dummy = new ListNode(0)
    dummy.next = list
    let slow = dummy
    let fast = dummy
    
    //iterate until fast.next.next is null
    while(fast && fast.next) {
       slow = slow.next
       fast = fast.next.next
    }
    return slow.value
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL1 = new ListNode(1, 
                new ListNode(2, new ListNode(3, new ListNode(4))))
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(new ListNode(1))) // 1

//Return the kth from the end of a linked list in one(-ish) pass 

function findKthFromLast(head, k) {
    // Write your code here.
    //two pass
//     if (!head || k<1) {
//         return null
//     }

    // let length = 0
    // let curr = head

    // while(curr){
    //   length += 1
    //   curr = curr.next
    // }
    // let kthNode = head
    // if (k <= length){
    //    for (let i = 0; i<length - k; i++){
    //       kthNode = kthNode.next
    //    }
    // }else{
    //     //kth node is out of range
    //    return -1
    // }
    // return kthNode.value 

    // 13, 1, 5, 3, 7, 10
    //                 f  
    //              s
    let slow = head
    let fast = head
    for(let i = 0; i<k-1; i++){
       //if its out of bounds
        if(!fast.next) return -1
        fast = fast.next;    
    }
    while(fast.next){
     slow = slow.next
     fast = fast.next
    }
    return slow.value
}

// Test Cases
// var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
// console.log(findKthFromLast(LL1, 1)) // 10
// console.log(findKthFromLast(LL1, 3)) // 3
// console.log(findKthFromLast(LL1, 6)) // 13
// console.log(findKthFromLast(LL1, 7)) // -1

//Sum two linked lists of equal length (1->2, 3->4 returns 4->6) 

function sumLinkedLists(head1, head2) {
    // Write your code here.
    //have a copy of head1 to reference
    //iterate over the second 
    //sum the values of head 
    let curr1 = head1
    while(head2) {
        curr1.value = curr1.value + head2.value
        head2=head2.next
        curr1=curr1.next
    }
    return head1
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
console.log(arrayify(sumLinkedLists(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(sumLinkedLists(new ListNode(0), new ListNode(0)))) // [0]

//reverse linked list
function reverseLL(head) {
    // Write your code here.
    if (!head) return null

    //create a variable to update and store each node
    let prev

    while(head) {
        let tempHead = head.next
        head.next = prev
        prev = head
        head = tempHead
    }
    return prev
}

// // // Test Cases
// var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
// console.log(arrayify(reverseLL(new ListNode(1)))) // [1]
// console.log(arrayify(reverseLL(new ListNode(1, new ListNode(2))))) // [2, 1]
// console.log(arrayify(reverseLL(LL1))) // [10, 7, 3, 5, 1, 13]


//removing kth node
function removeKthFromLast(head, k) {
    // Write your code here.
    //iterative
    //dummy node, slow, fast
    let dummy = new ListNode(0)
    //how we associate head with the dummy node
    dummy.next = head
    let slow = dummy
    let fast = dummy

    while (fast.next) {
        console.log("FAST", fast, "slow", slow)
        fast = fast.next
        if (k <= 0) {
            slow = slow.next
        }
        k--
    }

    slow.next = slow.next.next
    console.log("DUMMY", dummy)
    return dummy.next

}


function constructLL(target, count) {
    let list = new ListNode(0)
    let curr = list
    
    while (count > 0) {
        curr.next = new ListNode(target)
        curr = curr.next
        count--
    }    
    return list.next
}

function insertZerosInLL(head) {
    if (!head) return null

    let curr = head
    let prev = null

    while (curr) {
        prev = curr.next
        curr.next = new ListNode(0)
        curr.next.next = prev
        curr = curr.next.next
    }
    return head
}

function convertArrayToLL(array) {
  if (!array) return null
  let head = new ListNode(0)
  let curr = head
  

  for(let i=0; i<array.length; i++) {
      curr.next = new ListNode(array[i])
      curr = curr.next
  }
 
return head.next

}

function firstKTimesLL(head, k) {
    if (!head) return -1
    const dict = {}
    let curr = head
    while(curr) {
        dict[curr.value] = (dict[curr.value] || 0) +1
        if (dict[curr.value] === k) {
            return curr.value
          } 
        curr = curr.next
    }
    return -1
}

function limitToKTimesLL(head, k) {
    if (!head) return null
    const dict = {} 
    
    let sentinel = new ListNode(0)
    sentinel.next = head
    let curr = sentinel
    let prev = curr
    
    while(curr) {
        dict[curr.value] = (dict[curr.value] || 0) +1
        if (dict[curr.value] > k) {
            while (curr) {
            prev.next = curr.next
            }
        } else {
        prev = curr
        }
        curr = curr.next
    }
    return sentinel.next
}