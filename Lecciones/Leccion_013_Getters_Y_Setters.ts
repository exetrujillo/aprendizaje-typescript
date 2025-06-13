// Leccion_013_Getters_Y_Setters.ts

// A menudo, queremos controlar el acceso a una propiedad. Por ejemplo, hacerla de solo lectura desde fuera,
// o ejecutar una lógica cada vez que se lee o se escribe su valor.
// Para esto, usamos "Getters" y "Setters".

// ---------------------------------------------------------------------------------------------------------------------

// ## Getters (Obtener)

// Un "getter" te permite ejecutar código cuando se lee una propiedad. Se define con la palabra clave `get`.
// Se usa como una propiedad normal, sin los paréntesis `()`.

// ## Setters (Establecer)

// Un "setter" te permite ejecutar código cuando se intenta asignar un valor a una propiedad. Se define con `set`.
// Se usa como una asignación normal con `=`.

// ---------------------------------------------------------------------------------------------------------------------

// ## Ejemplo: Refactorizando la clase `Empleado`

class Empleado {
  // Es una convención común nombrar la propiedad privada con un guion bajo `_`
  // si va a tener un getter/setter público con el mismo nombre.
  private _nombre: string = "";

  // El GETTER para `nombre`
  get nombre(): string {
    console.log("Se está leyendo el nombre...");
    // Podríamos añadir lógica aquí, como formatear el texto.
    return this._nombre.toUpperCase();
  }

  // El SETTER para `nombre`
  set nombre(nuevoNombre: string) {
    console.log("Se está estableciendo el nombre...");
    // Añadimos una validación: no permitir nombres muy cortos.
    if (nuevoNombre.length > 2) {
      this._nombre = nuevoNombre;
    } else {
      console.error("El nombre es demasiado corto.");
    }
  }
}

const empleado = new Empleado();

// Usando el SETTER (parece una asignación normal)
empleado.nombre = "Mónica";

// Usando el GETTER (parece que leemos una propiedad normal)
console.log(`El nombre del empleado es: ${empleado.nombre}`); // Imprime: El nombre del empleado es: MÓNICA

empleado.nombre = "Al"; // Imprime: El nombre es demasiado corto.
console.log(`El nombre sigue siendo: ${empleado.nombre}`); // Imprime: El nombre sigue siendo: MÓNICA

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea una clase `Temperatura` para manejar conversiones.

// 1.  La clase debe tener una propiedad **privada** llamada `_celsius` de tipo `number`.
// 2.  El `constructor` debe recibir un valor inicial para `_celsius`.
// 3.  Crea un **getter** llamado `celsius` que simplemente devuelva el valor de `_celsius`.
// 4.  Crea un **setter** llamado `celsius` que reciba un nuevo valor y actualice `_celsius`.
// 5.  Crea **otro getter** (¡sin setter!) llamado `fahrenheit`. Este getter debe calcular y devolver la temperatura
//     equivalente en grados Fahrenheit. La propiedad `fahrenheit` será de solo lectura desde fuera.
//
//     **Fórmula:** `Fahrenheit = (Celsius * 9/5) + 32`

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:






// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

// const temp = new Temperatura(25);

// // Usando el getter `celsius`
// console.log(`Temperatura en Celsius: ${temp.celsius}°C`); // Esperado: 25°C

// // Usando el getter `fahrenheit` (propiedad calculada)
// console.log(`Temperatura en Fahrenheit: ${temp.fahrenheit}°F`); // Esperado: 77°F

// // Usando el setter `celsius`
// temp.celsius = 30;
// console.log(`Nueva temperatura en Celsius: ${temp.celsius}°C`); // Esperado: 30°C
// console.log(`Nueva temperatura en Fahrenheit: ${temp.fahrenheit}°F`); // Esperado: 86°F

// // Intentar asignar a fahrenheit debería dar un error, porque no tiene setter.
// // temp.fahrenheit = 100; // ❌ Error: Cannot assign to 'fahrenheit' because it is a read-only property.

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};