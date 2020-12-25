# Typescript Generics Linked List
*Author: Grant Ralls <dev@grantralls.net> https://www.grantralls.net*

## Foreword
I created this package for the value of practice. I wanted my own implementation of a Linked List using Typescript with Generics to use in future home-projects. Consider this a work in progress, not ready for production.

## Compatibility
This is designed to be compatible with ES2017. This works best (at the time of writing) with Node 9, 10, and 11.

## Usage

### Node 10.8.x
    const LinkedList = require("linkedlist").LinkedList;

    const newList = new LinkedList();

### Typescript
    import { LinkedList } from "linkedlist";

    // number can be changed to another type.
    const newList = new LinkedList<number>();