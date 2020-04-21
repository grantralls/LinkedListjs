import Node from './Node';

class LinkedList {

  head: Node;
  tail: Node;
  size: number;

  constructor(entry: number = null) {

    if(entry != null) {
      const initialNode = new Node(entry);

      this.head = initialNode;
      this.tail = initialNode;
      this.tail.next = null;
      this.size = 1;

      return;
    };

    this.head = null;
    this.tail = null;
    this.size = 0;

  };

  appendData(entry: number): void {
    const newNode = new Node(entry);

    if(this.size > 0) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
      this.size++;
      return;
    };

    this.head = newNode;
    this.tail = newNode;
    this.tail.next = null;
    this.size++;

  };
};

export default LinkedList;
