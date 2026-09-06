---
title: "Puente de Wheatstone"
materialsUsed: ["copper", "wire", "wood", "battery"]
image: ../../../assets/images/inventions/wheatstone-bridge.jpg
---

# Breve descripción

Un instrumento de circuito eléctrico utilizado para medir una resistencia eléctrica desconocida mediante el equilibrio de dos ramas de un puente. Inventado por Samuel Hunter Christie y popularizado por Sir Charles Wheatstone en 1843, es la técnica fundamental de medición eléctrica para la determinación precisa de resistencia, temperatura y deformación física.

## Uso / Función

- **Medición de resistencia:** Determinación de resistencias eléctricas desconocidas con alta precisión hasta fracciones de ohmio.
- **Interfaz de sensores:** Lectura de sensores físicos (galgas extensométricas, termistores, fotorresistencias) cuya resistencia varía ante estímulos físicos.
- **Diagnóstico eléctrico:** Localización de fallos de aislamiento y cortes de cable en líneas telegráficas y redes eléctricas.
- **Escala:** Laboratorio, instrumentación industrial y pruebas de campo en electrónica.

## Principio de funcionamiento

1. **Topología en rombo:** Cuatro resistencias ($R_1$, $R_2$, $R_3$ y $R_x$) se conectan formando un lazo cerrado en rombo alimentado por una fuente de corriente continua (**[Batería](/es/materials/battery)**).
2. **Diferencia de potencial:** Un detector de corriente sensible (**[Galvanómetro](/es/inventions/galvanometer)**) se conecta entre los dos puntos medios opuestos del puente.
3. **Equilibrio del puente:** Cuando la relación de resistencias en la rama conocida ($R_1 / R_2$) es igual a la relación en la rama desconocida ($R_3 / R_x$), la diferencia de potencial en el galvanómetro cae a cero ($V_G = 0$), alcanzando el "punto nulo":
   $$\frac{R_1}{R_2} = \frac{R_3}{R_x} \implies R_x = R_3 \cdot \frac{R_2}{R_1}$$
4. **Precisión del método nulo:** Dado que la medición consiste en ajustar una resistencia variable graduada hasta eliminar el paso de corriente, la medida no depende de fluctuaciones en el voltaje de alimentación ni de alinealidades del detector.

## Cómo crearlo

1. **Construcción de la base:** Montar cuatro bornes de conexión en una tabla de material no conductor (**[Madera](/es/materials/wood)** o plástico).
2. **Cableado del puente:** Conectar las cuatro ramas formando un rombo mediante tiras de **[Cobre](/es/materials/copper)** o **[Cable](/es/materials/wire)** aislado.
3. **Instalación de componentes:**
   - Colocar resistencias fijas conocidas de alta precisión en las ramas $R_1$ y $R_2$.
   - Conectar una resistencia variable graduada (reóstato) en la rama $R_3$.
   - Conectar la resistencia desconocida a los bornes de prueba en $R_x$.
4. **Conexión de indicador y alimentación:** Cablear un **[Galvanómetro](/es/inventions/galvanometer)** sensible entre los puntos medios opuestos y conectar una **[Batería](/es/materials/battery)** a los terminales principales de alimentación.
5. **Calibración:** Ajustar $R_3$ hasta que la aguja del galvanómetro marque exactamente cero y aplicar la fórmula para hallar $R_x$.

## Materiales necesarios

- **Conexiones conductoras:** **[Cable](/es/materials/wire)** aislado y bornes de **[Cobre](/es/materials/copper)** de alta conductividad.
- **Fuente de alimentación:** Fuente CC de bajo voltaje o **[Batería](/es/materials/battery)** / **[Pila voltaica](/es/inventions/voltaic-pile)**.
- **Soporte base:** Tablero de **[Madera](/es/materials/wood)** seca o baquelita aislante.
- **Detector:** **[Galvanómetro](/es/inventions/galvanometer)** sensible o microamperímetro.

## Variantes y mejoras

- **Puente de hilo deslizable:** Sustituye $R_1$ y $R_2$ por un hilo de resistencia uniforme de 1 metro y un cursor deslizante.
- **Puente Kelvin:** Variante diseñada para eliminar los errores de resistencia de contacto al medir resistencias extremadamente bajas (microohmios).
- **Puente de Corriente Alterna (Maxwell / Hay):** Utiliza corriente alterna para medir capacidad e inductancia en redes eléctricas.

## Límites y riesgos

- **Calentamiento por efecto Joule:** Un voltaje excesivo de la batería puede calentar las resistencias del puente, alterando su valor y falseando la medición.
- **Sensibilidad del galvanómetro:** La precisión del cálculo depende directamente del umbral de detección del galvanómetro.
- **Resistencia de contacto:** Borneras sulfatadas o empalmes flojos introducen resistencias parásitas que perturban la medición.

### Inventos relacionados

- **[Galvanómetro](/es/inventions/galvanometer)**
- **[Pila voltaica](/es/inventions/voltaic-pile)**
- **[Resistencia](/es/inventions/resistor)**
- **[Telégrafo](/es/inventions/telegraph)**

### Materiales relacionados

- **[Cobre](/es/materials/copper)**
- **[Cable](/es/materials/wire)**
- **[Batería](/es/materials/battery)**
- **[Madera](/es/materials/wood)**
