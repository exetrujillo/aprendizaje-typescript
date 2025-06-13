// Leccion_001_Introduccion_Y_Tipos_Basicos.ts

// TypeScript es un superconjunto de JavaScript. Su principal ventaja es que añade "tipos estáticos".
// En JavaScript, el tipo de una variable es dinámico y puede cambiar:
// let miVariable = "Hola";
// miVariable = 5; // Esto es válido en JavaScript.

// En TypeScript, declaramos el tipo de una variable para que no pueda cambiar,
// lo que nos ayuda a encontrar errores antes de ejecutar el código.

// ---------------------------------------------------------------------------------------------------------------------

// Sintaxis: let nombreVariable: tipo = valor;

let saludo: string = "Hola Mundo";
let numero: number = 10;
let esValido: boolean = true;

// Si intentamos asignar un valor de un tipo incorrecto, TypeScript mostrará un error.
// saludo = 5; // ❌ Error: Type 'number' is not assignable to type 'string'.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Declara tres variables:
// 1. Una llamada `nombre` que solo pueda contener `strings`.
// 2. Una llamada `edad` que solo pueda contener `numbers`.
// 3. Una llamada `esEstudiante` que solo pueda contener un valor `boolean`.

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:





// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};