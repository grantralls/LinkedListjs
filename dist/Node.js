"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(entry) {
        this.data = entry;
    }
    Node.prototype.print = function () {
        console.log(this.data);
    };
    return Node;
}());
exports.default = Node;
