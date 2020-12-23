import Node from './Node';

class Iterator {
	currNode: Node | null;
	nextNode: Node | null;

	constructor(entryPoint: Node | null) {
		this.currNode = entryPoint;

		if (this.currNode != null) {
			this.nextNode = this.currNode.next;
		}
	}

	next(): void {
		if (this.currNode != null) {
			this.currNode = this.currNode.next;
		}

		if (this.currNode != null) {
			this.nextNode = this.currNode.next;
		}
	}

	print(): void {
		if (this.currNode != null) {
			this.currNode.print();
		}
	}
}

export default Iterator;
