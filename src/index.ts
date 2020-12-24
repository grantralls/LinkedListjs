import Node from './Node';

class LinkedList<T> {
	private head: Node<T> | undefined;
	private tail: Node<T> | undefined;
	private size = 0;

    copy(oldList: LinkedList<T>): void {
        const oldIterator = oldList.traverse();

        for(const value of oldIterator) {
            this.append(value);
        }
    }

	/**
	 * @param entry data to append. This can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
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

    /**
     * @returns Returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
	*traverse(): IterableIterator<T> {
		let currNode = this.head;

		while (currNode != undefined) {
			yield currNode.data;
			currNode = currNode.next;
		}
	}

    /**
     * This search is done over O(n) time since the list is not ordered.
     * @param value value to search for
     */
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
    
    /**
     * @returns Returns the data value of the head node.
     */
    getHeadValue(): T | undefined {
        if(this.head != undefined) {
            return this.head.data;
        }
        return undefined;
    }

    /**
     * @returns Returns the data value of the tail node.
     */
    getTailValue(): T | undefined {
        if(this.tail != undefined) {
            return this.tail.data;
        }
        return undefined;
    }

    getSize(): number {
        return this.size;
    }
}

export default LinkedList;
