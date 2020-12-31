"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(entry) {
        this.data = entry;
    }
    print() {
        console.log(this.data);
    }
}
exports.default = Node;
