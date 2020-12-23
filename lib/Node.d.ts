declare class Node {
    data: number | null;
    next: Node | null;
    constructor(entry: number);
    print(): void;
}
export default Node;
