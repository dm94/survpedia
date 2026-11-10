---
title: Óhmetro
materialsUsed:
  - copper
  - iron
  - wire
  - brass
  - battery
  - wood
---

# Breve descripción

Un óhmetro (u ohmímetro, de ohmio y metro) es un instrumento de medida eléctrica concebido para determinar el valor de la resistencia eléctrica de un componente, material o conductor desconocido, expresado en ohmios ($\Omega$). Basado en el movimiento de un galvanómetro de bobina móvil alimentado por una fuente interna de tensión continua, el óhmetro permite comprobar al instante la continuidad de los circuitos, verificar el aislamiento dieléctrico y ajustar cargas resistivas sin necesidad de realizar complejos cálculos simultáneos de tensión e intensidad. En la reconstrucción tecnológica y el mantenimiento de infraestructuras eléctricas, el óhmetro es una herramienta diagnóstica indispensable para rescatar y clasificar tendidos de cables, comprobar bobinados de motores y generadores y detectar cortocircuitos o roturas.

## Uso / Función

- **Medición de Resistencia de Componentes:** Cuantificación del valor resistivo exacto en reóstatos, resistencias fijas, filamentos incandescentes y elementos calefactores.
- **Ensayos de Continuidad y Detección de Fallas:** Comprobación rápida de rutas conductoras ininterrumpidas o localización de falsos contactos y cortocircuitos indeseados.
- **Diagnóstico de Bobinados y Motores:** Verificación del estado de devanados en alternadores, dínamos, transformadores y motores para descartar espiras comunicadas o derivaciones a masa.
- **Caracterización de Materiales:** Evaluación de la conductividad o resistividad de aleaciones, tierras de puesta a masa, soluciones químicas y aislamientos.

## Principio de funcionamiento

1. **Alimentación Interna de Tensión:** Una celda galvánica o batería interna proporciona una tensión continua pequeña y conocida al circuito de prueba formado por el instrumento y la resistencia a medir.
2. **Deflexión Inversa según la Ley de Ohm:** Al cerrar el circuito a través de una resistencia incógnita $R_x$, la corriente circulante obedece a $I = V / (R_m + R_x)$, donde $R_m$ es la resistencia interna total del medidor.
3. **Escala Invertida:** Cuanto mayor es la resistencia externa, menor es la corriente que atraviesa la bobina y menor su ángulo de deflexión; con resistencia nula (cortocircuito entre bornes), la corriente es máxima (deflexión a fondo de escala), mientras que con circuito abierto la aguja permanece en reposo (resistencia infinita).
4. **Ajuste de Cero Óhmico:** Debido a que la tensión de la celda galvánica disminuye con el uso y el tiempo, un potenciómetro o reóstato en serie permite ajustar la aguja exactamente sobre la marca de $0\,\Omega$ antes de cada serie de medidas uniendo las puntas de prueba.
5. **Comportamiento No Lineal:** Como la corriente es inversamente proporcional a la resistencia ($I \propto 1/R$), la escala grabada en la carátula no es lineal, concentrándose densamente hacia el infinito y abriéndose ampliamente en las proximidades del cero.

## Cómo crearlo

1. **Construir el Chasis Aislante:** Fabricar una caja sólida de **[Madera](/es/materials/wood)** seca curada o baquelita provista de una ventana frontal transparente y bornes o clavijas de conexión aislados.
2. **Ensamblar el Núcleo Magnético:** Fijar un imán permanente de herradura forjado en **[Hierro](/es/materials/iron)** imantado o acero templado, rodeando piezas polares cóncavas y un cilindro central de hierro dulce para crear un entrehierro uniforme.
3. **Devanar el Cuadro Móvil:** Arrollar docenas de espiras de hilo ultrafino de **[Cobre](/es/materials/copper)** y **[Hilo](/es/materials/wire)** esmaltado en un marco ultraligero de aluminio sustentado por pivotes de acero sobre asientos cónicos pulidos, dotado de resortes espirales antagónicos de bronce fosforoso.
4. **Integrar el Circuito Calibrador:** Conectar en serie con el cuadro móvil una resistencia fija de precisión y un potenciómetro de hilo con cursor de **[Latón](/es/materials/brass)** para el ajuste fino de cero.
5. **Instalar la Batería Interna:** Alojar un acumulador o celda galvánica seca de **[Batería](/es/materials/battery)** (de 1,5 V a 3 V) en un compartimento accesible, conectándola en serie con el movimiento sensible, el reóstato y los terminales de prueba.
6. **Calibrar y Graduar el Dial:** Conectar sucesivamente resistencias patrón de valores conocidos entre las puntas de prueba y rotular minuciosamente la carátula de lectura desde $0\,\Omega$ hasta el límite legible e $\infty$.

## Materiales necesarios

- **Esenciales:** **[Cobre](/es/materials/copper)** e **[Hilo](/es/materials/wire)** esmaltado para el devanado móvil y las conexiones; imán permanente de **[Hierro](/es/materials/iron)** o aleación ferromagnética; **[Batería](/es/materials/battery)** galvánica para suministrar tensión continua constante; **[Latón](/es/materials/brass)** para bornes, tornillos y cursor del potenciómetro; y **[Madera](/es/materials/wood)** u otro material dieléctrico para la carcasa.
- **Herramientas:** Soldador de estaño, pelacables de precisión, destornilladores pequeños, pinzas de relojero, puente de Wheatstone o resistencias patrón de referencia para el calibrado.
- **Sustitutos:** Un galvanómetro de brújula o tangentes accionado por una pila externa Daniell y contrastado mediante una caja de resistencias por sustitución permite improvisar mediciones de resistencia si se carece de bobinas móviles D'Arsonval.

## Variantes y mejoras

- **Óhmetro en Serie:** El diseño estándar en el que la resistencia incógnita se coloca en serie con la batería y el medidor; óptimo para resistencias medias y altas ($10\,\Omega$ a $100\,\text{k}\Omega$).
- **Óhmetro en Paralelo (Shunt):** La resistencia incógnita se conecta en paralelo con el galvanómetro; la aguja marca $0\,\Omega$ en reposo y deflexiona al máximo con circuito abierto, idóneo para resistencias muy reducidas (fracciones de ohmio).
- **Megóhmetro (Megger):** Dispositivo que utiliza una pequeña dínamo o magneto de manivela capaz de entregar de 250 V a 1000 V de tensión continua, empleando un movimiento de doble bobina cruzada para medir fugas en aislamientos de alta tensión.
- **Óhmetro Multiescala:** Dispone de un conmutador selector de resistencias multiplicadoras y derivaciones con varias tensiones de alimentación para cubrir distintas escalas ($\times 1$, $\times 10$, $\times 100$, $\times 10\,\text{k}$).

## Límites y riesgos

- **Peligro en Circuitos Bajo Tensión:** Jamás debe conectarse un óhmetro a un circuito energizado con corriente externa; cualquier voltaje inducido destruirá al instante la bobina sensible y quemará las resistencias de calibración.
- **Descarga de la Batería Interna:** Dejar las puntas de prueba en contacto o medir resistencias bajas de forma ininterrumpida agota la batería interna, produciendo descalibraciones y lecturas erróneas.
- **Riesgo de Daño Térmico en Muestras Delicadas:** En las escalas más bajas, la corriente de prueba que inyecta el óhmetro puede calentar excesivamente filamentos delicados, empalmes de termopares o componentes muy sensibles.

### Inventos relacionados

- **[Galvanómetro](/es/inventions/galvanometer)**
- **[Amperímetro](/es/inventions/ammeter)**
- **[Voltímetro](/es/inventions/voltmeter)**
- **[Puente de Wheatstone](/es/inventions/wheatstone-bridge)**
- **[Potenciómetro](/es/inventions/potentiometer)**
- **[Resistencia](/es/inventions/resistor)**

### Materiales relacionados

- **[Cobre](/es/materials/copper)**
- **[Hierro](/es/materials/iron)**
- **[Hilo](/es/materials/wire)**
- **[Latón](/es/materials/brass)**
- **[Batería](/es/materials/battery)**
- **[Madera](/es/materials/wood)**
