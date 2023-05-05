/*
	If there are no nodes in the list, return undefined
	Loop through the list until you reach the tail
	Set the next property of the 2nd to last node to be null
	Set the tail to be the 2nd to last node
	Decrement the length of the list by 1
	Return the value of the node removed

	- Because there is only one direction to move we need to get to the last node (The tail) by traversing to it via the first node (The head)
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
	// traverse() {
	// 	let current = this.head;
	// 	while (current) {
	// 		console.log(current.val);
	// 		current = current.next;
	// 	}
	// }

	pop() {
		// If there are no nodes in the list, return undefined
		if (!this.head) return undefined;

		// Loop through the list until you reach the tail
		// Set the next property of the 2nd to last node to be null
		var current = this.head;
		var newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;

		// Set the tail to be the 2nd to last node
		this.tail.next = null;

		// Decrement the length of the list by 1
		// Return the value of the node removed
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
}

var list = new SinglyLinkedList();
console.log('Pushing');
list.push('HELLO');
console.log(list);
list.push('GOODBYE');
console.log(list);
list.push('!');
console.log(list);
console.log('Popping');
list.pop();
console.log(list);
list.pop();
console.log(list);

/* Output 
SinglyLinkedList { head: null, tail: null, length: 0 }
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
*/
