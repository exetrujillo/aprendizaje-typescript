# Aprendizaje de TypeScript

Repositorio educacional para facilitar el aprendizaje de TypeScript a través de lecciones y ejercicios prácticos.

## Propósito del Proyecto

El objetivo de este repositorio es almacenar cada lección de TypeScript como un archivo `.ts` individual y autocontenido. Cada archivo incluye:
1.  La explicación teórica de un concepto.
2.  Ejemplos de código.
3.  Un ejercicio para resolver.
4.  La solución y pruebas para verificar su funcionamiento.

## ¿Cómo Empezar?

Si quieres explorar el código o ejecutar las lecciones, sigue estos pasos:

### 1. Prerrequisitos
Asegúrate de tener [Node.js](https://nodejs.org/) instalado (que incluye `npm`).

### 2. Instalación
Clona el repositorio e instala las dependencias de desarrollo:
```bash
git clone https://github.com/exetrujillo/aprendizaje-typescript.git
cd aprendizaje-script
npm install
```

### 3. Ejecutar una Lección
Para compilar, ejecutar y probar cualquier archivo de lección, usa el script `dev`:
```bash
# Sintaxis: npm run dev -- <ruta-al-archivo>
npm run dev -- ./Lecciones/Leccion_001_Introduccion_Y_Tipos_Basicos.ts
```

### 4. Revisar soluciones
Recomendamos enormemente no revisarlas hasta después de haber buscado documentación e intentado realizar los ejercicios al menos un par de veces.
De todas formas, si igualmente quieres ver las soluciones, estas se encuentran en la carpeta Soluciones (¡Sorpresa! 😂).
Recuerda que las soluciones no son únicas, solo ofrecemos algunas opciones.

## Índice de Lecciones

<details>
  <summary><strong>Haz clic para ver el Índice Completo de Lecciones (1-10)</strong></summary>
  
| Lección | Concepto Principal                      | Archivo                                                 |
| :-----: | --------------------------------------- | ------------------------------------------------------- |
|   001   | Tipos Básicos (string, number, boolean) | `Leccion_001_Introduccion_Y_Tipos_Basicos.ts`           |
|   002   | Tipos en Funciones                      | `Leccion_002_Tipos_En_Funciones.ts`                     |
|   003   | Arrays                                  | `Leccion_003_Arrays.ts`                                 |
|   004   | Objetos e Interfaces                    | `Leccion_004_Objetos_E_Interfaces.ts`                   |
|   005   | Tipos Unión y Alias                     | `Leccion_005_Tipos_Union_Y_Alias.ts`                    |
|   006   | Tuplas                                  | `Leccion_006_Tuplas.ts`                                 |
|   007   | Enums                                   | `Leccion_007_Enums.ts`                                  |
|   008   | Null, Undefined y Strict Null Checks    | `Leccion_008_Null_Undefined_Y_Strict_Null_Checks.ts`    |
|   009   | Genéricos Básicos                       | `Leccion_009_Genericos_Basicos.ts`                      |
|   010   | Repaso y Tips (Lecciones 1-9)           | `Leccion_010_Repaso_Y_Tips_1-9.ts`                      |
|   011   | Clases Básicas                          | `Leccion_011_Clases_Basicas.ts`                         |
|   012   | Modificadores de Acceso y Shorthand     | `Leccion_012_Modificadores_De_Acceso_Y_Shorthand.ts`    |
|   013   | Getters y Setters                       | `Leccion_013_Getters_Y_Setters.ts`                      |

</details>

---

## Recomendaciones
Algunas sugerencias para mejorar la experiencia

<details>
  <summary><strong>Haz clic para ver las recomendaciones</strong></summary>
  <h3>Desactiva autocompletado</h3>

  Esto puede ser útil si prefieres escribir tu código sin sugerencias automáticas. Para desactivar el autocompletado, 
  ve a la configuración de tu editor y busca la opción relacionada con el autocompletado o las sugerencias de código. 
  Desactiva esta opción para evitar que aparezcan sugerencias mientras escribes.

  Además, si usas Copilot, Cursor o Trae sería de ayuda desactivar las sugerencias de código.

  Por ejemplo, si usas Copilot puedes crear una carpeta .vscode/ en tu directorio y luego crear un archivo settings.json ahí dentro con lo siguiente:

  ```json
  {
    "github.copilot.enable": {
      "*": false
    }
  }
  ```

</details>

---

