import assert from 'assert';
import { LinkedList } from '../src/index';
import { describe, it } from 'mocha';

const ordered = new LinkedList<number>();
ordered.append(1);
ordered.append(2);
ordered.append(3);

const random = new LinkedList<number>();
random.append(3);
random.append(1);
random.append(2);

const backwards = new LinkedList<number>();
backwards.append(3);
backwards.append(2);
backwards.append(1);

describe('Linked List', () => {
	describe('append()', () => {
		const mutatedOrdered = ordered.copy();
		mutatedOrdered.append(4);

		it('should append to end of list', () => {
			assert.strictEqual(mutatedOrdered.getTailValue(), 4);
		});

		it('should add to the size of the list', () => {
			assert.strictEqual(mutatedOrdered.getSize(), ordered.getSize() + 1);
		});

		it('should throw an error when attempting to append with no parameter', () => {
			assert.throws(
				() => {
					// @ts-ignore
					mutatedOrdered.append();
				},
				{
					message: 'Expected some input, got undefined.',
				},
				'Should have thrown an error but did not.'
			);
		});
	});

	describe('prepend()', () => {
		const prependList = random.copy();
		prependList.prepend(-2);

		it('should add to the beginning of the list.', () => {
			assert.strictEqual(prependList.getHeadValue(), -2);
		});

		it('should add to the size of the list', () => {
			assert.strictEqual(prependList.getSize(), random.getSize() + 1);
		});

		it('should throw an error when attempting to prepend with no parameter', () => {
			assert.throws(
				() => {
					// @ts-ignore
					prependList.prepend();
				},
				{
					message: 'Expected some input, got undefined.',
				},
				'Should have thrown an error but did not.'
			);
		});
	});

	describe('getSize()', () => {
		it('should accurately return the number of nodes in the list as a number', () => {
			const emptyList = new LinkedList<number>();

			assert.strictEqual(ordered.getSize(), 3);
			assert.strictEqual(emptyList.getSize(), 0);
			assert.strictEqual(random.getSize(), 3);
		});
	});

	describe('copy()', () => {
		const deepList = ordered.copy();

		it('should create a deep copy of the original list that no longer is equal to the original list', () => {
			if (deepList == ordered) {
				assert.fail(
					'The deep copy is referencing the original, it should not be.'
				);
			}
		});

		it('should create a deep copy that has the same head value, tail value, and size of the original', () => {
			const headEquivalency =
				deepList.getHeadValue() == ordered.getHeadValue();
			const tailEquivalency =
				deepList.getTailValue() == ordered.getTailValue();
			const sizeEquivalency = deepList.getSize() == ordered.getSize();

			assert.strictEqual(headEquivalency, true);
			assert.strictEqual(tailEquivalency, true);
			assert.strictEqual(sizeEquivalency, true);
		});

		it('should create a deep copy that has the exact same data as the original', () => {
			const originalListData: Array<number> = [];
			const deepCopyListData: Array<number> = [];

			const orderedIterator = ordered.traverse();
			const deepIterator = deepList.traverse();

			for (const value of orderedIterator) {
				originalListData.push(value);
			}

			for (const value of deepIterator) {
				deepCopyListData.push(value);
			}

			for (let i = 0; i < originalListData.length; i++) {
				if (originalListData[i] != deepCopyListData[i]) {
					assert.fail(
						'The data within the deep-copied list is not equal to that of the original list'
					);
				}
			}
		});
	});

	describe('getAtIndex()', () => {
		const indexList = random.copy();

		it('should return the data at the node accurately on a non-empty list', () => {
			assert.strictEqual(indexList.getValueAtIndex(0), 3);
			assert.strictEqual(indexList.getValueAtIndex(1), 1);
			assert.strictEqual(indexList.getValueAtIndex(2), 2);
		});

		it('should throw an error when attempting to access index 0 on an empty list', () => {
			const emptyList = new LinkedList<number>();

			assert.throws(
				() => {
					emptyList.getValueAtIndex(0);
				},
				{
					message:
						'Received an index larger than the size of the list.',
				},
				'Should have thrown an error but did not.'
			);
		});

		it('should throw an error when attempting to retrieve the value at an index that goes beyond the positive bounds of the list', () => {
			assert.throws(
				() => {
					indexList.getValueAtIndex(4);
				},
				{
					message:
						'Received an index larger than the size of the list.',
				},
				'Should have thrown an error but did not.'
			);
		});

		it('should throw an error when attempting to retrieve the value at an index below 0', () => {
			assert.throws(
				() => {
					indexList.getValueAtIndex(-1);
				},
				{
					message:
						'Received a negative number, expected a positive number.',
				},
				'Should have thrown an error but did not.'
			);
		});

		it('should throw an error when attempting to retrieve the value at an index that is a decimal number', () => {
			assert.throws(
				() => {
					indexList.getValueAtIndex(1.5);
				},
				{
					message: 'Received a decimal, expected a natural number.',
				},
				'Should have thrown an error but did not.'
			);
		});
	});

	describe('getHeadValue()', () => {
		it('should return the data of the node at the head', () => {
			assert.strictEqual(ordered.getHeadValue(), 1);
			assert.strictEqual(backwards.getHeadValue(), 3);
			assert.strictEqual(random.getHeadValue(), 3);
		});
		it('should return undefined if the list is empty', () => {
			const emptyList = new LinkedList<number>();

			assert.strictEqual(emptyList.getHeadValue(), undefined);
		});
	});

	describe('getTailValue()', () => {
		it('should return the data of the node at the tail', () => {
			assert.strictEqual(ordered.getTailValue(), 3);
			assert.strictEqual(backwards.getTailValue(), 1);
			assert.strictEqual(random.getTailValue(), 2);
		});
		it('should return undefined if the list is empty', () => {
			const emptyList = new LinkedList<number>();

			assert.strictEqual(emptyList.getTailValue(), undefined);
		});
	});

	describe('removeAtIndex()', () => {
		const removedList = ordered.copy();

		const singleList = new LinkedList<number>();
		singleList.append(1);

		it('should make the list empty when removing the last item in the list', () => {
			singleList.removeAtIndex(0);

			assert.strictEqual(singleList.getSize(), 0);
			assert.strictEqual(singleList.getHeadValue(), undefined);
			assert.strictEqual(singleList.getTailValue(), undefined);
		});

		it('should remove the node from the proper index', () => {
			removedList.removeAtIndex(1);
			const solution = [1, 3];

			for (let i = 0; i < removedList.getSize(); i++) {
				assert.strictEqual(removedList.getValueAtIndex(i), solution[i]);
			}

			assert.strictEqual(removedList.getSize(), ordered.getSize() - 1);
		});
	});

	describe('removeHead()', () => {
		const removeList = random.copy();
		removeList.removeHead();

		it('should remove the head node from the list', () => {
			assert.strictEqual(removeList.getHeadValue(), 1);
		});

		it('should have a size of 1 less than the original', () => {
			assert.strictEqual(removeList.getSize(), random.getSize() - 1);
		});

		it('should have the same tail value as the original', () => {
			assert.strictEqual(
				removeList.getTailValue(),
				random.getTailValue()
			);
		});
	});

	describe('removeTail()', () => {
		const removeList = random.copy();
		removeList.removeTail();

		it('should have the same head value as the original', () => {
			assert.strictEqual(removeList.getHeadValue(), 3);
		});

		it('should have a size of 1 less than the original', () => {
			assert.strictEqual(removeList.getSize(), random.getSize() - 1);
		});

		it('should remove the tail node from the list', () => {
			assert.strictEqual(removeList.getTailValue(), 1);
		});
	});

	describe('contains()', () => {
		it('should return true if the value is in the list', () => {
			assert.strictEqual(random.contains(2), true);
			assert.strictEqual(random.contains(1), true);
			assert.strictEqual(random.contains(3), true);
		});

		it('should return false if the value is not in the list', () => {
			assert.strictEqual(random.contains(5), false);
			assert.strictEqual(random.contains(0), false);
			assert.strictEqual(random.contains(-1), false);
		});

		it('should throw an error when attempting contains with no parameter', () => {
			assert.throws(
				() => {
					// @ts-ignore
					random.contains();
				},
				{
					message: 'Expected some input, got undefined.',
				},
				'Should have thrown an error but did not.'
			);
		});
	});

	describe('traverse()', () => {
		it('should iterate over each item in the list', () => {
			const orderedIterator: IterableIterator<number> = ordered.traverse();

			let expectedValue = 1;
			for (const value of orderedIterator) {
				assert.strictEqual(value, expectedValue);
				expectedValue++;
			}
		});
	});
});
