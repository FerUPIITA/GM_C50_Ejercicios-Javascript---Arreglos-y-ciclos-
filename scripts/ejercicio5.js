/* Exercise #5: Manipulación de arrays
Objetivo: Realizar varias operaciones sobre un array de nombres. */


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Imprimir todas las personas
console.log(people);

// 2. Eliminar "Dani"
people.splice(people.indexOf("Dani"), 1);

// 3. Eliminar "Juan"
people.splice(people.indexOf("Juan"), 1);

// 4. Mover "Luis" al frente
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// 5. Agregar tu nombre al final
people.push("TuNombre");

// 6. Iterar y salir después de "Maria"
for (let person of people) {
    console.log(person);
    if (person === "Maria") break;
}

// 7. Obtener el índice de "Maria"
console.log(people.indexOf("Maria"));

// 8. Verificar que hay 4 personas al final
console.log(people); // Output: ["Luis", "Maria", "Camila", "TuNombre"]