import assert from 'assert';
import LinkedList from '../src/index';

describe('Linked List', () => {
    it('should append to end of list', () => {
        const dummyList: LinkedList<number> = new LinkedList<number>();

        dummyList.append(1);
        dummyList.append(2);

        assert.strictEqual(dummyList.getTailValue(), 2);
    });
});