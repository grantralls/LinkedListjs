"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList(entry) {
        if (entry != undefined) {
            var initialNode = new Node_1.default(entry);
            this.head = initialNode;
            this.tail = initialNode;
            this.tail.next = null;
            this.size = 1;
            return;
        }
        this.size = 0;
    }
    /**
     * @param entry  Integer to add to the end of the linked list
     */
    LinkedList.prototype.appendData = function (entry) {
        var newNode = new Node_1.default(entry);
        if (this.size > 0 && this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = null;
            this.size++;
            return;
        }
        this.head = newNode;
        this.tail = newNode;
        this.tail.next = null;
        this.size++;
    };
    return LinkedList;
}());
exports.default = LinkedList;
