import Node from './Node';
declare class LinkedList {
    head: Node | undefined;
    tail: Node | undefined;
    size: number;
    constructor(entry: number);
    /**
     * @param entry  Integer to add to the end of the linked list
     */
    appendData(entry: number): void;
}
export default LinkedList;
