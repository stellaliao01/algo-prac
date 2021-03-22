// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: the partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing the example below indicates the partition.)
// EXAMPLE
// Input 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output 3 -> 1 -> 2   ->  10 -> 5 -> 5 -> 8


function LinkedListNode(value) {
    this.value = value
    this.next = null
}

const partition = (head, x) => {
    let pointer1 = this.head
    let pointer2 = pointer1.next

    let h = head

    while (h) {
        if (h.value < x) {
            pointer1.next = h
            //set the current head to the next value 
            h = h.next
            pointer1.next.next = null
            pointer1 = pointer1.next
        } else {
            pointer2.next = h

            h = h.next
            pointer2.next.next = null
            pointer2 = pointer2.next
        }
    }

    pointer1.next = pointer2.next

    return pointer1.next

}

console.log(partition([3, 5, 8, 5, 10, 2, 1], 5))


