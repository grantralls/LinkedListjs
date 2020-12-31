"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const node_1 = __importDefault(require("./node"));
class LinkedList {
    constructor() {
        this.size = 0;
    }
    /**
     * Usage:
     * ```typescript
     *  const oldList = new LinkedList<number>();
     *  const newDeepCopiedList = oldList.copy();
     * ```
     *
     * @returns A new linked list that does not reference the original.
     */
    copy() {
        const oldIterator = this.traverse();
        const newList = new LinkedList();
        for (const value of oldIterator) {
            newList.append(value);
        }
        return newList;
    }
    /**
     * Adds a data value to the end of the list.
     * @param entry Data to append. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    append(entry) {
        this.checkForUndefined(entry);
        if (this.tail == undefined) {
            this.addFirstNode(entry);
        }
        else {
            this.tail.next = new node_1.default(entry);
            this.tail = this.tail.next;
        }
        this.size++;
    }
    /**
     * Adds a data value to the beginning of the list.
     * @param entry Data to prepend. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    prepend(entry) {
        this.checkForUndefined(entry);
        if (this.tail == undefined) {
            this.addFirstNode(entry);
        }
        else {
            const newNode = new node_1.default(entry);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    /**
     * Searches iteratively for the first instance of the parameter in the list.
     * @param value Value to search for. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    contains(value) {
        this.checkForUndefined(value);
        if (this.size == 0) {
            return false;
        }
        let currNode = this.head;
        while (currNode != undefined && currNode.data !== value) {
            currNode = currNode.next;
        }
        if (currNode != undefined) {
            return currNode.data === value;
        }
        return false;
    }
    /**
     * @returns Returns the data value of the head node. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    getHeadValue() {
        if (this.head != undefined) {
            return this.head.data;
        }
        return undefined;
    }
    /**
     * @returns Returns the data value of the tail node. The type can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    getTailValue() {
        if (this.tail != undefined) {
            return this.tail.data;
        }
        return undefined;
    }
    getSize() {
        return this.size;
    }
    removeHead() {
        this.removeAtIndex(0);
    }
    removeTail() {
        this.removeAtIndex(this.size - 1);
    }
    removeAtIndex(desiredIndex) {
        this.validateIndex(desiredIndex);
        if (this.size == 1) {
            this.head = undefined;
            this.tail = undefined;
            this.size--;
            return;
        }
        if (desiredIndex == 0) {
            const newNode = this.head.next;
            this.head = newNode;
            this.size--;
            return;
        }
        let currNode = this.head;
        for (let i = 0; i < desiredIndex - 1; i++) {
            currNode = currNode.next;
        }
        const prevNode = currNode;
        prevNode.next = currNode.next.next;
        if (desiredIndex == this.size - 1) {
            this.tail = prevNode;
        }
        this.size--;
    }
    getValueAtIndex(desiredIndex) {
        this.validateIndex(desiredIndex);
        let currNode = this.head;
        for (let currIndex = 0; currIndex < desiredIndex; currIndex++) {
            currNode = currNode.next;
        }
        return currNode.data;
    }
    /**
     * @returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
    *traverse() {
        let currNode = this.head;
        while (currNode != undefined) {
            yield currNode.data;
            currNode = currNode.next;
        }
    }
    validateIndex(indexToValidate) {
        const error = new Error();
        if (indexToValidate % 1 != 0) {
            error.message = 'Received a decimal, expected a natural number.';
            throw error;
        }
        if (indexToValidate < 0) {
            error.message = 'Received a negative number, expected a positive number.';
            throw error;
        }
        if (indexToValidate >= this.size) {
            error.message = 'Received an index larger than the size of the list.';
            throw error;
        }
    }
    checkForUndefined(value) {
        if (typeof value === 'undefined') {
            throw new Error('Expected some input, got undefined.');
        }
    }
    addFirstNode(entry) {
        const newNode = new node_1.default(entry);
        this.head = this.tail = newNode;
    }
}
exports.LinkedList = LinkedList;
