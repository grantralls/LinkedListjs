"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const index_1 = require("./index");
class Queue {
    constructor() {
        this.list = new index_1.LinkedList();
    }
    copy() {
        const newQueue = new Queue();
        newQueue.list = this.list.copy();
        return newQueue;
    }
    push(value) {
        this.list.append(value);
    }
    pop() {
        const poppedValue = this.list.getHeadValue();
        this.list.removeHead();
        return poppedValue;
    }
    front() {
        return this.list.getHeadValue();
    }
    back() {
        return this.list.getTailValue();
    }
    size() {
        return this.list.getSize();
    }
    traverse() {
        return this.list.traverse();
    }
    empty() {
        return this.list.getSize() === 0;
    }
}
exports.Queue = Queue;
