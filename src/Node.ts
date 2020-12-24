class Node<T> {
	data: T;
	next: Node<T> | undefined;

	constructor(entry: T) {
		this.data = entry;
	}

	print(): void {
		console.log(this.data);
	}
}

export default Node;
