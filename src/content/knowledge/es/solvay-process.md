---
title: Proceso Solvay
relatedMaterials:
  - salt
  - caliza
  - ammonia
relatedInventions:
  - furnace
  - pump
image: ../../../assets/images/knowledge/solvay-process.jpg
---

# Descripción breve

El proceso Solvay (o proceso de amoníaco-soda) es el principal proceso químico industrial para producir carbonato de sodio (ceniza de sosa o sosa solvay, $Na_2CO_3$). Hace reaccionar cloruro de sodio (salmuera) y carbonato de calcio (caliza) utilizando amoníaco como reactivo cíclico, el cual se recicla continuamente en el sistema.

## Uso / Función

- **Producción de sosa**: Produce carbonato de sodio, una materia prima clave para fabricar vidrio, jabón, papel y detergentes.
- **Industria del vidrio**: Reduce la temperatura de fusión de la arena de sílice, permitiendo la producción masiva y barata de recipientes de vidrio y cristales para ventanas.
- **Tratamiento de aguas**: Ablanda el agua y neutraliza ácidos.
- **Precursor químico**: Se utiliza para fabricar bicarbonato de sodio y otras sales industriales de sodio.

## Principio de funcionamiento

La ecuación química global es:

$$2\text{NaCl} + \text{CaCO}_3 \rightarrow \text{Na}_2\text{CO}_3 + \text{CaCl}_2$$

Esta reacción no ocurre de forma directa. En su lugar, el proceso Solvay utiliza amoníaco ($NH_3$) en un bucle cerrado para facilitar la reacción:

1. **Saturación de salmuera**: Una solución concentrada de cloruro de sodio (salmuera) se satura con gas amoníaco disuelto.
2. **Carbonatación**: Se calienta la caliza (carbonato de calcio, $CaCO_3$) en un horno de calcinación para producir cal viva ($CaO$) y dióxido de carbono ($CO_2$). Este gas $CO_2$ se burbujea a través de la salmuera amoniacal.
3. **Precipitación**: El dióxido de carbono reacciona con el amoníaco disuelto y la sal para precipitar bicarbonato de sodio ($NaHCO_3$), dejando cloruro de amonio ($NH_4Cl$) en solución:

$$\text{NaCl} + \text{NH}_3 + \text{CO}_2 + \text{H}_2\text{O} \rightarrow \text{NaHCO}_3 \downarrow + \text{NH}_4\text{Cl}$$

4. **Calcinación**: El bicarbonato de sodio precipitado se filtra y se calienta para producir carbonato de sodio puro, liberando vapor de agua y $CO_2$ (que se recicla volviendo al paso 2):

$$2\text{NaHCO}_3 \rightarrow \text{Na}_2\text{CO}_3 + \text{H}_2\text{O} + \text{CO}_2 \uparrow$$

5. **Recuperación de amoníaco**: La cal viva ($CaO$) del paso 2 se apaga con agua para formar hidróxido de calcio ($Ca(OH)_2$), que luego se hace reaccionar con la solución de cloruro de amonio del paso 3 para recuperar el gas amoníaco. El único residuo que sale del sistema es el cloruro de calcio ($CaCl_2$):

$$2\text{NH}_4\text{Cl} + \text{Ca(OH)}_2 \rightarrow \text{CaCl}_2 + 2\text{H}_2\text{O} + 2\text{NH}_3 \uparrow$$

## Cómo implementarlo

### 1. Horno de cal
- Construir un horno de eje vertical para calentar **[Caliza](/es/materials/caliza)** a 900–1000°C para liberar dióxido de carbono gas y crear cal viva.

### 2. Torres de carbonatación
- Diseñar columnas de absorción altas donde el dióxido de carbono burbujee hacia arriba a través de la salmuera amoniacal que fluye hacia abajo. Deben estar refrigeradas ya que la reacción es exotérmica.

### 3. Filtración y recuperación
- Implementar filtros de vacío o centrifugadoras para separar los cristales precipitados de bicarbonato de sodio.
- Construir un destilador de recuperación de amoníaco donde se mezcle el hidróxido de calcio con la solución de cloruro de amonio restante y se caliente con vapor para destilar y recuperar el amoníaco.

## Materiales necesarios

- **Salmuera de sal**: Solución concentrada de cloruro de sodio (derivada de depósitos de sal o agua de mar purificada con **[Sal](/es/materials/salt)**).
- **Caliza**: Roca de carbonato de calcio, extraída de canteras.
- **Amoníaco**: Inicialmente requerido para cargar el sistema, pero casi todo se recicla.
- **Ladrillos refractarios**: Para revestir el horno de cal y los hornos de calcinación.

## Variantes y mejoras

- **Proceso Leblanc**: El predecesor histórico, que utilizaba ácido sulfúrico, carbón y caliza. Era extremadamente contaminante e ineficiente en comparación con el proceso Solvay.
- **Proceso de Hou**: Una modificación desarrollada en China que recicla el cloruro de amonio para producir fertilizante de cloruro de amonio en lugar de desecharlo como cloruro de calcio.
- **Minería de trona natural**: Extracción directa de depósitos naturales de carbonato de sodio (trona), lo que resulta más económico en regiones con grandes yacimientos (como Wyoming).

## Límites y riesgos

- **Fuga de amoníaco**: El amoníaco es tóxico y corrosivo; incluso fugas pequeñas en el ciclo presentan condiciones de trabajo de alto riesgo y daños ambientales.
- **Eliminación de cloruro de calcio**: El subproducto (cloruro de calcio) puede provocar la salinización del suelo y ríos si se vierte en grandes cantidades.
- **Soluciones corrosivas**: La salmuera caliente y el cloruro de amonio son altamente corrosivos, requiriendo tuberías y recipientes de materiales especiales.
