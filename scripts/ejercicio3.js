function sumAndProduct(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0); // Suma los elementos
    let product = arr.reduce((acc, num) => acc * num, 1); // Multiplica los elementos
    console.log(`Sum: ${sum}, Product: ${product}`);
}

sumAndProduct([1, 2, 3, 4]); // Output: Sum: 10, Product: 24