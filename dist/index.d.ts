declare class LinkedList<T> {
    private head;
    private tail;
    private size;
    copy(oldList: LinkedList<T>): void;
    /**
     * @param entry data to append. This can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    append(entry: T): void;
    private addFirstNode;
    /**
     * @returns Returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
    traverse(): IterableIterator<T>;
    /**
     * This search is done over O(n) time since the list is not ordered.
     * @param value value to search for
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
export default LinkedList;
