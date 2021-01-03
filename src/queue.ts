import { LinkedList } from './index';

export class Queue<T> {
    private list = new LinkedList<T>();

    copy(): Queue<T> {
        const newQueue = new Queue<T>();

        newQueue.list = this.list.copy();

        return newQueue;
    }

    push(value: T): void {
        this.list.append(value);
    }

    pop(): T {
        const poppedValue = this.list.getHeadValue();

        this.list.removeHead();

        return poppedValue;
    }

    front(): T {
        return this.list.getHeadValue();
    }

    back(): T {
        return this.list.getTailValue();
    }

    size(): number {
        return this.list.getSize();
    }

    empty(): boolean {
        return this.list.getSize() === 0;
    }
}
