import Node from './Node';
declare class Iterator {
    currNode: Node | null;
    nextNode: Node | null;
    constructor(entryPoint: Node | null);
    next(): void;
    print(): void;
}
export default Iterator;
