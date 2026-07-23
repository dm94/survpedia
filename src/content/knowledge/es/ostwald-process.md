---
title: Proceso de Ostwald
relatedMaterials:
  - nitric-acid
  - ammonia
  - water
  - platinum
relatedInventions:
  - furnace
  - air-compressor
  - pump
image: ../../../assets/images/knowledge/ostwald-process.jpg
---

# Breve descripción

El Proceso de Ostwald es un proceso químico fundamental utilizado para producir ácido nítrico ($HNO_3$) a partir de amoníaco ($NH_3$). Desarrollado por Wilhelm Ostwald a principios del siglo XX, está estrechamente vinculado con el proceso de Haber-Bosch, proporcionando la principal vía industrial para transformar el nitrógeno atmosférico en fertilizantes y productos químicos industriales.

## Uso / Función

- **Producción de Ácido Nítrico**: Genera ácido nítrico concentrado, crucial para la fabricación de fertilizantes agrícolas nitrogenados (como el nitrato de amonio).
- **Fabricación de Explosivos**: Proporciona el precursor esencial para la nitración de compuestos para fabricar explosivos (como el algodón pólvora, la nitroglicerina y el TNT).
- **Metalurgia y Síntesis Química**: Suministra ácido para el decapado de metales, propulsores de cohetes y síntesis orgánica de precursores.
- **Escala**: Plantas de fabricación química a gran escala que funcionan de manera continua.

## Principio de funcionamiento

El proceso convierte el amoníaco ($NH_3$) en ácido nítrico ($HNO_3$) mediante oxidación catalítica en tres etapas principales:

1. **Oxidación Catalítica del Amoníaco**: El gas amoníaco se mezcla con aire seco y se hace pasar a través de una fina malla catalítica de platino (a menudo aleado con un 10% de rodio) a altas temperaturas (800°C–900°C) y presión. Esta reacción exotérmica produce óxido nítrico ($NO$) y vapor de agua:

$$4\text{NH}_3 (g) + 5\text{O}_2 (g) \rightarrow 4\text{NO} (g) + 6\text{H}_2\text{O} (g) \quad (\Delta H = -905.2 \text{ kJ/mol})$$

Una vez iniciada, la reacción se autosostiene debido a su alta liberación de calor.

2. **Oxidación del Óxido Nítrico**: La mezcla de gases se enfría y se permite que el óxido nítrico reaccione con el exceso de oxígeno para formar dióxido de nitrógeno ($NO_2$):

$$2\text{NO} (g) + \text{O}_2 (g) \rightarrow 2\text{NO}_2 (g) \quad (\Delta H = -114 \text{ kJ/mol})$$

3. **Absorción**: El gas dióxido de nitrógeno se absorbe en agua dentro de una torre de reacción. Reacciona con el agua para producir ácido nítrico diluido ($HNO_3$) y óxido nítrico ($NO$), que se recicla de nuevo al segundo paso:

$$3\text{NO}_2 (g) + \text{H}_2\text{O} (l) \rightarrow 2\text{HNO}_3 (aq) + \text{NO} (g)$$

Para maximizar la concentración de ácido y el rendimiento, se introduce oxígeno adicional para oxidar directamente el óxido nítrico liberado en la columna de absorción:

$$4\text{NO}_2 (g) + \text{O}_2 (g) + 2\text{H}_2\text{O} (l) \rightarrow 4\text{HNO}_3 (aq)$$

## Cómo implementarlo

### 1. Reactor Catalítico

- Construir un recipiente presurizado que contenga una malla fina de **[Platino](/es/materials/platinum)**.
- Implementar precalentadores para elevar la mezcla de amoníaco y aire entrante a aproximadamente 200°C para iniciar la reacción en la superficie del catalizador.
- Diseñar vías de flujo de gas eficientes para garantizar un tiempo de contacto de menos de unos pocos milisegundos, ya que una exposición más prolongada a altas temperaturas degrada el óxido nítrico deseado.

### 2. Cámaras de Enfriamiento y Oxidación

- Dirigir los gases calientes de escape a través de un intercambiador de calor (como una caldera de vapor - **[Caldera](/es/inventions/boiler)**) para enfriarlos rápidamente por debajo de 150°C, promoviendo la oxidación del óxido nítrico a dióxido de nitrógeno.
- Dirigir los gases a un recipiente de oxidación dedicado donde se añade aire atmosférico adicional.

### 3. Torre de Absorción

- Construir una torre de absorción alta revestida con cerámica o vidrio resistente al ácido.
- Introducir agua en la parte superior de la torre para que gotee sobre materiales de relleno (como anillos de cerámica) mientras el gas dióxido de nitrógeno entra por la parte inferior, maximizando el contacto gas-líquido.
- Utilizar una **[Bomba](/es/inventions/pump)** para recircular el ácido hasta lograr la concentración deseada (típicamente 50%–60%).

## Materiales necesarios

- **Amoníaco ($NH_3$)**: Producido mediante el **[Proceso de Haber-Bosch](/es/knowledge/haber-bosch-process)**.
- **Aire Atmosférico**: Secado y filtrado para eliminar impurezas que puedan envenenar el catalizador.
- **Catalizador**: Malla de **[Platino](/es/materials/platinum)** o platino-rodio de alta pureza.
- **Agua**: Agua desmineralizada para una óptima absorción y pureza.
- **Aleaciones o Cerámicas Resistentes al Ácido**: Materiales especializados para manejar óxidos de nitrógeno altamente corrosivos y ácido nítrico caliente.

## Variantes y mejoras

- **Proceso de Doble Presión**: Opera el paso de combustión de amoníaco a presión media (para una mayor eficiencia del catalizador) y el paso de absorción a alta presión (para aumentar la tasa de absorción y la concentración de ácido).
- **Proceso de Birkeland-Eyde**: La alternativa histórica que utilizaba un arco eléctrico de alta energía para fijar directamente el nitrógeno atmosférico en óxido nítrico. No requería amoníaco, pero consumía enormes cantidades de electricidad.

## Límites y riesgos

- **Envenenamiento del Catalizador**: Las impurezas en el suministro de aire o amoníaco (como el azufre o los metales pesados) pueden "envenenar" el catalizador de platino, deteniendo la reacción.
- **Gases Nitrosos**: El dióxido de nitrógeno es un gas de color marrón rojizo altamente tóxico. Las fugas causan graves daños respiratorios y son letales en altas concentraciones.
- **Degradación Corrosiva**: El ácido nítrico ataca agresivamente a los metales estándar. Se debe utilizar vidrio, piedra o acero inoxidable especializado con alto contenido de cromo para su contención.
