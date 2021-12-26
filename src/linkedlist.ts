import { Node } from './node';

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

        for (const value of oldIterator) {
            newList.append(value);
        }

        return newList;
    }

    /**
     * Adds a data value to the end of the list.
     * @param entry Data to append. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    append(entry: T): void {
        this.checkForUndefined(entry);

        if (this.tail == undefined) {
            this.addFirstNode(entry);
        } else {
            this.tail.next = new Node<T>(entry);
            this.tail = this.tail.next;
        }

        this.size++;
    }

    /**
     * Adds a data value to the beginning of the list.
     * @param entry Data to prepend. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    prepend(entry: T): void {
        this.checkForUndefined(entry);

        if (this.tail == undefined) {
            this.addFirstNode(entry);
        } else {
            const newNode = new Node<T>(entry);

            newNode.next = this.head;

            this.head = newNode;
        }

        this.size++;
    }

    /**
     * Searches iteratively for the first instance of the parameter in the list.
     * @param value Value to search for. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    contains(value: T): boolean {
        this.checkForUndefined(value);

        if (this.size == 0) {
            return false;
        }

        let currNode: Node<T> | undefined = this.head;
        while (currNode != undefined && currNode.data !== value) {
            currNode = currNode.next;
        }

        if (currNode != undefined) {
            return currNode.data === value;
        }

        return false;
    }

    /**
     * @returns Returns the data value of the head node. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    getHeadValue(): T | undefined {
        if (this.head != undefined) {
            return this.head.data;
        }
        return undefined;
    }

    /**
     * @returns Returns the data value of the tail node. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    getTailValue(): T | undefined {
        if (this.tail != undefined) {
            return this.tail.data;
        }
        return undefined;
    }

    getSize(): number {
        return this.size;
    }

    removeHead(): void {
        this.removeAtIndex(0);
    }

    removeTail(): void {
        this.removeAtIndex(this.size - 1);
    }

    removeAtIndex(indexToRemove : number): void {
        this.validateIndex(indexToRemove);

        if (this.size == 1) {
            this.head = undefined;
            this.tail = undefined;
            this.size--;
            return;
        }

        if (indexToRemove == 0) {
            const newNode = this.head.next;
            this.head = newNode;
            this.size--;
            return;
        }

        let currNode = this.head;

        for (let i = 0; i < indexToRemove - 1; i++) {
            currNode = currNode.next;
        }

        const prevNode = currNode;
        prevNode.next = currNode.next.next;

        if (indexToRemove == this.size - 1) {
            this.tail = prevNode;
        }

        this.size--;
    }

    getValueAtIndex(indexToRetrieve: number): T {
        this.validateIndex(indexToRetrieve);

        let currNode = this.head;

        for (let currIndex = 0; currIndex < indexToRetrieve; currIndex++) {
            currNode = currNode.next;
        }

        return currNode.data;
    }

    /**
     * @returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
    *traverse(): IterableIterator<T> {
        let currNode = this.head;

        while (currNode != undefined) {
            yield currNode.data;
            currNode = currNode.next;
        }
    }

    private validateIndex(indexToValidate: number): void {

        if (indexToValidate % 1 != 0) {
            throw Error('Received a decimal, expected a natural number.');
        }

        if (indexToValidate < 0) {
            throw Error('Received a negative number, expected a positive number.');
        }

        if (indexToValidate >= this.size) {
            throw Error('Received an index larger than the size of the list.');
        }
    }

    private checkForUndefined(value: T) {
        if (typeof value === 'undefined') {
            throw new Error('Expected some input, got undefined.');
        }
    }

    private addFirstNode(entry: T) {
        const newNode: Node<T> = new Node<T>(entry);
        this.head = this.tail = newNode;
    }
}
