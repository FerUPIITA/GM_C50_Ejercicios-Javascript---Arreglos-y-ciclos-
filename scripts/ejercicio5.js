/* Exercise #5: Manipulación de arrays
Objetivo: Realizar varias operaciones sobre un array de nombres. */


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Imprimir todas las personas
console.log(people);
document.write("<p>Ejercicio 5.1: " + people + "</p>");


// 2. Eliminar "Dani"
people.splice(people.indexOf("Dani"), 1);
console.log(people);
document.write("<p>Ejercicio 5.2: Cadena sin Dani: " + people + "</p>");


// 3. Eliminar "Juan"
people.splice(people.indexOf("Juan"), 1);
document.write("<p>Ejercicio 5.3: Cadena sin Juan: " + people + "</p>");


// 4. Mover "Luis" al frente
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
document.write("<p>Ejercicio 5.4: Moviendo a luis al frente: " + people + "</p>");


// 5. Agregar mi nombre al final
people.push("Fernando");
document.write("<p>Ejercicio 5.5: Agregando mi nombre: " + people + "</p>");


// 6. Iterar y salir después de "Maria"
for (let person of people) {
    console.log(person);

    if (person === "Maria") break;
    document.write("<p>Ejercicio 5.6: " + person + " _ ,_ , _ | Por Maria ahora los demas no entran" + "</p>");

}

// 7. Obtener el índice de "Maria"
console.log(people.indexOf("Maria"));
document.write("<p>Ejercicio 5.7: El indice de Maria es: " + people.indexOf("Maria") + "  ---->>TENIENDO EN CUENTA QUE EL INDEX EMPIEZA EN 0" + "</p>");

// 8. Verificar que hay 4 personas al final
console.log(people); // Output: ["Luis", "Maria", "Camila", "fERNANDO"]
document.write("<p>Ejercicio 5.8: Al final terminamos con: " + people + "</p>");
