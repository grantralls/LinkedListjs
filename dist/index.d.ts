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
     * @param entry Data to append. This can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    append(entry: T): void;
    private addFirstNode;
    /**
     * @returns Returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
    traverse(): IterableIterator<T>;
    /**
     * This search is done over O(n) time since the list is not ordered.
     * @param value Value to search for.
     */
    contains(value: T): boolean;
    /**
     * @returns Returns the data value of the head node.
     */
    getHeadValue(): T | undefined;
    /**
     * @returns Returns the data value of the tail node.
     */
    getTailValue(): T | undefined;
    getSize(): number;
}
