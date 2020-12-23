class Node {
	data: number | null;
	next: Node | null = null;

	constructor(entry: number) {
		this.data = entry;
	}

	print(): void {
		console.log(this.data);
	}
}

export default Node;
