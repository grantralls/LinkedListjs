"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Iterator_1 = require("./Iterator");
// Creating the Linked List and assigning data
var linkedList = new LinkedList_1.default();
linkedList.appendData(1);
linkedList.appendData(2);
linkedList.appendData(3);
/*
  I chose to create an Iterator for abstraction.
  If I make a major refactor to the Linked List
  I only need to change the Iterator without
  needing to change every project that uses
  this module.
*/
var iterator = new Iterator_1.default(linkedList.head);
while (iterator.currNode != null) {
    iterator.print();
    iterator.next();
}
