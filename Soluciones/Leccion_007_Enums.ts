// Leccion_007_Enums.ts

// A veces, tienes un pequeño conjunto de valores que están relacionados entre sí.
// Por ejemplo, los estados de un pedido: "Pendiente", "Enviado", "Entregado", "Cancelado".
// Los enums (enumeraciones) te permiten definir un conjunto de constantes con nombre.

// ---------------------------------------------------------------------------------------------------------------------

// Enums Numéricos
// Por defecto, los enums asignan un número a cada miembro, comenzando por 0.

enum Direccion {
  Arriba,    // 0
  Abajo,     // 1
  Izquierda, // 2
  Derecha    // 3
}

let miDireccion: Direccion = Direccion.Izquierda;
console.log(miDireccion); // Imprimirá: 2

// ---------------------------------------------------------------------------------------------------------------------

// Enums de String
// Asignar números puede ser frágil. Si alguien reordena los miembros, los números cambian.
// Es mucho más seguro y legible asignar strings explícitamente. ¡Esta es la forma recomendada!

enum EstadoPedido {
  Pendiente = "PENDIENTE",
  Enviado = "ENVIADO",
  Entregado = "ENTREGADO",
  Cancelado = "CANCELADO"
}

let miPedido: EstadoPedido = EstadoPedido.Enviado;
console.log(miPedido); // Imprimirá: "ENVIADO"

function procesarPedido(estado: EstadoPedido) {
  if (estado === EstadoPedido.Pendiente) {
    console.log("El pedido aún está pendiente de envío.");
  } else if (estado === EstadoPedido.Enviado) {
    console.log("¡El pedido ya va en camino!");
  }
}

procesarPedido(EstadoPedido.Pendiente);

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Vas a gestionar los roles de usuario de una aplicación.

// 1. Crea un **enum de string** llamado `RolUsuario`.
// 2. Debe tener tres miembros:
//    - `Admin` con el valor "ADMIN"
//    - `Editor` con el valor "EDITOR"
//    - `Lector` con el valor "LECTOR"
// 3. Crea una función llamada `puedeEditarContenido` que reciba un parámetro de tipo `RolUsuario`.
// 4. La función debe devolver un `boolean`: `true` si el rol es `Admin` o `Editor`, y `false` en cualquier otro caso.

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:
enum RolUsuario{
  Admin = "ADMIN",
  Editor = "EDITOR",
  Lector = "LECTOR"
}

function puedeEditarContenido(rol: RolUsuario): boolean {
  if (rol === RolUsuario.Admin || rol === RolUsuario.Editor){
    return true;
  } else {
    return false;
  }
}

// Una versión más corta que hace lo mismo:
// function puedeEditarContenidoConciso(rol: RolUsuario): boolean {
//   return rol === RolUsuario.Admin || rol === RolUsuario.Editor;
// }

// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

console.log("--- Pruebas ---\n")
console.log(`¿Puede un Admin editar? ${puedeEditarContenido(RolUsuario.Admin)}`);       // Esperado: true
console.log(`¿Puede un Editor editar? ${puedeEditarContenido(RolUsuario.Editor)}`);     // Esperado: true
console.log(`¿Puede un Lector editar? ${puedeEditarContenido(RolUsuario.Lector)}`);     // Esperado: false

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};