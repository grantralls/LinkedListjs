"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Iterator = /** @class */ (function () {
    function Iterator(entryPoint) {
        this.currNode = entryPoint;
        this.nextNode = this.currNode.next;
    }
    Iterator.prototype.next = function () {
        this.currNode = this.currNode.next;
        if (this.currNode != null) {
            this.nextNode = this.currNode.next;
        }
    };
    Iterator.prototype.print = function () {
        this.currNode.print();
    };
    return Iterator;
}());
exports.default = Iterator;
