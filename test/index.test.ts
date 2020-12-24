import assert from 'assert';
import LinkedList from '../src/index';

const ordered: LinkedList<number> = new LinkedList<number>();
ordered.append(1);
ordered.append(2);
ordered.append(3);

const random: LinkedList<number> = new LinkedList<number>();
random.append(3);
random.append(1);
random.append(2);

const backwards: LinkedList<number> = new LinkedList<number>();
backwards.append(3);
backwards.append(1);
backwards.append(2);


describe('Linked List', () => {
    it('should append to end of list', () => {
        ordered.append(4);
        assert.strictEqual(ordered.getTailValue(), 4);
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
    });
});