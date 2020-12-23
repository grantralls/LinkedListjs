import Node from './Node';
declare class LinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;
    constructor(entry?: number | null);
    /**
    * @param entry  Integer to add to the end of the linked list
    */
    appendData(entry: number): void;
}
export default LinkedList;
