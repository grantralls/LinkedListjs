import { Queue } from '../src/queue';
import { describe, it } from 'mocha';
import assert from 'assert';

describe('Queue', () => {
    const ordered = new Queue<number>();
    ordered.push(1);
    ordered.push(2);
    ordered.push(3);

    const emptyList = new Queue<number>();

    describe('copy()', () => {
        it('should create a new queue with the same data as the original', () => {
            const copiedQueue = ordered.copy();

            assert.strictEqual(ordered.front(), copiedQueue.front());
            assert.strictEqual(ordered.back(), copiedQueue.back());
            assert.strictEqual(ordered.size(), copiedQueue.size());
        });
    });

    describe('push()', () => {
        it("should add to the end of the queue or 'line'", () => {
            assert.strictEqual(ordered.back(), 3);
        });

        it('should result in the size of the queue being increased by 1', () => {
            const newOrdered = ordered.copy();
            newOrdered.push(4);

            assert.strictEqual(newOrdered.size(), ordered.size() + 1);
        });

        it('should add the value as the front and back if the queue starts out as empty', () => {
            const newEmpty = emptyList.copy();

            newEmpty.push(3);

            assert.strictEqual(newEmpty.size(), 1);
            assert.strictEqual(newEmpty.front(), 3);
            assert.strictEqual(newEmpty.back(), 3);
        });
    });

    describe('pop()', () => {
        const copiedOrdered = ordered.copy();

        it('should remove from the beginning of the queue', () => {
            const oldFront = copiedOrdered.front();
            assert.strictEqual(copiedOrdered.pop(), oldFront);
        });

        it('should reduce the size by 1', () => {
            assert.strictEqual(copiedOrdered.size(), ordered.size() - 1);
        });
    });

    describe('empty()', () => {
        it('should return true when run on an empty queue', () => {
            assert.strictEqual(emptyList.empty(), true);
        });

        it('should return false when run on a non-empty queue', () => {
            assert.strictEqual(ordered.empty(), false);
        });
    });

    describe('size()', () => {
        it('should return 0 when the queue is empty', () => {
            assert.strictEqual(emptyList.size(), 0);
        });

        it('should return the accurate size of a queue', () => {
            assert.strictEqual(ordered.size(), 3);
        });
    });
});
