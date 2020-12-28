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

    prepend(entry: T): void {
        if(this.tail == undefined) {
            this.addFirstNode(entry);
        } else {
            const newNode = new Node<T>(entry);

            newNode.next = this.head;

            this.head = newNode;
        }
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

    removeHead(): void {
        this.head = this.head.next;
        this.size--;
    }

    removeTail(): void {

        if(this.size == 1) {
            this.head = undefined;
            this.tail = undefined;
            this.size--;
            return;
        }

        const newTailIndex = this.size - 2;
        let currNode = this.head;

        for(let i = 0; i < newTailIndex; i++) {
            currNode = currNode.next;
        }

    }

    removeAtIndex(desiredIndex: number): void {
        this.validateIndex(desiredIndex);

        let currNode = this.head;
    }

    getValueAtIndex(desiredIndex: number): T {
        this.validateIndex(desiredIndex);

        let currNode = this.head;

        for(let currIndex = 0; currIndex < desiredIndex; currIndex++) {
            currNode = currNode.next;
        }

        return currNode.data;

    }

    private validateIndex(indexToValidate: number): void {
        const error = new Error();

        if(indexToValidate % 1 != 0) {
            error.message = 'Received a decimal, expected a natural number.';
            throw error;
        }

        if(indexToValidate < 0) {
            error.message = 'Received a negative number, expected a positive number.';
            throw error;
        }

        if(indexToValidate > this.size) {
            error.message = 'Received an index larger than the size of the list.';
            throw error;
        }
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
