// Leccion_004_Objetos_E_Interfaces.ts

// Para definir la "forma" o "contrato" que debe seguir un objeto, usamos una `interface`.
// Una `interface` asegura que un objeto tenga las propiedades que esperamos y con los tipos correctos.

// ---------------------------------------------------------------------------------------------------------------------

// Definimos un contrato para cualquier objeto que sea un "Usuario".
interface Usuario {
  id: number;
  nombre: string;
  estaActivo: boolean;
}

// Ahora podemos usar esta interface como un tipo.
let miUsuario: Usuario;

// Este objeto CUMPLE con el contrato, por lo que es válido.
miUsuario = {
  id: 1,
  nombre: "Esteban",
  estaActivo: true
}; // ✅ Correcto

// Este objeto NO CUMPLE, y TypeScript nos avisará del error.
// let usuarioIncorrecto: Usuario = {
//   id: 2,
//   nombre: "Rocío"
//   // ❌ Error: Property 'estaActivo' is missing in type '{ id: number; nombre: string; }' but required in type 'Usuario'.
// };

// Las interfaces son muy útiles para asegurar que los datos de una API tengan la estructura correcta.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio:
// 1. Define una `interface` llamada `Producto`.
// 2. Esta interfaz debe tener las siguientes propiedades con sus respectivos tipos:
//    - `id` (de tipo `number`)
//    - `nombre` (de tipo `string`)
//    - `precio` (de tipo `number`)
// 3. Luego, crea una función llamada `mostrarInformacionProducto` que reciba un solo parámetro
//    de tipo `Producto` y devuelva un `string` con la información formateada.
//    (Ej: "Producto: Teclado Mecánico (ID: 101), Precio: $95000").

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:








// ---------------------------------------------------------------------------------------------------------------------
// --- Pruebas ---

// const producto1: Producto = {
//   id: 101,
//   nombre: 'Teclado Mecánico',
//   precio: 95000,
// };

// const producto2: Producto = {
//   id: 202,
//   nombre: 'Mouse Gamer',
//   precio: 45000,
// };

// const productoGratis: Producto = {
//   id: 303,
//   nombre: 'Sticker de Logo',
//   precio: 0,
// };

// console.log(mostrarInformacionProducto(producto1));
// console.log(mostrarInformacionProducto(producto2));
// console.log(mostrarInformacionProducto(productoGratis));

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};