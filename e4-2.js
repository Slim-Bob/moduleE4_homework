function checkPropertyExists(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}

var myObj = { name: "John", age: 30, city: "New York" };

console.log(checkPropertyExists("age", myObj));
console.log(checkPropertyExists("Name", myObj));
console.log(checkPropertyExists("name", myObj)); 