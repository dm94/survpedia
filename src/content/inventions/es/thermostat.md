---
title: Termostato
materialsUsed:
  - brass
  - iron
image: ../../../assets/images/inventions/thermostat.jpg
---

# Breve descripción

Un termostato es un dispositivo de control automático que detecta los cambios de temperatura y mantiene la temperatura de un sistema cerca de un punto de ajuste deseado. Funciona como un interruptor automático, encendiendo o apagando sistemas de calefacción o refrigeración sin necesidad de intervención humana.

## Uso / Función

- **Uso principal**: Regulación automática de la temperatura en procesos térmicos de calefacción, refrigeración e industriales.
- **Usos secundarios**: Apagado de seguridad para calderas para evitar el sobrecalentamiento, regulación de la temperatura en incubadoras y control del flujo de fluidos en motores.
- **Escala**: Doméstica (hornos, calefactores), agrícola (incubadoras, invernaderos) e industrial (calderas de vapor, reactores químicos).

## Principio operativo

El termostato mecánico aprovecha el fenómeno físico de la expansión térmica, utilizando específicamente una **tira bimetálica**:

1.  **Expansión diferencial**: Dos metales diferentes, típicamente **[Latón](/es/materials/brass)** (que se expande rápidamente al calentarse) e **[Hierro](/es/materials/iron)** o **[Acero](/es/materials/steel)** (que se expande lentamente), se unen o remachan firmemente uno al lado del otro.
2.  **Acción de flexión**: Al calentarse, la capa de latón se expande más que la de hierro. Dado que están firmemente unidas, la tira se ve obligada a doblarse hacia el lado del metal que se expande menos (el hierro).
3.  **Interruptor mecánico**: La tira doblada actúa como una palanca. A una temperatura específica, la flexión física de la tira abre o cierra un contacto eléctrico, o abre/cierra una válvula física (por ejemplo, en un calentador de gas o línea de vapor).
4.  **Inversión por enfriamiento**: A medida que la temperatura desciende, el latón se contrae más rápido, enderezando la tira y revirtiendo la posición del interruptor.

## Cómo crearlo

### 1. El elemento bimetálico

- Consiga tiras finas y planas de **[Latón](/es/materials/brass)** y de **[Hierro](/es/materials/iron)** o **[Acero](/es/materials/steel)** de idénticas dimensiones.
- Únalas firmemente. Esto se puede lograr remachándolas a intervalos frecuentes a lo largo de su longitud, o soldándolas con soldadura fuerte a alta temperatura.

### 2. El mecanismo de contacto

- Monte un extremo de la tira bimetálica en una base sólida y aislada para que permanezca estacionaria.
- Coloque un punto de contacto eléctrico (como una pequeña pieza de **[Cobre](/es/materials/copper)** o **[Plata](/es/materials/silver)**) en el extremo libre y móvil de la tira.
- Coloque un tornillo de contacto estacionario y ajustable opuesto al punto de contacto de la tira. Al girar este tornillo se cambia la distancia que la tira debe doblarse para hacer contacto, lo que permite ajustar la temperatura de consigna.

### 3. Calibración

- Caliente el ambiente lentamente. Registre la temperatura a la que el contacto se abre o se cierra usando un **[Termómetro](/es/inventions/thermometer)**.
- Ajuste el tornillo de contacto hasta que el interruptor se active a la temperatura objetivo deseada (por ejemplo, 37°C para una **[Incubadora](/es/inventions/incubator)** de aves).

## Materiales necesarios

- **Tira bimetálica**: Láminas delgadas de **[Latón](/es/materials/brass)** e **[Hierro](/es/materials/iron)** o **[Acero](/es/materials/steel)**.
- **Contactos**: Metal de alta conductividad como **[Cobre](/es/materials/copper)**, **[Latón](/es/materials/brass)** o **[Plata](/es/materials/silver)**.
- **Base aislante**: Madera, pizarra seca o **[Cerámica](/es/materials/ceramics)** para evitar cortocircuitos eléctricos.
- **Tornillo de ajuste**: Un tornillo estándar de latón o acero.
- **Herramientas**: Remachadora o equipo de soldadura, tijeras para metal, lima.

## Variantes y mejoras

- **Interruptor de mercurio**: La tira bimetálica se enrolla en espiral. Al cambiar la temperatura, la espiral se tuerce, inclinando una ampolla de vidrio que contiene una gota de mercurio. El mercurio se desplaza para conectar dos contactos eléctricos, ofreciendo un interruptor duradero y libre de chispas.
- **Fuelle de gas/expansión**: Utiliza una pequeña cápsula metálica llena de un líquido o gas volátil. Al calentarse, el gas se expande, inflando el fuelle para empujar mecánicamente un interruptor.
- **Electrónico/Digital**: Utiliza un termistor o termopar acoplado a un microcontrolador para medir cambios de resistencia y activar relés de estado sólido.

## Límites y riesgos

- **Fatiga del metal**: Tras miles de ciclos, la unión entre los dos metales puede degradarse, o los metales mismos pueden sufrir fatiga, alterando la calibración.
- **Arco eléctrico**: Cuando se usa para conmutar corrientes eléctricas elevadas directamente, se puede formar una chispa (arco) entre los contactos, lo que eventualmente puede fundirlos o soldarlos. El uso de un **[Relé](/es/inventions/relay)** o un **[Condensador](/es/inventions/capacitor)** entre los contactos reduce este riesgo.
- **Desviación de la calibración**: Las vibraciones o los golpes mecánicos pueden mover el tornillo de ajuste, lo que requiere una recalibración periódica.
