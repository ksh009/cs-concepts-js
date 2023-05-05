/*
    Removing a new node from the beginning of the Linked List!
    - Opposite of POP
        If there are no nodes, return undefined
        Store the current head property in a variable
        Set the head property to be the current head's next property
        Decrement the length by 1
        Return the value of the node removed
*/

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
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		// If there are no nodes, return undefined
		if (!this.head) return undefined;
		// Store the current head property in a variable
		var currentHead = this.head;
		// Set the head property to be the current head's next property
		this.head = currentHead.next;
		// Decrement the length by 1
		this.length--;
		// Handle case where there are no nodes
		if (this.length === 0) {
			this.tail = null;
		}
		// Return the value of the node removed
		return currentHead;
	}
}

/*
Pushing
SinglyLinkedList {
  head: Node { val: 'HELLO', next: null },
  tail: Node { val: 'HELLO', next: null },
  length: 1
}
SinglyLinkedList {
  head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: null } },
  tail: Node { val: 'GOODBYE', next: null },
  length: 2
}
SinglyLinkedList {
  head: Node { val: 'HELLO', next: Node { val: 'GOODBYE', next: [Node] } },
  tail: Node { val: '!', next: null },
  length: 3
}
Popping
SinglyLinkedList {
  head: Node { val: 'GOODBYE', next: Node { val: '!', next: null } },
  tail: Node { val: '!', next: null },
  length: 2
}
SinglyLinkedList {
  head: Node { val: '!', next: null },
  tail: Node { val: '!', next: null },
  length: 1
}
SinglyLinkedList { head: null, tail: null, length: 0 }
Nothing to shift as no nodes
SinglyLinkedList { head: null, tail: null, length: 0 }

*/

var list = new SinglyLinkedList();
console.log('Pushing');
list.push('HELLO');
console.log(list);
list.push('GOODBYE');
console.log(list);
list.push('!');
console.log(list);
console.log('Popping');
list.shift();
console.log(list);
list.shift();
console.log(list);
list.shift();
console.log(list);
console.log('Nothing to shift as no nodes');
list.shift();
console.log(list);
