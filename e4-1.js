function printOwnProperties(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

printOwnProperties({ '1': 5 })