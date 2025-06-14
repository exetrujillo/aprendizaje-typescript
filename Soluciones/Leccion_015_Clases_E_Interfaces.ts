// Leccion_015_Clases_E_Interfaces.ts

// La Diferencia Clave: `extends` vs. `implements`
// 
// Tanto `extends` como `implements` nos ayudan a crear relaciones entre nuestras clases, 
// pero lo hacen con propósitos muy diferentes. Entender cuándo usar cada una es clave 
// para un buen diseño de software.
// 
// `extends` se trata de "QUIÉN ERES" (Herencia)
// 
// Cuando una clase `Hija` extiende a una clase `Padre`, estamos estableciendo una 
// relación de identidad. Decimos que la "Hija ES UN TIPO DE Padre".
// 
// - Propósito: Reutilizar código y establecer una jerarquía.
// - ¿Qué recibe? La clase hija hereda toda la implementación (el código que ya funciona) 
//   de la clase padre: sus propiedades (estado) y sus métodos (comportamiento). 
//   Puede usar este código directamente, modificarlo (sobrescribirlo) o añadirle cosas nuevas.
// - Limitación: Una clase solo puede extender de **una única** clase padre. 
//   En TypeScript, no existe la herencia múltiple de clases 
//   (un hijo no puede tener dos padres biológicos).
// - Analogía (Familia): Piensa en `Perro extends Animal`. Un `Perro` ES UN `Animal`. 
//   Hereda el "ADN" de `Animal` (como tener un nombre o el método `moverse()`), 
//   pero tiene sus propias características (el método `ladrar()`).
// 
// `implements` se trata de "QUÉ SABES HACER" (Contratos)
// 
//  Cuando una clase implementa una `interface`, estamos garantizando que esa clase
//  tiene ciertas capacidades o roles. Decimos que "la Clase CUMPLE EL CONTRATO DE la Interfaz".
// 
// - Propósito: Definir un contrato o estándar que diferentes clases pueden cumplir,
//   sin importar su jerarquía.
// - ¿Qué recibe? La clase no recibe ningún código. Recibe una "lista de tareas"
//   o un "checklist". La interfaz le dice: "Debes tener estas propiedades y estos métodos".
//   La clase tiene la obligación de escribir la implementación (el código) para cada uno de ellos.
// - Flexibilidad: Una clase puede implementar múltiples interfaces. Esto permite que
//   una sola clase tenga varios roles o capacidades distintas.
// - Analogía (Certificaciones): Piensa en `class Humano implements Piloto, Chef`.
//   Una persona no "hereda" de un `Piloto`. Más bien, para obtener la "certificación"
//   de `Piloto`, debe demostrar que tiene las capacidades requeridas
//   (el método `volarAvion()`). Esa misma persona puede también obtener la certificación
//   de `Chef` si demuestra que tiene el método `cocinarPlatillo()`.
// 
// ¿Pueden usarse Juntas?
// 
// ¡Sí! Y es muy común. Una clase puede heredar la funcionalidad base de una clase padre y,
// al mismo tiempo, prometer que cumplirá con uno o más contratos de interfaces.
//
// ---------------------------------------------------------------------------------------------------------------------

// Ejemplo Práctico: Dispositivos Conectables

// Definimos un "contrato". Cualquier cosa que sea Conectable DEBE tener estos métodos y propiedades.
interface Conectable {
  puerto: string;
  
  conectar(): void;
  desconectar(): void;
}

// Esta clase PROMOTE que cumplirá el contrato de `Conectable`.
class Teclado implements Conectable {
  // TypeScript nos OBLIGA a definir las propiedades y métodos de la interfaz.
  puerto: string = "USB";

  conectar(): void {
    console.log("Teclado conectado al puerto USB.");
  }

  desconectar(): void {
    console.log("Teclado desconectado.");
  }
}

class Monitor implements Conectable {
  puerto: string = "HDMI";
  
  constructor(public resolucion: string) {}

  conectar(): void {
    console.log(`Monitor conectado al puerto HDMI. Resolución: ${this.resolucion}`);
  }

  desconectar(): void {
    console.log("Monitor desconectado.");
  }
}

// const miTeclado = new Teclado();
// miTeclado.conectar();

// const miMonitor = new Monitor("1920x1080");
// miMonitor.conectar();

// ---------------------------------------------------------------------------------------------------------------------

// Tu Turno

// Ejercicio: Crea un sistema de notificaciones.

// 1.  **Crea una `interface`** llamada `Notificable`. Debe definir el siguiente "contrato":
//     - Un método `enviar(mensaje: string): boolean;` (devuelve `true` si se envió con éxito).
//     - Un método `getDestinatario(): string;`

// 2.  **Crea una clase** llamada `NotificacionEmail` que `implements Notificable`.
//     - Debe tener una propiedad `private` para el `destinatario` (un email, de tipo `string`).
//     - Usa el atajo del constructor para inicializar el `destinatario`.
//     - **Implementa** el método `enviar`. Dentro, simplemente usa un `console.log` para simular el envío del email
//       (ej: "Enviando email a [destinatario]: [mensaje]") y devuelve `true`.
//     - **Implementa** el método `getDestinatario` para que devuelva la propiedad privada `destinatario`.

// ---------------------------------------------------------------------------------------------------------------------
// Aquí la solución:
interface Notificable{
  enviar(mensaje: string): boolean;
  getDestinatario(): string;
}

class NotificacionEmail implements Notificable {
  constructor(private destinatario: string){}

  enviar(mensaje:string){
    console.log(`Enviando email a ${this.destinatario}: ${mensaje}`);
    return true;
  }

  getDestinatario(): string {
    return this.destinatario;
  }
}


// --- Pruebas ---
// Una vez que hayas escrito tu solución, estas líneas deberían funcionar y mostrar los resultados.

const email = new NotificacionEmail("usuario@example.com");

console.log(`El destinatario es: ${email.getDestinatario()}`); // Esperado: "El destinatario es: usuario@example.com"

const exito = email.enviar("Hola, esta es tu primera notificación por email.");
// Salida esperada en consola: "Enviando email a usuario@example.com: Hola, esta es tu primera notificación por email."
console.log(`¿Se envió el email? ${exito}`); // Esperado: "¿Se envió el email? true"

// No borrar esta línea, esto hace que nada de lo que se declare aquí debe ser visible
// para otros archivos a menos que yo lo exporte explícitamente.
export {};