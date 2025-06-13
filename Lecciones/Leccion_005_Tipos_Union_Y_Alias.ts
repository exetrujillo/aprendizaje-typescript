// Leccion_005_Tipos_Union_Y_Alias.ts:

// Hasta ahora, hemos dicho que una variable tiene un tipo. Pero, ¿y si una variable pudiera ser de más de un tipo? 
// Para eso existen los tipos unión (Union Types). Se crean usando el símbolo | (pipe).

// Imagina que un ID de usuario puede ser un número (123) o un string ("user-123").

let idUsuario: number | string;

idUsuario = 123;       // ✅ Válido
idUsuario = "user-123"; // ✅ Válido

// idUsuario = true;    // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.

// ---------------------------------------------------------------------------------------------------------------------

// Dentro de una función, puedes usar una comprobación como typeof para saber con qué tipo estás trabajando.

// Alias de Tipos (Type Aliases)
// A veces, un tipo puede volverse largo o lo quieres reutilizar. Puedes darle un nombre con la palabra clave type. A esto se le llama un alias de tipo.

// Creamos un alias para nuestro tipo unión
type IdAlfanumerico = number | string;

// Ahora podemos usar el alias en lugar de repetir "number | string"
let primerId: IdAlfanumerico;
let segundoId: IdAlfanumerico;

function imprimirId(id: IdAlfanumerico) {
  if (typeof id === "string") {
    // TypeScript sabe que 'id' es un string aquí
    console.log(id.toUpperCase());
  } else {
    // Y aquí sabe que es un número
    console.log(id);
  }
}

// ---------------------------------------------------------------------------------------------------------------------

// Los alias son muy útiles para mantener tu código limpio y legible. Puedes usarlos para cualquier tipo, no solo para uniones: type MiString = string;.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno
// Ejercicio: Crea una función llamada recibirEntrada.

// La función debe aceptar un parámetro llamado input que pueda ser de dos tipos: string o boolean.
// La función debe devolver siempre un string.
// La lógica es la siguiente:
// Si el input es un string, la función debe devolver el mismo string pero en mayúsculas.
// Si el input es un boolean, la función debe devolver "Usuario activo" si es true y "Usuario inactivo" si es false.
// Pista: Dentro de la función, typeof input === "string" te ayudará a diferenciar los casos.

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:









// // --- Pruebas ---
// console.log(`Probando con "pendiente": ${recibirEntrada("pendiente")}`);
// console.log(`Probando con true: ${recibirEntrada(true)}`);
// console.log(`Probando con false: ${recibirEntrada(false)}`);

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};