/* Exercise #6: Algoritmo de burbuja (Opcional)
Objetivo: Implementar el algoritmo de burbuja para ordenar un array de números.
 */


function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 6, 12, 5, 100, 1])); // Output: [1, 3, 5, 6, 12, 100]

document.write("<p>Ejercicio 6: " + bubbleSort([3, 6, 12, 5, 100, 1]) + "</p>");
