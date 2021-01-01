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

            assert.strictEqual(ordered.getHead(), copiedQueue.getHead());
            assert.strictEqual(ordered.getTail(), copiedQueue.getTail());
            assert.strictEqual(ordered.size(), copiedQueue.size());
        });
    });

    describe('push()', () => {
        it("should add to the end of the queue or 'line'", () => {
            assert.strictEqual(ordered.getTail(), 3);
        });

        it('should result in the size of the queue being increased by 1', () => {
            const newOrdered = ordered.copy();
            newOrdered.push(4);

            assert.strictEqual(newOrdered.size(), ordered.size() + 1);
        });
    });

    describe('empty()', () => {
        it('should return true when run on an empty list.', () => {
            assert.strictEqual(emptyList.empty(), true);
        });

        it('should return false when run on a non-empty list.', () => {
            assert.strictEqual(ordered.empty(), false);
        });
    });
});
