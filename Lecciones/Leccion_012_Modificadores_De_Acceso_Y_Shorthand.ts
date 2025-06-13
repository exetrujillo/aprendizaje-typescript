// Leccion_012_Modificadores_De_Acceso_Y_Shorthand.ts

// Tu clase `Rectangulo` está perfecta. Pero, ¿notaste que repetimos `ancho` y `alto` tres veces?
// 1. En la declaración de la propiedad.
// 2. Como parámetro en el constructor.
// 3. En la asignación `this.propiedad = propiedad`.
// TypeScript tiene un atajo para esto.

// ---------------------------------------------------------------------------------------------------------------------

// ## Modificadores de Acceso y el Atajo del Constructor (Shorthand)

// Los "Modificadores de Acceso" (`public`, `private`, `protected`) controlan desde dónde se puede acceder a una propiedad o método.
// - `public`: (El valor por defecto) Se puede acceder desde cualquier lugar.
// - `private`: Solo se puede acceder desde DENTRO de la misma clase. Ni siquiera las clases hijas pueden verlo.
// - `protected`: Solo se puede acceder desde DENTRO de la misma clase y desde clases que HEREDEN de ella.

// El truco es que si usas un modificador de acceso en un parámetro del constructor,
// TypeScript AUTOMÁTICAMENTE hará los 3 pasos por ti: declara la propiedad y la inicializa.

// La clase `Vehiculo` de la lección anterior, reescrita con el atajo:
class VehiculoShorthand {
  // ¡No necesitamos declarar `marca` y `modelo` aquí arriba!
  // Al poner `public` en el constructor, TypeScript lo hace por nosotros.
  // `anio` sigue siendo `readonly` y `public`.
  constructor(
    public marca: string,
    public modelo: string,
    public readonly anio: number
  ) {
    // El cuerpo del constructor puede quedar vacío si solo inicializamos.
  }

  describir(): string {
    // El acceso con `this` funciona igual.
    return `Vehículo: ${this.marca} ${this.modelo} del año ${this.anio}.`;
  }
}

const miOtroAuto = new VehiculoShorthand("Ford", "Mustang", 2024);
console.log(miOtroAuto.marca); // "Ford" - funciona porque `marca` es `public`.

// ---------------------------------------------------------------------------------------------------------------------

// ## Encapsulamiento con `private`

// El verdadero poder de esto es el `private`. Nos permite "encapsular" o "proteger" la lógica interna de la clase.

class CuentaBancaria {
  // El saldo es privado. Nadie desde fuera puede verlo o modificarlo directamente.
  private saldo: number = 0;

  constructor(public titular: string) {}

  // Creamos métodos públicos para interactuar con el saldo de forma controlada.
  depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Depósito de $${monto} exitoso. Nuevo saldo: $${this.saldo}`);
    }
  }

  retirar(monto: number): void {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      console.log(`Retiro de $${monto} exitoso. Nuevo saldo: $${this.saldo}`);
    } else {
      console.log("Fondos insuficientes o monto inválido.");
    }
  }
  
  // Un método público para consultar el saldo de forma segura.
  consultarSaldo(): number {
    return this.saldo;
  }
}

const miCuenta = new CuentaBancaria("Exequiel Trujillo");
// miCuenta.saldo = 1000000; // ❌ Error: Property 'saldo' is private and only accessible within class 'CuentaBancaria'.

miCuenta.depositar(50000);
miCuenta.retirar(10000);
console.log(`Saldo final consultado: $${miCuenta.consultarSaldo()}`);


// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea una clase `Cafetera`.

// 1.  Usa el "atajo del constructor" para las propiedades.
// 2.  Debe tener una propiedad `capacidadMaxima` (number), que sea pública y de solo lectura (`readonly`).
// 3.  Debe tener una propiedad `cantidadActual` (number), que sea **privada**.
// 4.  El `constructor` debe recibir la `capacidadMaxima` e inicializar `cantidadActual` en `0`.
// 5.  Crea un método público `servirCafe(cantidad: number)` que reste del `cantidadActual`. No puede servir más café del que hay.
// 6.  Crea un método público `llenar()` que restablezca la `cantidadActual` a la `capacidadMaxima`.
// 7.  Crea un método público `getCantidadActual()` que devuelva el valor de la propiedad privada `cantidadActual`.

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:






// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

// const miCafetera = new Cafetera(1000); // Cafetera con 1000 ml de capacidad.
// console.log(`Capacidad máxima: ${miCafetera.capacidadMaxima}`);
// console.log(`Cantidad actual: ${miCafetera.getCantidadActual()}`); // Esperado: 0

// miCafetera.llenar();
// console.log(`Cantidad después de llenar: ${miCafetera.getCantidadActual()}`); // Esperado: 1000

// miCafetera.servirCafe(150);
// console.log(`Cantidad después de servir: ${miCafetera.getCantidadActual()}`); // Esperado: 850

// miCafetera.servirCafe(900); // Intenta servir más de lo que hay.
// console.log(`Cantidad final: ${miCafetera.getCantidadActual()}`); // Esperado: 850 (no debió cambiar)

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};