import Node from './node';
export declare class LinkedList<T> {
    protected head: Node<T> | undefined;
    protected tail: Node<T> | undefined;
    protected size: number;
    /**
     * Usage:
     * ```typescript
     *  const oldList = new LinkedList<number>();
     *  const newDeepCopiedList = oldList.copy();
     * ```
     *
     * @returns A new linked list that does not reference the original.
     */
    copy(): LinkedList<T>;
    /**
     * Adds a data value to the end of the list.
     * @param entry Data to append. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    append(entry: T): void;
    /**
     * Adds a data value to the beginning of the list.
     * @param entry Data to prepend. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    prepend(entry: T): void;
    /**
     * Searches iteratively for the first instance of the parameter in the list.
     * @param value Value to search for. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    contains(value: T): boolean;
    /**
     * @returns Returns the data value of the head node. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    getHeadValue(): T | undefined;
    /**
     * @returns Returns the data value of the tail node. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    getTailValue(): T | undefined;
    getSize(): number;
    removeHead(): void;
    removeTail(): void;
    removeAtIndex(desiredIndex: number): void;
    getValueAtIndex(desiredIndex: number): T;
    /**
     * @returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
    traverse(): IterableIterator<T>;
    private validateIndex;
    private checkForUndefined;
    private addFirstNode;
}
