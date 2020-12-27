import Node from './node';

export class LinkedList<T> {
	protected head: Node<T> | undefined;
	protected tail: Node<T> | undefined;
    protected size = 0;

    /**
     * Usage:
     * ```typescript
     *  const oldList = new LinkedList<number>();
     *  const newDeepCopiedList = oldList.copy();
     * ```
     * 
     * @returns A new linked list that does not reference the original.
     */
    copy(): LinkedList<T> {
        const oldIterator = this.traverse();
        const newList = new LinkedList<T>();

        for(const value of oldIterator) {
            newList.append(value);
        }

        return newList;
    }

	/**
	 * @param entry Data to append. This can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
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
     * @param value Value to search for.
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
