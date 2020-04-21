import Node from './Node';

class Iterator {

  currNode: Node;
  nextNode: Node;

  constructor(entryPoint: Node) {
    this.currNode = entryPoint;
    this.nextNode = this.currNode.next;
  }

  next(): void {
    this.currNode = this.currNode.next;
    
    if(this.currNode != null) {
      this.nextNode = this.currNode.next;
    }
  }

  print(): void {
    this.currNode.print();
  }

}

export default Iterator