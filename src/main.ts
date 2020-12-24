import LinkedList from "./LinkedList";

const dummyList = new LinkedList<number>();

dummyList.append(1);
dummyList.append(2);
dummyList.append(3);
dummyList.append(4);

const iterator = dummyList.iterator();

for(const value of iterator) {
    console.log(value);
}
