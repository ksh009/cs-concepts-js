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
		// Return the entire list
		return this;
	}
}

var list = new SinglyLinkedList();
console.log(list);
list.push('HELLO');
console.log(list);
list.push('GOODBYE');
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
