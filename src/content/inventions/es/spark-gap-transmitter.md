---
title: Transmisor de chispa
materialsUsed:
  - copper
  - battery
  - wire
  - wood
  - glass
image: ../../../assets/images/inventions/spark-gap-transmitter.jpg
---

# Breve descripción

Un transmisor de chispa es el tipo de transmisor de radio más antiguo, capaz de generar ondas electromagnéticas de radiofrecuencia mediante la creación de una chispa eléctrica a través de un espacio (diseño de explosor). Combinado con un receptor simple (como un cohesor), permitió la transmisión de las primeras señales inalámbricas, sentando las bases de todas las telecomunicaciones modernas.

## Uso / Función

- **Telegrafía Inalámbrica**: Enviar mensajes a largas distancias sin cables físicos utilizando el código Morse.
- **Comunicación Marítima**: Permitió a los barcos en el mar comunicarse con tierra y otros barcos (especialmente crítico para las llamadas de emergencia SOS).
- **Escala**: Regional/larga distancia (puede abarcar cientos o incluso miles de kilómetros con fuentes de alimentación de alto voltaje y grandes antenas).

## Principio de funcionamiento

Un transmisor de chispa convierte la energía eléctrica de corriente continua (CC) en radiación electromagnética de alta frecuencia (ondas de radio):

1. **Suministro de Energía y Carga**: Una fuente de energía de bajo voltaje, como una **[Batería](/es/materials/battery)**, suministra electricidad a una bobina de inducción. La bobina actúa como un transformador elevador, convirtiendo la CC de bajo voltaje en corriente alterna (CA) de alto voltaje.
2. **Almacenamiento Capacitivo**: Esta carga de alto voltaje se almacena en un condensador, como una **[Botella de Leyden](/es/inventions/leyden-jar)** (hecha de vidrio y metal).
3. **La Chispa**: Una vez que el voltaje en el condensador alcanza un umbral lo suficientemente alto, supera la resistencia del aire en una brecha estrecha (el explosor), creando una chispa eléctrica.
4. **Oscilación Resonante**: Cuando la chispa se dispara, la energía almacenada en el condensador fluye a través del explosor y de una bobina de sintonización hecha de cable grueso de **[Cobre](/es/materials/copper)**. El condensador y la bobina forman un circuito resonante LC, lo que hace que la electricidad oscile rápidamente de un lado a otro a una frecuencia de radio específica.
5. **Radiación**: Esta corriente oscilante de alta frecuencia se alimenta a una gran antena de cable y a un sistema de tierra, radiando al espacio como una onda electromagnética (una "onda amortiguada").

## Cómo crearlo

### 1. Construcción del Explosor (Spark Gap)
- Fija dos pernos o cables gruesos de latón o **[Cobre](/es/materials/copper)** a una base aislante hecha de **[Madera](/es/materials/wood)** seca o plástico.
- Coloca los pernos de modo que sus puntas queden frente a frente, separadas por un pequeño espacio ajustable de aproximadamente 1 a 3 milímetros.

### 2. Preparación de la Bobina de Inducción
- Crea una bobina de inducción (como la bobina de Ruhmkorff) para elevar el voltaje.
- Enrolla una bobina primaria de **[Cable](/es/materials/wire)** grueso alrededor de un núcleo de hierro, y enrolla una bobina secundaria que consta de miles de vueltas de cable aislado muy fino sobre la primaria. Usa un interruptor automático (mecanismo de zumbador) para conectar y desconectar rápidamente el circuito primario y generar pulsos de alto voltaje en el secundario.

### 3. Adición de un Condensador Resonante
- Construye un condensador simple de alto voltaje. Una botella de Leyden hecha a partir de un frasco de **[Vidrio](/es/materials/glass)** forrado por dentro y por fuera con papel de aluminio es ideal.
- Conecta este condensador en paralelo con los terminales secundarios de la bobina de inducción y el explosor.

### 4. Enrollado de la Bobina de Sintonización (Hélice)
- Enrolla de 10 a 20 vueltas de cable de cobre grueso alrededor de un marco de madera para formar una bobina de sintonización de antena.
- Conecta esta bobina en serie con el explosor, un cable de antena elevado (estirado largo y alto) y una buena conexión eléctrica a la tierra.

### 5. Operación
- Conecta una llave de telegrafía en serie con la batería y la bobina primaria.
- Al presionar la llave se cierra el circuito, generando chispas a través del espacio y enviando ráfagas de ondas de radio que corresponden a las señales del código Morse.

## Materiales necesarios

- **Bobina de Inducción**: Para generar altos voltajes. Sourced de **[Cable](/es/materials/wire)** y **[Cobre](/es/materials/copper)**.
- **Llave de Telegrafía**: Un interruptor simple con resorte. Sourced de **[Metal](/es/materials/metal)** y **[Madera](/es/materials/wood)**.
- **Batería**: Fuente de alimentación de corriente continua. Sourced de **[Batería](/es/materials/battery)**.
- **Botella de Leyden**: Condensador de alto voltaje. Sourced de **[Vidrio](/es/materials/glass)** y papel de aluminio.
- **Explosor**: Dos varillas o pernos de metal ajustables. Sourced de **[Cobre](/es/materials/copper)** o **[Latón](/es/materials/brass)**.
- **Cable de Antena**: Cable conductor largo para radiar la señal. Sourced de **[Cable](/es/materials/wire)**.

## Variantes y mejoras

- **Explosor Rotativo**: En lugar de dos electrodos fijos, se utiliza una rueda metálica giratoria con electrodos. Esto crea un tono de chispa musical rápido y agudo, que es mucho más fácil de escuchar para los operadores a través de la estática de fondo.
- **Explosor Apagado (Quenched)**: Consiste en utilizar una serie de múltiples explosores pequeños en cámaras herméticas. Esto extingue la chispa extremadamente rápido, evitando que la energía se desperdicie de regreso al circuito transmisor y creando una señal más limpia y eficiente.

## Límites y riesgos

- **Interferencia de Banda Ancha**: Los transmisores de chispa generan señales "sucias" que se dispersan en un rango muy amplio de frecuencias de radio (ruido electromagnético). Debido a esto, interfieren rápidamente con otras comunicaciones de radio cercanas y están prohibidos globalmente bajo las regulaciones modernas del espectro.
- **Voltajes Letales**: Las bobinas de inducción generan miles de voltios de electricidad. Tocar el lado de alto voltaje del transmisor durante su funcionamiento puede causar una descarga eléctrica fatal.
- **Riesgos de Ozono e Incendio**: La chispa eléctrica continua genera ozono, óxidos de nitrógeno y calor, lo que presenta un riesgo respiratorio localizado y un riesgo potencial de incendio si hay materiales inflamables cerca.
