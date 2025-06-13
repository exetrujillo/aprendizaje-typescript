// Leccion_002_Tipos_En_Funciones.ts

// Aplicar tipos a las funciones es una de las características más potentes de TypeScript.
// Ayuda a asegurar que las entradas (parámetros) y la salida (retorno) sean las correctas.

// En JavaScript, una función de suma podría causar un error lógico:
// function sumar(a, b) { return a + b; }
// sumar("5", "10"); // Devuelve "510", que no es lo que se esperaba.

// ---------------------------------------------------------------------------------------------------------------------

// En TypeScript, especificamos el tipo de cada parámetro y el tipo del valor que la función devuelve.
// Sintaxis: function nombre(parametro: Tipo): TipoDeRetorno { ... }

function sumar(a: number, b: number): number {
  return a + b;
}

sumar(5, 10); // Devuelve 15. Correcto.
// sumar("5", "10"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea una función llamada `saludar`.
// 1. Debe aceptar un parámetro llamado `nombre` que sea de tipo `string`.
// 2. Debe devolver un `string` que diga `¡Hola, ` seguido del nombre que recibió.
//    (Ej: `saludar("Mundo")` debería devolver `"¡Hola, Mundo!"`).

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:






// ---------------------------------------------------------------------------------------------------------------------
// --- Pruebas ---
// Esta sección te permite ver cómo se comporta la función con diferentes entradas.
// Puedes ejecutar este archivo (por ejemplo, con ts-node) para ver los resultados en la consola.

// console.log("Prueba 1: Nombre común");
// console.log(saludar("Ana")); // Salida esperada: ¡Hola, Ana!
// console.log("---");

// console.log("Prueba 2: Un nombre diferente");
// console.log(saludar("Carlos")); // Salida esperada: ¡Hola, Carlos!
// console.log("---");

// console.log("Prueba 3: String vacío");
// console.log(saludar("")); // Salida esperada: ¡Hola, !
// console.log("---");

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};