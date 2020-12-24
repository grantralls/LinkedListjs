import Node from './Node';

class LinkedList<T> {
	private head: Node<T> | undefined;
	private tail: Node<T> | undefined;
	private size = 0;

	/**
	 * @param entry data to append. This can be variable thanks to (typescript generics)[https://www.typescriptlang.org/docs/handbook/generics.html]
	 */
	append(entry: T): void {
		if (this.tail == undefined) {
			this.addFirstNode(entry);
		} else {
			this.tail.next = new Node<T>(entry);
			this.tail = this.tail.next;
		}

		this.size++;
	}

	private addFirstNode(entry: T) {
		const newNode: Node<T> = new Node<T>(entry);
		this.head = this.tail = newNode;
	}

	*traverse(): IterableIterator<T> {
		let currNode = this.head;

		while (currNode != undefined) {
			yield currNode.data;
			currNode = currNode.next;
		}
	}

	contains(value: T): boolean {
		if (this.size == 0) {
			return false;
		}

        let currNode: Node<T> | undefined = this.head;
        while(currNode != undefined && currNode.data !== value) {
            currNode = currNode.next;
        }

        if(currNode != undefined) {
            return currNode.data === value;
        }

        return false;
	}
}

export default LinkedList;
