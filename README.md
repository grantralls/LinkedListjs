# Typescript Generics Linked List
*Author: Grant Ralls <dev@grantralls.net> https://www.grantralls.net*

## Foreword
I created this package for the value of practice. I wanted my own implementation of a Linked List using Typescript with Generics to use in future home-projects. Consider this a work in progress, not ready for production.

## Compatibility
This is designed to be 100% compatible with ES5. At this time, Node 10.8 the earliest.

## Usage

### Node 10.8.x
    const LinkedList = require("linkedlist").LinkedList;

    const newList = new LinkedList();

### Typescript
    import { LinkedList } from "linkedlist";

    const newList = new LinkedList<number>();