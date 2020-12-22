class Node {

  data: number;
  next: Node = null;

  constructor(entry: number) {
    this.data = entry;
  }

  print(): void {
    console.log(this.data);
  }
}

export default Node;
