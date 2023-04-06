function createEmptyObjectWithoutPrototype() {
    return Object.create(null);
}

var myObject = createEmptyObjectWithoutPrototype();
console.log(myObject); // {}