---
title: Proceso de Leblanc
relatedMaterials:
  - salt
  - sulfuric-acid
  - coal
  - caliza
  - soda
relatedInventions:
  - furnace
  - kiln
image: ../../../assets/images/knowledge/leblanc-process.jpg
---

# Descripción breve

El Proceso de Leblanc fue el primer gran proceso químico industrial para producir carbonato de sodio (ceniza de sosa o sosa, $Na_2CO_3$), desarrollado por Nicolas Leblanc en 1791. Transformó la fabricación de jabón, vidrio y textiles, y sentó las bases de la industria química inorgánica moderna antes de ser superado por el proceso Solvay, más limpio y eficiente.

## Uso / Función

- **Producción de Ceniza de Sosa**: Produce grandes cantidades de carbonato de sodio, un álcali clave.
- **Fabricación de Vidrio**: Reduce el punto de fusión de la arena, permitiendo la producción masiva de ventanas y botellas de vidrio.
- **Fabricación de Jabón**: Se convertía en sosa cáustica (hidróxido de sodio) para saponificar grasas animales y aceites vegetales para obtener jabón barato.
- **Industria Textil**: Utilizado en el blanqueo y lavado de algodón, lana y lino.

## Principio de funcionamiento

El proceso Leblanc produce carbonato de sodio a partir de sal común (cloruro de sodio), ácido sulfúrico, carbón y caliza en tres etapas principales:

1. **Producción de torta de sal**: La sal reacciona con ácido sulfúrico concentrado en una bandeja de hierro fundido y luego en un horno para producir sulfato de sodio ("torta de sal") y gas cloruro de hidrógeno altamente tóxico ($HCl$):

$$2\text{NaCl} + \text{H}_2\text{SO}_4 \rightarrow \text{Na}_2\text{SO}_4 + 2\text{HCl} \uparrow$$

2. **Horno de ceniza negra**: El sulfato de sodio se tritura, se mezcla con caliza (carbonato de calcio, $CaCO_3$) y carbón (carbono, $C$), y se tuesta en un horno rotatorio o de reverbero a 1000°C. Esto produce una mezcla oscura llamada "ceniza negra", compuesta por carbonato de sodio y sulfuro de calcio insoluble en agua ($CaS$):

$$\text{Na}_2\text{SO}_4 + \text{CaCO}_3 + 4\text{C} \rightarrow \text{Na}_2\text{CO}_3 + \text{CaS} + 4\text{CO} \uparrow$$

3. **Lixiviación**: La ceniza negra se trata con agua tibia para disolver el carbonato de sodio, dejando el sulfuro de calcio insoluble como residuo tóxico ("galligu"). La solución se evapora y se calcina para obtener ceniza de sosa pura.

## Cómo implementarlo

### 1. Reactor de Ácido-Sal

- Construir una bandeja poco profunda de hierro fundido cubierta por una cúpula para mezclar la sal y el ácido sulfúrico.
- Asegurar una chimenea de piedra o una columna de absorción para manejar el gas cloruro de hidrógeno altamente corrosivo.

### 2. Horno de Reverbero

- Construir un horno donde la llama del combustible y los gases calientes se desvíen desde el techo hacia la mezcla de sulfato de sodio, carbón y caliza. Esto mantiene la mezcla bajo calor directo sin mezclarse con la ceniza del combustible.

### 3. Tanques de Lixiviación

- Diseñar una serie de tanques de lixiviación de hierro (utilizando el principio de extracción a contracorriente) donde el agua fluya sobre cenizas negras cada vez más ricas para maximizar la concentración de carbonato de sodio disuelto antes de la evaporación.

## Materiales necesarios

- **Sal (Cloruro de Sodio)**: Obtenida de la evaporación del agua de mar o de minas de **[Sal](/es/materials/salt)**.
- **Ácido Sulfúrico ($H_2SO_4$)**: Producido mediante el histórico **[Proceso de las Cámaras de Plomo](/es/knowledge/lead-chamber-process)**. Obtenido a partir de **[Ácido Sulfúrico](/es/materials/sulfuric-acid)**.
- **Caliza ($CaCO_3$)**: Obtenida de canteras de **[Caliza](/es/materials/caliza)**.
- **Carbón / Carbón Vegetal**: Sirve como agente reductor en el horno. Obtenido de **[Carbón](/es/materials/coal)**.
- **Ladrillos Refractarios**: Para revestir el horno de reverbero de alta temperatura.

## Variantes y mejoras

- **Alkali Act de 1863**: La primera regulación de contaminación del aire del mundo, que obligó a las plantas Leblanc a absorber el gas cloruro de hidrógeno en torres empacadas con coque y agua corriente, transformando un residuo en valioso ácido clorhídrico.
- **Proceso Solvay**: La mejora definitiva, que reemplazó por completo al proceso Leblanc al utilizar amoníaco para convertir la sal y la caliza en ceniza de sosa sin producir residuos de azufre tóxicos ni gases corrosivos.

## Límites y riesgos

- **Grave Contaminación**: Históricamente liberaba cantidades masivas de gas cloruro de hidrógeno tóxico, destruyendo la vegetación circundante, y dejaba montículos de "galligu" (residuo de sulfuro de calcio) que liberaban gas sulfuro de hidrógeno altamente tóxico y maloliente al entrar en contacto con el ácido o la lluvia.
- **Alto Consumo de Energía**: Tostar la ceniza negra a 1000°C requiere hornos de combustión continua de carbón.
- **Corrosión de Equipos**: El ácido clorhídrico y el ácido sulfúrico calientes degradan rápidamente la mayoría de los metales y la mampostería.
