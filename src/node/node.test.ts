import { Node } from './node';
import { describe, it } from 'mocha';
import assert from 'assert';

describe('Node', () => {
    const numberNode = new Node(0);
    const stringNode = new Node('hello');

    it("should expose the 'data' property from node and display the currently stored data.", () => {
        assert.strictEqual(0, numberNode.data);
        assert.strictEqual('hello', stringNode.data);
    });
});
