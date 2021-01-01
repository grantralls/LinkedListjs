export declare class Queue<T> {
    private list;
    copy(): Queue<T>;
    push(value: T): void;
    pop(): T;
    getHead(): T;
    getTail(): T;
    empty(): boolean;
}
