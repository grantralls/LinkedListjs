class Node<T> {
	data: T | null;
	next: Node<T> | null = null;

	constructor(entry: T) {
		this.data = entry;
	}

	print(): void {
		console.log(this.data);
	}
}

export default Node;
