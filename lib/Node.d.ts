declare class Node<T> {
    data: T | null;
    next: Node<T> | null;
    constructor(entry: T);
    print(): void;
}
export default Node;
