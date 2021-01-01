import { LinkedList } from './index';

export default class Queue<T> {
    private list = new LinkedList<T>();

    push(value: T): void {
        this.list.append(value);
    }

    pop(): T {
        const poppedValue = this.list.getHeadValue();

        this.list.removeHead();

        return poppedValue;
    }
}
