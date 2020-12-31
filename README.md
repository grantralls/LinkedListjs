# Typescript Generics Linked List

_Author: Grant Ralls <dev@grantralls.net> https://www.grantralls.net_

## Foreword

I created this package for the value of practice. I wanted my own implementation of a Linked List using Typescript with Generics to use in future home-projects. Consider this a work in progress, not ready for production.

---

## Compatibility

This is designed to be compatible with ES2017. This works best (at the time of writing) with Node 9, 10, and 11.

---

## Example

### Node 10.8.x

```
const LinkedList = require("linkedlist").LinkedList;

const newList = new LinkedList();

newList.append(3);
newList.contains(3); // true
```

### Typescript

```typescript
import { LinkedList } from 'linkedlist';

// number can be changed to another type.
const newList = new LinkedList<number>();

newList.append(4);
newList.contains(4); // true
```

---

## API (Using Typescript)

### append(value: Type) returns void

The append function adds `value` to the end of the list.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(3);
```

### prepend(value: Type) returns void

The prepend function adds `value` to the beginning of the list.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.prepend(3);
```

### copy() returns LinkedList<T>

The copy function deeply copies the list it is being run on.

Usage:

```typescript
const newList = new LinkedList<number>();
const newCopy = newList.copy();
```

### contains(value: type) returns boolean

The contains function searches iteratively for the first instance of `value` in the list.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.contains(2); // true
newList.contains(5); // false
```

### getHeadValue() returns Type of List

The getHeadValue function returns the data of the head (far-left-end) node of the list. The return type is consistent with the type of the List.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.getHeadValue(); // 1
```

### getTailValue() returns type of List

The getTailValue function returns the data of the tail (far-right-end) node of the list. The return type is consistent with the type of the List.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.getTailValue(); // 2
```

### getSize() returns number

The size function returns the number of nodes in the list.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

newList.getSize(); // 2
```

### removeHead() returns void

The removeHead function removes the current head node from the list. The new head is determined as the next node from the previous head.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);
newList.removeHead();

newList.getHeadValue(); // 2
```

### removeTail() returns void

The removeTail function removes the current tail node from the list. The new tail is determined as the previous node from the previous tail.  
_Note: The runtime for this function is O(n). This list is not doubly linked, therefore it needs to be fully iterated over to find the second to last node._

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);
newList.removeTail();

newList.getTailValue(); // 1
```

### removeAtIndex(indexOfNodeToRemove: number) returns void

The removeAtIndex function removes the node at the specified index. The two adjacent nodes are then chained together.
_Note: The runtime for this function is O(n). This list is not doubly linked, therefore it needs to be iterated over to find the node to remove._

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);
newList.append(3);
newList.removeAtIndex(1);

// before removeAtIndex newList: 1 -> 2 -> 3
// after removeAtIndex newList: 1 -> 3

newList.getHeadValue(); // 1
newList.getTailValue(); // 3
newList.getSize(); // 2
```

### getValueAtIndex(indexOfNodeDataToRetrieve: number) returns type of List

The getValueAtIndex function returns the data of the node at the index specified.
_Note: The runtime for this function is O(n). This list is not doubly linked, therefore it needs to be iterated over to find the node to retrieve._

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);
newList.append(3);

const result = newList.getValueAtIndex(1);

console.log(result); // 2
```

### traverse() returns IterableIterator

The traverse function is a generator function that returns an Iterable Iterator. See [Javascript Generator Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) for more info.

Usage:

```typescript
const newList = new LinkedList<number>();
newList.append(1);
newList.append(2);

const listIterator = newList.traverse();

for (const value in listIterator) {
    console.log(value);
}

// Console: 1 2
```
