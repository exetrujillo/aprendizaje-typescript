// Leccion_008_Null_Undefined_Y_Strict_Null_Checks.ts

// Uno de los errores más famosos en la historia de la programación es el "error de referencia nula".
// En JavaScript, esto pasa cuando intentas usar una propiedad o método de algo que es `null` o `undefined`.
// Ejemplo: const nombre = null; console.log(nombre.toUpperCase()); // 💣 ¡Crash! "Cannot read properties of null"

// TypeScript ataca este problema de raíz con una opción en `tsconfig.json` llamada `strictNullChecks`.
// (Nosotros ya la tenemos activada porque pusimos `"strict": true`).

// ---------------------------------------------------------------------------------------------------------------------

// Con `strictNullChecks` activado:
// Por defecto, a una variable de un tipo como `string` NO se le puede asignar `null` o `undefined`.

let miNombre: string = "Exequiel";
// miNombre = null; // ❌ Error: Type 'null' is not assignable to type 'string'.

// Si quieres que una variable PUEDA ser `null` o `string`, debes declararlo explícitamente con un tipo unión.
let nombreOpcional: string | null = "Ana";
nombreOpcional = null; // ✅ ¡Correcto! Ahora sí está permitido.

// ---------------------------------------------------------------------------------------------------------------------

// ¿Cómo trabajamos con valores que pueden ser nulos de forma segura?
// Con el "Encadenamiento Opcional" (Optional Chaining): `?.`

// El `?.` es como un `.` normal, pero si el valor a la izquierda es `null` o `undefined`,
// la expresión se detiene y devuelve `undefined` en lugar de explotar.

interface Pasajero {
  nombre: string;
  reserva?: { // La reserva es opcional, puede no existir (ser undefined)
    id: number;
    asiento: string | null; // El asiento puede no estar asignado (ser null)
  }
}

const pasajero1: Pasajero = { nombre: "Carlos" };
const pasajero2: Pasajero = { nombre: "Diana", reserva: { id: 123, asiento: null } };
const pasajero3: Pasajero = { nombre: "Eva", reserva: { id: 456, asiento: "14A" } };

// Intentemos obtener el asiento de cada uno de forma segura:
const asiento1 = pasajero1.reserva?.asiento; // pasajero1.reserva es undefined. La cadena se detiene. asiento1 es undefined.
const asiento2 = pasajero2.reserva?.asiento; // pasajero2.reserva existe, pero .asiento es null. asiento2 es null.
const asiento3 = pasajero3.reserva?.asiento; // Todo existe. asiento3 es "14A".

// Sin `?.`, la línea para `pasajero1` habría crasheado el programa.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Vas a buscar un usuario en una base de datos simulada.

// 1. Define una `interface` llamada `Usuario` con dos propiedades: `id` (number) y `nombre` (string).
// 2. Crea un array de `Usuario` con 3 o 4 usuarios de ejemplo.
// 3. Crea una función `encontrarUsuarioPorId(id: number)`.
//    - El tipo de retorno de esta función debe ser `Usuario | undefined`, porque el usuario podría no existir.
//    - Dentro de la función, usa el método `find()` de los arrays para buscar un usuario con el `id` proporcionado.
//    - `array.find()` es perfecto para esto, ya que devuelve el elemento si lo encuentra, o `undefined` si no.
// Puedes apoyarte en esta documentación
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:










// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

// const usuarios: Usuario[] = [
//   { id: 1, nombre: "Elena" },
//   { id: 2, nombre: "Javier" },
//   { id: 3, nombre: "Marta" }
// ];

// const usuarioEncontrado = encontrarUsuarioPorId(2);
// const usuarioNoEncontrado = encontrarUsuarioPorId(99);

// // Usamos ?. para acceder al nombre de forma segura.
// console.log(`Usuario encontrado: ${usuarioEncontrado?.nombre}`);       // Esperado: Usuario encontrado: Javier
// console.log(`Usuario no encontrado: ${usuarioNoEncontrado?.nombre}`); // Esperado: Usuario no encontrado: undefined

// Si quieres agrega también tus propias pruebas con el array que creaste para el ejercicio ;)

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};