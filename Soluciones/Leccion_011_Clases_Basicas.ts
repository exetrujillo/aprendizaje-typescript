// Leccion_011_Clases_Basicas.ts

// Hasta ahora, hemos usado `interfaces` para describir la *forma* de los objetos.
// Las **Clases** van un paso más allá: son "planos" o "moldes" que no solo definen la forma de un objeto (sus propiedades),
// sino también su **comportamiento** (sus métodos) y cómo se **crean** (su constructor).

// ---------------------------------------------------------------------------------------------------------------------

// ## Anatomía de una Clase

class Vehiculo {
  // 1. Propiedades: Son las variables que pertenecen a la clase. Deben declararse aquí.
  marca: string;
  modelo: string;
  readonly anio: number;

  // 2. Constructor: Es un método especial que se ejecuta CUANDO se crea una nueva instancia de la clase (`new Vehiculo(...)`).
  //    Se usa para inicializar las propiedades. `this` se refiere a la instancia que se está creando.
  constructor(marca: string, modelo: string, anio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  // 3. Métodos: Son funciones que pertenecen a la clase y definen su comportamiento.
  //    Pueden acceder a las propiedades de la instancia usando `this`.
  describir(): string {
    return `Vehículo: ${this.marca} ${this.modelo} del año ${this.anio}.`;
  }
}

// ## Creando una Instancia

// Usamos la palabra clave `new` para crear un nuevo objeto a partir del "molde" de la clase.
const miAuto = new Vehiculo("Toyota", "Corolla", 2021);

// Ahora `miAuto` es un objeto (una "instancia" de Vehiculo) con sus propias propiedades y métodos.
// console.log(miAuto.marca);        // Imprime: Toyota
// console.log(miAuto.describir()); // Imprime: Vehículo: Toyota Corolla del año 2021.

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea una clase para representar un `Rectangulo`.

// 1.  Define una clase llamada `Rectangulo`.
// 2.  La clase debe tener dos propiedades: `ancho` (de tipo `number`) y `alto` (de tipo `number`).
// 3.  Añade un `constructor` que reciba `ancho` y `alto` para inicializar estas propiedades.
// 4.  Añade un método llamado `calcularArea` que no reciba argumentos y devuelva el área del rectángulo (`ancho * alto`).

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:

class Rectangulo {
  // Propiedades
  ancho: number;
  alto: number;

  // Constructor
  constructor(ancho:number, alto: number){
    this.ancho = ancho;
    this.alto  = alto;
  }

  // Métodos
  calcularArea(): number {
    return this.alto*this.ancho;
  }
}


// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

const rectangulo1 = new Rectangulo(10, 5);
console.log(`El área del rectángulo 1 (10x5) es: ${rectangulo1.calcularArea()}`); // Esperado: 50

const rectangulo2 = new Rectangulo(20, 30);
console.log(`El área del rectángulo 2 (20x30) es: ${rectangulo2.calcularArea()}`); // Esperado: 600

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};