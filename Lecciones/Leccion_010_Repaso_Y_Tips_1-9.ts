// Leccion_010_Repaso_Y_Tips_1-9.ts

// ¡Felicidades por llegar a la lección 10! Es el momento perfecto para hacer una pausa,
// revisar conceptos y añadir algunos trucos profesionales a lo que ya sabes.

// ---------------------------------------------------------------------------------------------------------------------

// ## Tip 1: `interface` vs `type` - ¿Cuándo usar cuál?

// Ya conoces `interface` (Lección 4) y `type` (Lección 5). A menudo son intercambiables, pero hay una diferencia clave:
// - **`interface`**: Es "abierta". Se puede "fusionar". Si declaras la misma interfaz dos veces, sus propiedades se combinan.
//   Es ideal para definir la "forma" de objetos o clases.
// - **`type`**: Es "cerrado". Una vez que lo defines, no se puede modificar. Es más versátil y puede representar
//   tipos unión (`string | number`), tuplas, y tipos más complejos.

// **Regla general:** Usa `interface` para definir la estructura de objetos. Usa `type` para todo lo demás (uniones, tuplas, etc.).

// ---------------------------------------------------------------------------------------------------------------------

// ## Tip 2: Propiedades de solo lectura (`readonly`)

// A veces quieres asegurarte de que una propiedad de un objeto no pueda ser modificada después de su creación.

interface Punto {
  readonly x: number;
  readonly y: number;
}

const miPunto: Punto = { x: 10, y: 20 };
// miPunto.x = 30; // ❌ Error: Cannot assign to 'x' because it is a read-only property.

// Esto es muy útil para mantener tus datos inmutables y evitar cambios accidentales.

// ---------------------------------------------------------------------------------------------------------------------

// ## Tip 3: `const` vs `enum` - El caso de los `const enums`

// En la Lección 7 vimos los `enum`. Son geniales, pero generan código JavaScript extra.
// Si quieres la seguridad de un enum pero sin el "costo" en el JavaScript final, puedes usar un `const enum`.

const enum DireccionConst {
  Arriba,
  Abajo,
}
let miDir = DireccionConst.Arriba; // En el JS final, esto se reemplaza directamente por el valor `0`. No existe el objeto `DireccionConst`.

// **Cuándo usarlo:** Cuando priorizas el rendimiento y estás seguro de que no necesitarás el objeto del enum en tiempo de ejecución.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno: Ejercicio Integrado

// Ejercicio: Vas a crear un sistema para gestionar órdenes de compra. ¡Aquí combinarás todo!

// 1.  **Crea un `enum`** llamado `EstadoOrden` para los estados de una orden. Debe tener los valores: 
// `Pendiente`, `EnProceso`, `Enviado`, `Entregado`, `Cancelado`. (Usa un enum de string, es más legible).

// 2.  **Crea una `interface`** llamada `Producto` con las siguientes propiedades:
//     - `id`: `number`
//     - `nombre`: `string`
//     - `precio`: `number`

// 3.  **Crea una `interface`** principal llamada `OrdenDeCompra`. Debe tener:
//     - `id`: una propiedad **de solo lectura** (`readonly`) de tipo `string`.
//     - `fecha`: `Date` (¡un nuevo tipo que no hemos usado! Se crea con `new Date()`).
//     - `estado`: `EstadoOrden` (el enum que creaste).
//     - `cliente`: `string`.
//     - `productos`: un array de `Producto[]`.
//     - `direccion`: una **tupla** `[string, number, string]` que represente `[calle, numero, ciudad]`.

// 4.  **Crea una función** llamada `resumenDeOrden`.
//     - Debe recibir un objeto de tipo `OrdenDeCompra`.
//     - Debe devolver un `string` con un resumen formateado de la orden.
//     - El resumen debe incluir el ID de la orden, el estado, el nombre del cliente y el **costo total** de la orden (la suma de los precios de todos los productos).

// Salida ejemplo: "Resumen Orden ORD-076: Cliente Domingo Iglesias | Estado: Cancelado | Total: $1290000"
// Para la suma de precios puedes usar un bucle for o guiarte con el método .reduce():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:













// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

// const orden1: OrdenDeCompra = {
//   id: "ORD-001",
//   fecha: new Date("2025-06-13"),
//   estado: EstadoOrden.Enviado,
//   cliente: "Juan Pérez",
//   productos: [
//     { id: 101, nombre: "Teclado Gamer", precio: 55000 },
//     { id: 102, nombre: "Mouse Vertical", precio: 35000 }
//   ],
//   direccion: ["Av. Siempre Viva", 742, "Springfield"]
// };

// const orden2: OrdenDeCompra = {
//   id: "ORD-002",
//   fecha: new Date("2025-06-12"),
//   estado: EstadoOrden.Entregado,
//   cliente: "Ana García",
//   productos: [
//     { id: 201, nombre: "Monitor Curvo 27\"", precio: 250000 }
//   ],
//   direccion: ["Calle Falsa", 123, "Santiago"]
// };

// console.log(resumenDeOrden(orden1));
// // Salida esperada: "Resumen Orden ORD-001: Cliente Juan Pérez | Estado: Enviado | Total: $90000"
// console.log(resumenDeOrden(orden2));
// // Salida esperada: "Resumen Orden ORD-002: Cliente Ana García | Estado: Entregado | Total: $250000"

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};