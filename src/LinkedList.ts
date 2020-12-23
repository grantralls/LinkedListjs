import Node from './Node';

class LinkedList {
	head: Node | undefined;
	tail: Node | undefined;
	size: number;

	constructor(entry: number) {
		if (entry != undefined) {
			const initialNode = new Node(entry);

			this.head = initialNode;
			this.tail = initialNode;
			this.tail.next = null;
			this.size = 1;

			return;
        }
        
		this.size = 0;
	}

	/**
	 * @param entry  Integer to add to the end of the linked list
	 */
	appendData(entry: number): void {
		const newNode = new Node(entry);

		if (this.size > 0 && this.tail != null) {
			this.tail.next = newNode;
			this.tail = newNode;
			this.tail.next = null;
			this.size++;
			return;
		}

		this.head = newNode;
		this.tail = newNode;
		this.tail.next = null;
		this.size++;
	}
}

export default LinkedList;
