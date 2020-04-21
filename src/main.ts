import LinkedList from './LinkedList';
import Iterator from './Iterator';

// Creating the Linked List and assigning data
const linkedList = new LinkedList();
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

const iterator = new Iterator(linkedList.head);

while(iterator.currNode != null) {
  iterator.print();
  iterator.next();
}
