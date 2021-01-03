export declare class Queue<T> {
    private list;
    copy(): Queue<T>;
    push(value: T): void;
    pop(): T;
    front(): T;
    back(): T;
    size(): number;
    traverse(): IterableIterator<T>;
    empty(): boolean;
}
