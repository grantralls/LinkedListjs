# Typescript Generics Linked List
*Author: Grant Ralls <dev@grantralls.net> https://www.grantralls.net*

## Foreword
I created this package for the value of practice. I wanted my own implementation of a Linked List using Typescript with Generics to use in future home-projects. Consider this a work in progress, not ready for production.

## Compatibility
This is designed to be compatible with ES2017. This works best (at the time of writing) with Node 9, 10, and 11.

## Example

### Node 10.8.x
```
const LinkedList = require("linkedlist").LinkedList;

const newList = new LinkedList();

newList.append(3);
newList.contains(3); // true
```

### Typescript
```
import { LinkedList } from "linkedlist";

// number can be changed to another type.
const newList = new LinkedList<number>();

newList.append(4);
newList.contains(4); // true
```

## API (Using Typescript)
### append(value: Type) returns void
The append function adds `value` to the end of the list.

Usage:
```
const newList = new LinkedList<number>();
newList.append(3);
```

### traverse() returns IterableIterator
The traverse function is a generator function that returns an Iterable Iterator. See [Javascript Generator Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) for more info.

Usage:
```
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

const listIterator = newList.traverse();

for(const value in listIterator) {
    console.log(value);
}
```

### contains(value: type) returns boolean
The contains function iterates through the list at O(n) time. The first time the function encounters `value` it returns true.

Usage:
```
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.contains(2); // true
newList.contains(5); // false
```

### getSize() returns number
The size function returns the number of nodes in the list.

Usage:
```
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.getSize(); // 2
```

### getHeadValue() returns Type of List
The getHeadValue function first finds the node designated as the head of the List, then returns the value that node contains. This is consistent with the datatype of the list itself.

Usage:
```
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.getHeadValue(); // 1
```

### getTailValue() returns type of List
The getTailValue function first finds the node designated as the tail of the List, then returns the value that node contains. This is consistent with the datatype of the list itself.

Usage:
```
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.getTailValue(); // 2
```