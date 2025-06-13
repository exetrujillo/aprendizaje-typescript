// Leccion_006_Tuplas.ts

// Ya conoces los arrays (string[], number[]), que pueden tener cualquier cantidad de elementos del mismo tipo.
// Ahora, ¿qué pasa si necesitas un array que tenga una longitud fija y donde el tipo de cada elemento esté definido por su posición?
// Para eso existen las Tuplas (Tuples). Una tupla es como un array super estricto.

// ---------------------------------------------------------------------------------------------------------------------

// Ejemplo: Queremos representar un usuario con su ID (número) y su nombre (string).

// Con un array normal, no podemos garantizar el orden ni la cantidad de forma estricta.
let usuarioArray: (string | number)[] = [1, "Carlos"];
let otroUsuarioArray: (string | number)[] = ["Ana", 2, "Dato Extra"]; // Válido, pero no es lo que queremos.

// Con una Tupla, definimos un contrato estricto.
// La sintaxis es [Tipo1, Tipo2, TipoN]
type UsuarioTupla = [number, string];

// Ahora, una variable de este tipo DEBE tener exactamente 2 elementos:
// el primero un 'number' y el segundo un 'string'.
let usuario: UsuarioTupla;
usuario = [101, "Diana"]; // ✅ Correcto

// TypeScript nos dará error si no cumplimos el contrato.
// usuario = ["Eva", 102];    // ❌ Error: Type 'string' is not assignable to type 'number'.
// usuario = [103, "Franco", 30]; // ❌ Error: Source has 3 element(s) but target allows only 2.

// ---------------------------------------------------------------------------------------------------------------------

// Las tuplas son muy útiles para datos donde el orden y la cantidad importan,
// como coordenadas [x, y], pares clave-valor [key, value], o al devolver múltiples valores desde una función.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Vamos a modelar los datos de un libro.

// 1. Usando un alias de tipo (`type`), crea una tupla llamada `LibroInfo`.
// 2. La tupla debe representar un libro y contener la siguiente información en este orden exacto:
//    - Un `string` para el título.
//    - Un `string` para el autor.
//    - Un `number` para el año de publicación.
// 3. Luego, crea una función llamada `describirLibro` que reciba un parámetro de tipo `LibroInfo`
//    y devuelva un string con la descripción.
//    Ejemplo de salida: "El libro 'Dune' fue escrito por Frank Herbert en 1965.".

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:

type LibroInfo = [string, string, number];

function describirLibro(libro:LibroInfo): string{
    return `El libro '${libro[0]}' fue escrito por ${libro[1]} en ${libro[2]}`;
}

// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

const libro1: LibroInfo = ["Dune", "Frank Herbert", 1965];
const libro2: LibroInfo = ["Cien años de soledad", "Gabriel García Márquez", 1967];

console.log(describirLibro(libro1));
console.log(describirLibro(libro2));

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente".
export {};