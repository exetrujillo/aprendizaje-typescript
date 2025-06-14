// Leccion_014_Herencia_Y_Protected.ts

// La herencia permite que una clase (llamada "clase hija" o "subclase") adquiera
// las propiedades y métodos de otra clase (llamada "clase padre" o "superclase").
// Esto fomenta la reutilización de código de una manera muy potente. Se usa la palabra clave `extends`.

// ---------------------------------------------------------------------------------------------------------------------

// ## Ejemplo: Animales

// Definimos una clase base (padre).
class Animal {
  // `protected` es como `private`, pero permite que las clases hijas accedan a la propiedad.
  protected tipoDeSonido: string = "Sonido genérico de animal";

  constructor(public nombre: string) {}

  hacerSonido(): void {
    console.log(this.tipoDeSonido);
  }

  moverse(): void {
    console.log("El animal se mueve.");
  }
}

// La clase `Perro` "hereda" de `Animal`.
// `Perro` automáticamente tiene las propiedades `nombre` y `tipoDeSonido` y los métodos `hacerSonido` y `moverse`.
class Perro extends Animal {
  
  // En el constructor de la clase hija, es OBLIGATORIO llamar a `super()` PRIMERO.
  // `super()` ejecuta el constructor de la clase padre (`Animal`).
  constructor(nombre: string) {
    super(nombre); // Llama al constructor de Animal con el nombre.
    this.tipoDeSonido = "Ladrido"; // Podemos modificar propiedades `protected` de la clase padre.
  }

  // También podemos "sobrescribir" (override) un método para darle un comportamiento específico.
  override hacerSonido(): void {
    console.log("El perro hace: ¡Guau! ¡Guau!");
  }

  // Y podemos añadir métodos que solo existen en la clase hija.
  traerLaPelota(): void {
    console.log(`${this.nombre} está trayendo la pelota.`);
  }
}

const animalGenerico = new Animal("Criatura");
animalGenerico.hacerSonido(); // Imprime: Sonido genérico de animal

const miPerro = new Perro("Fido");
miPerro.hacerSonido();      // Imprime: El perro hace: ¡Guau! ¡Guau! (Usa el método sobrescrito)
miPerro.moverse();          // Imprime: El animal se mueve. (Usa el método heredado de Animal)
miPerro.traerLaPelota();  // Imprime: Fido está trayendo la pelota. (Usa su propio método)

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea un sistema de figuras geométricas usando herencia.

// 1.  **Crea una clase base** llamada `Figura` con:
//     - Una propiedad `protected` llamada `color` de tipo `string`.
//     - Un `constructor` que reciba el `color` y lo inicialice.
//     - Un método `describir()` que devuelva un string como: "Esta es una figura de color [color]".

// 2.  **Crea una clase hija** llamada `Circulo` que `extienda` de `Figura`.
//     - Debe tener una propiedad `public readonly` llamada `radio` de tipo `number`.
//     - Su `constructor` debe recibir tanto el `color` como el `radio`. Recuerda llamar a `super()`.
//     - **Sobrescribe** el método `describir()` para que devuelva: "Este es un círculo de color [color] y radio [radio]".
//     - Añade un **nuevo método** `calcularArea()` que devuelva el área del círculo (usa `Math.PI * this.radio * this.radio`).

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:






// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

// const figuraGenerica = new Figura("azul");
// console.log(figuraGenerica.describir()); // Esperado: "Esta es una figura de color azul"

// const miCirculo = new Circulo("rojo", 10);
// console.log(miCirculo.describir());     // Esperado: "Este es un círculo de color rojo y radio 10"
// // console.log(`El color del círculo es: ${miCirculo.color}`); // ❌ Esto debería dar un error, `color` es protected.
// console.log(`El radio del círculo es: ${miCirculo.radio}`);     // Esperado: 10
// console.log(`El área del círculo es: ${miCirculo.calcularArea()}`); // Esperado: 314.159...

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};