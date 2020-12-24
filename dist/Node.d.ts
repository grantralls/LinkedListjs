declare class Node<T> {
    data: T;
    next: Node<T> | undefined;
    constructor(entry: T);
    print(): void;
}
export default Node;
