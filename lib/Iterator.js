"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Iterator = /** @class */ (function () {
    function Iterator(entryPoint) {
        this.currNode = entryPoint;
        if (this.currNode != null) {
            this.nextNode = this.currNode.next;
        }
    }
    Iterator.prototype.next = function () {
        if (this.currNode != null) {
            this.currNode = this.currNode.next;
        }
        if (this.currNode != null) {
            this.nextNode = this.currNode.next;
        }
    };
    Iterator.prototype.print = function () {
        if (this.currNode != null) {
            this.currNode.print();
        }
    };
    return Iterator;
}());
exports.default = Iterator;
