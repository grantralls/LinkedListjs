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
    prepend(entry) {
        if (this.tail == undefined) {
            this.addFirstNode(entry);
        }
        else {
            const newNode = new node_1.default(entry);
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    /**
     * @param entry Data to append. This can be variable due to [Typescript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).
     */
    append(entry) {
        if (this.tail == undefined) {
            this.addFirstNode(entry);
        }
        else {
            this.tail.next = new node_1.default(entry);
            this.tail = this.tail.next;
        }
        this.size++;
    }
    addFirstNode(entry) {
        const newNode = new node_1.default(entry);
        this.head = this.tail = newNode;
    }
    /**
     * @returns Returns a Javascript [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).
     */
    *traverse() {
        let currNode = this.head;
        while (currNode != undefined) {
            yield currNode.data;
            currNode = currNode.next;
        }
    }
    /**
     * This search is done over O(n) time since the list is not ordered.
     * @param value Value to search for.
     */
    contains(value) {
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
     * @returns Returns the data value of the head node.
     */
    getHeadValue() {
        if (this.head != undefined) {
            return this.head.data;
        }
        return undefined;
    }
    /**
     * @returns Returns the data value of the tail node.
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
}
exports.LinkedList = LinkedList;
