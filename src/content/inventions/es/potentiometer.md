---
title: Potenciómetro
materialsUsed:
  - wire
  - wood
  - metal
  - copper
---

# Breve descripción

Un potenciómetro es un instrumento eléctrico de precisión utilizado para medir fuerzas electromotrices (FEM) desconocidas o diferencias de potencial comparándolas con una tensión de referencia conocida mediante el método de cero o equilibrio nulo. Concebido en 1841 por el físico alemán Johann Christian Poggendorff, el potenciómetro de medida se caracteriza por no extraer absolutamente ninguna corriente de la fuente bajo prueba en el punto de equilibrio. Este principio fundamental anula por completo los errores de medida causados por la resistencia interna de las pilas químicas o de los cables de conexión, constituyendo la base histórica de la metrología eléctrica, la calibración de sensores y la investigación electroquímica.

## Uso / Función

- **Medición de Fuerza Electromotriz Real:** Determinación del voltaje en circuito abierto de pilas primarias y secundarias sin provocar caída de tensión en su resistencia interna.
- **Calibración de Instrumentos Eléctricos:** Calibración directa de voltímetros, amperímetros y galvanómetros por comparación contra pilas patrón estables (como la pila Daniell o la pila Weston).
- **Medición de Resistencias de Precisión:** Evaluación de resistencias desconocidas comparando la caída de tensión producida con la de un resistor patrón en serie recorrido por la misma corriente.
- **Lectura de Transductores Sensibles:** Registro exacto de señales en milivoltios generadas por termopares y electrodos de pH sin sobrecargar ni perturbar el equilibrio químico de la celda.

## Principio de funcionamiento

1. **Divisor de Tensión Resistivo Uniforme:** Una corriente continua auxiliar constante procedente de una batería de trabajo fluye a través de un hilo conductor largo y perfectamente homogéneo tendido sobre una regla graduada. Dado que la resistencia es directamente proporcional a la longitud ($R = \rho \cdot L / A$), se establece una caída de tensión lineal y uniforme por cada unidad de longitud del hilo ($V/L = \text{constante}$).
2. **Estandarización del Gradiente de Potencial:** Se conecta una pila de referencia de tensión conocida ($E_{\text{patrón}}$) en serie con un galvanómetro sensible y se desplaza el contacto móvil hasta que la aguja indique cero absoluto, fijando el valor exacto del voltaje por milímetro de hilo.
3. **Circuito de Oposición Nula:** La fuente de tensión desconocida ($E_x$) se conecta en oposición de polaridad con respecto al tramo recorrido por la corriente de trabajo. Debido a esta oposición, solo circulará corriente si la caída de tensión en el tramo de hilo difiere de la FEM que se quiere medir.
4. **Medición a Corriente Cero:** El cursor o contacto deslizante se desplaza a lo largo del hilo hasta que la caída de potencial del segmento iguala exactamente la FEM externa ($E_x = I \cdot R_x$). En este punto de equilibrio nulo, la corriente a través del galvanómetro se anula por completo ($I = 0$), midiendo la fuente en circuito abierto ideal.
5. **Cálculo por Proporcionalidad Directa:** El valor de la tensión desconocida se deduce mediante una simple regla de tres con las longitudes de hilo correspondientes ($E_x = E_{\text{patrón}} \cdot L_x / L_{\text{patrón}}$).

## Cómo crearlo

1. **Preparar el Tablero Base:** Cepillar y secar una tabla de madera estable (de 1 metro de longitud o con acanaladuras para albergar varios tramos de 1 metro en zigzag) e incrustar una regla métrica graduada en milímetros.
2. **Montar el Hilo de Resistencia Calibrado:** Extender un hilo resistente uniforme y de bajo coeficiente térmico (constantán, manganina o alpaca) tensado entre bornes fijos de latón sobre la escala métrica.
3. **Construir el Cursor de Contacto (Jockey):** Fabricar una pieza móvil de latón provista de un filo de cuchilla metálico y un mango aislante, diseñada para hacer contacto eléctrico puntual y limpio sobre el hilo sin deformarlo ni marcar muescas mecánicas.
4. **Instalar el Circuito de Alimentación Auxiliar:** Conectar una batería auxiliar de trabajo (acumulador de plomo o pila Daniell) en serie con un reóstato de regulación fina y los extremos del hilo de medida para ajustar una corriente de trabajo constante.
5. **Incorporar Galvanómetro e Interruptor Inversor:** Conectar un galvanómetro sensible de cero central y un conmutador de dos posiciones para alternar rápidamente entre la pila patrón de calibración y la fuente bajo prueba.
6. **Estandarizar y Realizar la Medida:** Calibrar la caída de tensión por centímetro con la pila patrón, conmutar a la fuente desconocida, deslizar el cursor hasta obtener corriente nula en el galvanómetro y calcular la FEM resultante a partir de la distancia leída.

## Materiales necesarios

- **Esenciales:** **[Alambre](/es/materials/wire)** de alta resistividad y coeficiente de temperatura casi nulo (constantán o manganina) para el hilo de medida; **[Madera](/es/materials/wood)** estacionada para la base aislante y estable; **[Metal](/es/materials/metal)** (latón) para bornes, tornillos de apriete y la cuchilla del cursor deslizante; y **[Cobre](/es/materials/copper)** aislado para el cableado interno del circuito.
- **Herramientas:** Herramientas de carpintería básica, soldador de estaño, regla milimétrica, galvanómetro sensible de cero central, pila química de referencia.
- **Sustitutos:** Los potenciómetros modernos utilizan pistas helicoidales multivuelta (Helipot) o pistas rotativas de carbono; los potenciómetros comerciales de audio derivan su nombre y diseño divisor de tensión de este aparato.

## Variantes y mejoras

- **Potenciómetro de Hilo Rectilíneo:** El diseño clásico de laboratorio de física escolar con hilos tendidos de uno a cuatro metros sobre bancada de madera.
- **Potenciómetro de Crompton:** Incorpora bobinas internas de resistencia escalonadas combinadas con un pequeño tramo de hilo deslizable dializado, multiplicando la resolución efectiva y reduciendo el tamaño del instrumento.
- **Potenciómetro de Doble Rango:** Permite conmutar mediante shunts internos entre escalas de voltios (0 a 2 V) y escalas de milivoltios (0 a 20 mV) para mediciones termopares de alta sensibilidad.
- **Potenciómetro Rotativo:** Componente electrónico pasivo universal consistente en una pista resistiva circular con un cursor rotativo de grafito o metal noble para control de volumen o atenuación de señal.

## Límites y riesgos

- **Desgaste y Muescas en el Hilo:** Una presión excesiva o repetida del cursor sobre el hilo de medida causa estrías mecánicas y variaciones de sección, arruinando la linealidad de la resistencia por unidad de longitud.
- **Deriva de la Batería Auxiliar:** A medida que la batería de trabajo se descarga o sufre cambios térmicos, la corriente principal varía, requiriendo frecuentes recalibraciones contra la pila patrón.
- **Fuerzas Termoelectromotrices Parásitas:** El calor de los dedos transmitido a los bornes metálicos o el contacto bimetálico entre el hilo y la cuchilla pueden generar microtensiones termoeléctricas que alteren las lecturas en el rango de los microvoltios.

### Inventos relacionados

- **[Puente de Wheatstone](/es/inventions/wheatstone-bridge)**
- **[Galvanómetro](/es/inventions/galvanometer)**
- **[Pila Daniell](/es/inventions/daniell-cell)**
- **[Pila voltaica](/es/inventions/voltaic-pile)**
- **[Resistor](/es/inventions/resistor)**

### Materiales relacionados

- **[Alambre](/es/materials/wire)**
- **[Madera](/es/materials/wood)**
- **[Metal](/es/materials/metal)**
- **[Cobre](/es/materials/copper)**
