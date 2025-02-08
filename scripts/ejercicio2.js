function doubleArrayValues(arr) {
    let doubledArray = arr.map(num => num * 2); // Duplica cada número
    console.log(doubledArray);
    document.write("<p>Ejercicio 2: " + doubledArray + "</p>");

}

doubleArrayValues([1, 2, 4, 5]); // Output: [2, 4, 8, 10]
