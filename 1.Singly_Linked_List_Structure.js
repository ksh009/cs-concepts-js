// piece of data - val
//reference to next node - next

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		// First push the head and tail would be the same as there is only one node
		// Second push would then create another node with the head as the pointer
		// In this example each new push becomes the tail
		// Pushing to end of list is inexpensive as you only need to keep track of tail pointer
	}
}

// Later example usage
const list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');

// Simple example
const first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');

console.log(first);
console.log(first.next);
console.log(first.next.next);
console.log(first.next.next.next);
console.log(first.next.next.next.next);

/* OUTPUT
Node {
  val: 'Hi',
  next: Node { val: 'there', next: Node { val: 'how', next: [Node] } }
}
Node {
  val: 'there',
  next: Node { val: 'how', next: Node { val: 'are', next: [Node] } }
}
Node {
  val: 'how',
  next: Node { val: 'are', next: Node { val: 'you', next: null } }
}
Node { val: 'are', next: Node { val: 'you', next: null } }
Node { val: 'you', next: null }

*/

// const list = new SinglyLinkedList();
// list.push('HELLO');
// list.push('GOODBYE');

/*
    1. What is a linked list?
    - Stores what data type you want 
    - A data structure that contains a head, tail and length property.
    - No indices
        - Start at 1st and traverse sequentially 
    - Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
        - If no next list then reference is null 
    - Analogy 
        - Skyscaper with no elevators 
    - Term SINGLY LINKED 
        - Each node only links ONE directionally to the next node
            - Traverse only one way 
        - Double linked lists has 
            - 1. A connection pointing BACK to previous node 
        - When assigning to head or tail you just replace them. In an array the entire array would have to be reindexed => This is expensive 

    Comparisons with Arrays
        Lists 
            Do not have indexes!
            Connected via nodes with a next pointer
            Random access is not allowed
            Use lists if you're concerned about Big O
        
        Arrays
            Indexed in order!
            Insertion and deletion can be expensive
                - Ripple effect 
                    - All indices must be reindexed
            Can quickly be accessed at a specific index
*/
