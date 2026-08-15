---
title: Contador Geiger
materialsUsed:
  - metal
  - glass
  - wire
  - battery
image: ../../../assets/images/inventions/geiger-counter.jpg
---

# Breve descripción

Un contador Geiger (o contador Geiger–Müller) es un instrumento utilizado para detectar y medir la radiación ionizante, incluyendo partículas alfa, partículas beta y rayos gamma. Nombrado en honor a Hans Geiger y Walther Müller, quienes perfeccionaron el diseño en 1928, proporciona una respuesta auditiva o visual inmediata y en tiempo real cuando hay presencia de radiación radiactiva.

## Uso / Función

Su propósito principal es la detección de peligros por radiación ionizante y la medición de la contaminación ambiental:

- **Detección de radiación**: Identifica materiales radiactivos, depósitos minerales (como la pechblenda/mineral de uranio) y contaminación radiactiva en alimentos, agua, suelo o chatarra metálica.
- **Seguridad personal y dosimetría**: Alerta a las personas sobre niveles peligrosos de radiación tras accidentes nucleares o exposición en entornos industriales y médicos.
- **Escala**: Dispositivo portátil de mano para prospección de campo, investigación de laboratorio y defensa civil.

## Principio de funcionamiento

El componente central de un contador Geiger es el **tubo Geiger–Müller (GM)**, un cilindro hueco lleno de gas que funciona como una cámara de ionización:

1. **Potencial de alto voltaje**: La pared cilíndrica exterior del tubo actúa como cátodo (conectado a tierra), mientras que un **[Cable](/es/materials/wire)** metálico fino que corre por el centro actúa como ánodo. Una **[Batería](/es/materials/battery)** conectada a un circuito elevador suministra un alto voltaje de corriente continua (normalmente de 400 a 900 voltios) a través de los electrodos, creando un fuerte campo eléctrico en el interior del tubo.
2. **Relleno de gas**: El tubo está sellado y lleno de un gas inerte (como argón o helio) mezclado con una pequeña cantidad de gas extintor o "quench" (como gas halógeno o vapor de alcohol) a baja presión (aprox. 0.1 atm).
3. **Cascada de ionización (Descarga de Townsend)**: Cuando una partícula de radiación ionizante penetra por la fina ventana de entrada del tubo (hecha de **[Vidrio](/es/materials/glass)** delgado o mica) o el cilindro de **[Metal](/es/materials/metal)**, choca con los átomos de gas, arrancando electrones y creando pares de iones ($Ar \rightarrow Ar^+ + e^-$).
4. **Multiplicación en avalancha**: Al acelerarse rápidamente hacia el cable central de alto voltaje, los electrones liberados chocan con otros átomos de gas, liberando electrones adicionales en una reacción en cadena (avalancha de Townsend).
5. **Salida de pulso eléctrico**: La repentina inundación de electrones que llegan al cable central genera un pulso agudo y medible de corriente eléctrica a través de una resistencia de carga. Este pulso activa un chasquido en un altavoz o incrementa un contador digital de pulsos.
6. **Extinción (Quenching)**: El gas extintor absorbe los iones positivos restantes y los fotones UV, evitando descargas continuas espurias y reajustando el tubo en microsegundos para registrar el siguiente conteo de radiación.

## Cómo crearlo

Para ensamblar un circuito de detección Geiger–Müller funcional básico:

1. **Construir u obtener un tubo GM**: Fabricar un cilindro de vidrio sellado revestido internamente con una fina malla o lámina metálica de cobre como cátodo, con un cable central ultra fino de tungsteno (0.05 mm de diámetro) tenso a lo largo del eje central. Llenar el tubo con gas argón mezclado con trazas de vapor de etanol a baja presión (~10 kPa), o utilizar un tubo GM comercial recuperado (como el SBM-20 o STS-5).
2. **Construir una fuente de alimentación de alto voltaje**: Construir un convertidor elevador de alto voltaje utilizando un pequeño transformador, un oscilador de transistores y una escalera multiplicadora de voltaje de diodos y condensadores para convertir de 3V a 9V de CC de batería hasta 400V–500V de CC.
3. **Ensamblar el circuito de carga y procesamiento de señal**: Conectar una resistencia de carga de alto valor ($4.7\text{--}10\,\text{M}\Omega$) en serie con el cátodo del tubo GM y la fuente de alto voltaje. Conectar un condensador de acoplamiento ($100\,\text{pF}$) desde la unión hacia un amplificador de audio con transistor o zumbador piezoeléctrico.
4. **Integrar la fuente de energía**: Conectar una **[Batería](/es/materials/battery)** de 9V a través de un interruptor para alimentar el generador de alto voltaje y el circuito del amplificador de audio.
5. **Calibrar y probar**: Encender la unidad en un entorno limpio para registrar la tasa de conteo de radiación ambiental de fondo (normalmente de 10 a 30 chasquidos por minuto debido a rayos cósmicos y radiación natural). Acercar una fuente radiactiva débil conocida (como un botón detector de humo de americio-241 o un manguito de linterna toriado) a la ventana delgada para verificar un aumento inmediato en la tasa de conteo.

_Nivel técnico_: Avanzado. Requiere generación de alto voltaje ($400\text{V}+$) y un manejo delicado de gases o la obtención de tubos detectores.

## Materiales necesarios

- **Sensores y contactos**:
  - Cilindro de **[Vidrio](/es/materials/glass)** sellado o tubo de metal delgado (cuerpo del tubo GM).
  - **[Cable](/es/materials/wire)** metálico fino (ánodo central de tungsteno o acero inoxidable).
  - Malla o lámina de **[Metal](/es/materials/metal)** para la funda exterior del cátodo.
- **Alimentación y electrónica**:
  - **[Batería](/es/materials/battery)** (fuente de alimentación de 9V o paquete de baterías).
  - Transformador elevador de alto voltaje y condensadores/diodos multiplicadores.
  - Resistencias de señal, condensadores de acoplamiento y zumbador/altavoz de audio.

## Variantes y mejoras

- **Tubos de extinción por halógeno**: Los tubos modernos utilizan gas cloro o bromo como extintores. A diferencia de los extintores de alcohol orgánico, los gases halógenos se recombinan tras la ionización, otorgando al tubo una vida útil prácticamente ilimitada.
- **Contadores de centelleo**: Utilizan un cristal (como yoduro de sodio) que emite destellos de luz al ser impactado por la radiación, detectados por un tubo fotomultiplicador. Esto ofrece capacidad de espectroscopía de energía más allá del simple conteo de partículas.
- **Contadores proporcionales**: Funcionan a voltajes más bajos que los contadores Geiger, lo que permite discriminar entre diferentes tipos de radiación (alfa frente a beta o gamma) según la amplitud del pulso.

## Límites y riesgos

- **Tiempo muerto**: Después de cada avalancha, los iones positivos forman una capa alrededor del cable central que reduce temporalmente el campo eléctrico. El tubo no puede detectar la radiación entrante subsecuente durante 50 a 200 microsegundos ("tiempo muerto"). En campos de radiación extremadamente altos, el contador puede saturarse y marcar cero ("parálisis").
- **Peligro por alto voltaje**: El circuito interno funciona de 400V a 900V de CC. Aunque la capacidad de corriente es baja, un manejo inadecuado puede causar descargas eléctricas molestas.
- **Sin espectroscopía de energía**: Los contadores Geiger estándar cuentan eventos de radiación, pero no pueden determinar la energía específica ni la especie isotópica exacta de la fuente radiactiva.
