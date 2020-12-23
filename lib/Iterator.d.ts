import Node from './Node';
declare class Iterator {
    currNode: Node;
    nextNode: Node;
    constructor(entryPoint: Node);
    next(): void;
    print(): void;
}
export default Iterator;
