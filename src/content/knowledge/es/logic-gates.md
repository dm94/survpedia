---
title: Puertas Lógicas
relatedMaterials:
  - copper
  - silicon
  - germanium
relatedInventions:
  - transistor
  - vacuum-tube
  - relay
  - resistor
image: ../../../assets/images/knowledge/logic-gates.jpg
---

# Descripción breve

Las puertas lógicas son los bloques de construcción básicos de cualquier sistema digital. Es un dispositivo idealizado o físico que implementa una función booleana; es decir, realiza una operación lógica sobre una o más entradas binarias y produce una única salida binaria.

## Uso / Función

- **Computación:** Realizar operaciones aritméticas y lógicas en computadoras.
- **Sistemas de control:** Automatizar decisiones basadas en entradas de sensores (por ejemplo, si está oscuro Y alguien está presente, encender la luz).
- **Almacenamiento de datos:** Combinar puertas para crear "flip-flops" que almacenan bits de información.
- **Procesamiento de señales:** Filtrar y enrutar señales digitales.

## Principio de funcionamiento

- **Lógica binaria:** Opera con dos estados: Alto (1, ON) y Bajo (0, OFF).
- **Álgebra de Boole:** Utiliza operadores lógicos como AND, OR, NOT y NAND.
- **Conmutación:** Las puertas físicas utilizan interruptores (mecánicos, tubos de vacío o transistores) para controlar el flujo de corriente de acuerdo con los estados de entrada.

### Tipos básicos de puertas:
- **NOT:** Invierte la entrada (1 se convierte en 0, 0 se convierte en 1).
- **AND:** La salida es 1 solo si TODAS las entradas son 1.
- **OR:** La salida es 1 si AL MENOS UNA entrada es 1.
- **NAND:** La salida es 0 solo si TODAS las entradas son 1 (puerta universal).

## Cómo implementarlo

1.  **Usando relés:** Conectar **[Relés](/es/inventions/relay)** en serie para la lógica AND (ambos deben estar cerrados) o en paralelo para la lógica OR (cualquiera de los dos cerrado).
2.  **Usando tubos de vacío:** Usar **[Tubos de vacío](/es/inventions/vacuum-tube)** como interruptores electrónicos para realizar lógica a mayores velocidades.
3.  **Usando transistores:** La lógica moderna utiliza **[Transistores](/es/inventions/transistor)** (generalmente tecnología CMOS) para crear puertas densas y de bajo consumo.
4.  **Lógica diodo-resistencia:** Usar diodos y **[Resistencias](/es/inventions/resistor)** para operaciones simples AND/OR, aunque la fuerza de la señal se degrada.

## Materiales necesarios

- **Elementos de conmutación:** **[Relés](/es/inventions/relay)**, **[Tubos de vacío](/es/inventions/vacuum-tube)** o **[Transistores](/es/inventions/transistor)**.
- **Conductores:** Cable de **[Cobre](/es/materials/copper)** o pistas de circuito.
- **Soporte:** Protoboards o placas de circuito.

## Variantes y mejoras

- **Lógica discreta:** Puertas individuales construidas a partir de componentes separados.
- **Circuitos integrados (IC):** Poner múltiples puertas (desde docenas hasta miles de millones) en un solo chip.
- **FPGA:** Lógica reconfigurable que se puede programar para simular cualquier disposición de puertas.

## Límites y riesgos

- **Retraso de propagación:** Cada puerta tarda una pequeña cantidad de tiempo en conmutar, lo que limita la velocidad máxima del sistema.
- **Consumo de energía:** Cada operación de conmutación consume energía y genera calor.
- **Fan-out:** La salida de una sola puerta solo puede alimentar un número limitado de otras entradas de puerta antes de que la señal se vuelva poco fiable.
- **Complejidad:** Diseñar sistemas lógicos complejos requiere una verificación matemática rigurosa para evitar "condiciones de carrera" y errores.
