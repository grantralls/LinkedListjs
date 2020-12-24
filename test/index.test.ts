import assert from 'assert';
import LinkedList from '../src/index';

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
    describe('copy()', () => {

        const deepList = ordered.copy();

        it('should create a deep copy of the original list that no longer is equal to the original list', () => {
            if(deepList == ordered) {
                assert.fail('The deep copy is referencing the original, it should not be.');
            }
        });

        it('should create a deep copy that has the exact same data as the original', () => {
            const originalListData: Array<number> = [];
            const deepCopyListData: Array<number> = [];

            const orderedIterator = ordered.traverse();
            const deepIterator = deepList.traverse();

            if(deepList.getSize() > ordered.getSize()) {
                console.log(`${deepList.getSize()} -> ${ordered.getSize()}`);
                assert.fail('The dataset of the deep copy has more members than the original');
            } else if(deepList.getSize() < ordered.getSize()) {
                assert.fail('The dataset of the deep copy has less members than the original');
            }

            for(const value of orderedIterator) {
                originalListData.push(value);
            }

            for(const value of deepIterator) {
                deepCopyListData.push(value);
            }

            for(let i = 0; i < originalListData.length; i++) {
                if(originalListData[i] != deepCopyListData[i]) {
                    assert.fail('The data within the deep-copied list is not equal to that of the original list');
                }
            }
            
        });
    });
    
    it('should append to end of list', () => {
        const mutatedOrdered = ordered.copy();
        mutatedOrdered.append(4);
        assert.strictEqual(mutatedOrdered.getTailValue(), 4);
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

    describe('traverse()', () => {
        it('should iterate over each item in the list', () => {
            const orderedIterator: IterableIterator<number> = ordered.traverse();
            
            let expectedValue = 1;
            for(const value of orderedIterator) {
                assert.strictEqual(value, expectedValue);
                expectedValue++;
            }
        });
    });
});