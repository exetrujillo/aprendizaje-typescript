// Leccion_009_Genericos_Basicos.ts

// Imagina que quieres crear una función que devuelva el primer elemento de un array.
// Podrías hacer una función para arrays de números:
function primerNumero(arr: number[]): number | undefined {
  return arr[0];
}

// Y otra para arrays de strings:
function primerString(arr: string[]): string | undefined {
  return arr[0];
}
// Esto es muy repetitivo. Una solución podría ser usar `any`, pero eso es peligroso porque perdemos toda la información de tipos.
// function primerElementoConAny(arr: any[]): any { return arr[0]; }
// const x = primerElementoConAny([1,2,3]); // El tipo de 'x' es 'any', no 'number'.
// Por favor no hagas sufrir al tío Typescript con esto :c tiene una obsesión por los tipos, ¡Hasta se puso ese nombre!

// Los "Genéricos" vienen al rescate. Nos permiten escribir funciones que operan sobre una variedad de tipos de forma segura.
// Creamos "variables de tipo". Por convención, se usa una letra mayúscula como `T` (de Tipo).

// ---------------------------------------------------------------------------------------------------------------------

// Sintaxis de una función genérica:
// 1. Usamos `<T>` después del nombre de la función para declarar nuestra "variable de tipo".
// 2. Usamos `T` en lugar de un tipo específico en los parámetros y en el valor de retorno.

function primerElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

// ¿Cómo funciona la magia?
// Cuando llamas a la función, TypeScript "infiere" qué es `T` basado en el argumento que le pasas.

const primerNumeroReal = primerElemento([10, 20, 30]);
// TypeScript ve que le pasaste un `number[]`, así que `T` se convierte en `number`.
// El tipo de `primerNumeroReal` es `number | undefined`. ¡Perfecto!

const primeraPalabra = primerElemento(["hola", "mundo"]);
// TypeScript ve que le pasaste un `string[]`, así que `T` se convierte en `string`.
// El tipo de `primeraPalabra` es `string | undefined`. ¡Perfecto!

const primerBooleano = primerElemento([]);
// Si no puede inferir, el tipo sigue siendo `undefined`.

// Con una sola función genérica, hemos reemplazado varias funciones específicas manteniendo la seguridad de tipos.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea una función genérica `revertirArray<T>`.

// 1. La función debe ser genérica y usar un marcador de posición de tipo, como `<T>`.
// 2. Debe aceptar un argumento: un array de tipo `T[]`.
// 3. Debe devolver un *nuevo* array de tipo `T[]` con los elementos del array original en orden inverso.
//
// Pista: Para no modificar el array original (lo cual es una buena práctica), puedes crear una copia
// primero usando el spread operator `[...items]` y luego aplicar el método `.reverse()`.
// Puedes usar esto como una ayuda:
// https://cleverzone.medium.com/demystifying-javascript-spread-operat-71924c888a8
// O bien utilizar
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:









// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

// const numeros = [1, 2, 3, 4, 5];
// const numerosRevertidos = revertirArray(numeros);
// console.log(`Original: ${numeros}`);             // Esperado: Original: 1,2,3,4,5
// console.log(`Revertido: ${numerosRevertidos}`); // Esperado: Revertido: 5,4,3,2,1

// const palabras = ["uno", "dos", "tres"];
// const palabrasRevertidas = revertirArray(palabras);
// console.log(`Original: ${palabras}`);             // Esperado: Original: uno,dos,tres
// console.log(`Revertido: ${palabrasRevertidas}`); // Esperado: Revertido: tres,dos,uno

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};