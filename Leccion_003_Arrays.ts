// Leccion_003_Arrays.ts

// Para declarar un array que solo puede contener elementos de un tipo específico,
// usamos la sintaxis: Tipo[]

// Esto asegura que todos los elementos del array cumplan con el tipo definido.

// ---------------------------------------------------------------------------------------------------------------------

// Declaración de un array de números.
let numeros: number[] = [1, 5, 10, 20];

// TypeScript nos detendrá si intentamos añadir un elemento del tipo incorrecto.
numeros.push(25); // ✅ Correcto
// numeros.push("treinta"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// También funciona para otros tipos.
let nombres: string[] = ["Carlos", "Luisa", "Marta"];
let respuestas: boolean[] = [true, false, true];

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio:
// 1. Declara una variable llamada `calificaciones` que solo pueda contener un array de `numbers`.
// 2. Luego, escribe una función llamada `calcularPromedio` que:
//    - Acepte un parámetro (llamémoslo `notas`) que sea un array de números (`number[]`).
//    - Devuelva el promedio de esas notas como un `number`.
//
// Pista: Para calcular el promedio, necesitas sumar todos los elementos del array
// y luego dividir por la cantidad de elementos que tiene (`array.length`).
// Puedes usar un bucle for o guiarte con el método .reduce():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:






  
// ---------------------------------------------------------------------------------------------------------------------
// --- Pruebas ---

// const calificaciones1 = [10, 8, 9, 7];
// console.log(`El promedio de [${calificaciones1}] es: ${calcularPromedio(calificaciones1)}`); // Salida esperada: 8.5

// const calificaciones2 = [5, 5, 5, 5];
// console.log(`El promedio de [${calificaciones2}] es: ${calcularPromedio(calificaciones2)}`); // Salida esperada: 5

// const calificacionesVacias: number[] = [];
// console.log(`El promedio de un array vacío es: ${calcularPromedio(calificacionesVacias)}`); // Salida esperada: 0

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};