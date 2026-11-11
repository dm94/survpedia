---
title: Sincronoscopio
materialsUsed:
  - copper
  - iron
  - steel
  - brass
  - wire
  - wood
---

# Breve descripción

Un sincronoscopio es un instrumento de medida electrodinámica empleado para determinar la diferencia exacta de fase y de frecuencia entre dos circuitos o fuentes de corriente alterna, comúnmente entre un generador entrante y una red de distribución en servicio. En los sistemas de energía de corriente alterna, los alternadores no pueden conectarse en paralelo de forma arbitraria; acoplar dos fuentes desfasadas equivale a provocar un cortocircuito violento que puede torcer o partir los ejes de transmisión, destrozar los bobinados del estator y provocar el colapso total de la red. El sincronoscopio proporciona al operador una aguja giratoria continua que indica de manera inequívoca si la máquina entrante gira demasiado lenta o demasiado rápida, deteniéndose apuntando exactamente a las "12 en punto" en el instante preciso de coincidencia de fase, indicando el momento seguro para cerrar el disyuntor principal.

## Uso / Función

- **Acoplamiento en Paralelo de Generadores:** Detección del instante exacto y seguro para cerrar el interruptor que conecta un alternador entrante a una red eléctrica activa.
- **Ajuste de Velocidad de Máquinas Motrices:** Indicación visual del desfase relativo para guiar al fogonero o maquinista en el aumento o reducción de combustible o vapor en la turbina.
- **Verificación de Coincidencia de Fase:** Comprobación rigurosa de que las crestas y valles de las ondas senoidales de tensión coinciden en el tiempo sin desfase angular.
- **Cuadros Centrales de Distribución:** Instrumento angular imprescindible en salas de control de centrales hidroeléctricas, térmicas y buques con múltiples grupos electrógenos.

## Principio de funcionamiento

1. **Alimentación Doble Independiente:** El instrumento recibe dos señales de tensión independientes (usualmente reducidas a 110 V mediante transformadores de medida): una proveniente de las barras de la red general y otra del alternador entrante.
2. **Campo Magnético Giratorio en el Estator:** La tensión de las barras alimenta dos devanados estatóricos desfasados entre sí $90^\circ$ eléctricos (mediante una red desfasadora resistivo-inductiva o capacitiva), generando un campo magnético giratorio uniforme en el entrehierro.
3. **Dipolo Magnético en el Rotor:** La tensión del generador entrante excita una bobina montada sobre el rotor mediante anillos rozantes y escobillas elásticas, induciendo un campo magnético alterno pulsante.
4. **Par de Giro Proporcional al Desfase:** La interacción entre el campo giratorio del estator y el campo alterno del rotor produce un par mecánico resultante proporcional al desfase angular relativo instantáneo entre ambas fuentes.
5. **Rotación Continua por Deslizamiento:** Si el alternador entrante gira más despacio que la red, la aguja gira en sentido antihorario ("LENTO"); si gira más rápido, la aguja rota en sentido horario ("RÁPIDO").
6. **Coincidencia Síncrona:** Cuando ambas frecuencias se igualan y sus tensiones están perfectamente en fase, el par neto fija la aguja en posición completamente vertical sobre la marca índice superior (las "12 en punto"), habilitando el cierre del interruptor sin perturbación.

## Cómo crearlo

1. **Elaborar la Caja Protectora:** Construir una sólida carcasa de **[Madera](/es/materials/wood)** estacionada o fundición amagnética, provista de una carátula frontal circular con mirilla de cristal y marcas legibles "LENTO", "RÁPIDO" e índice de sincronismo en la cúspide.
2. **Fabricar el Estator Laminado:** Apilar delgadas láminas de **[Hierro](/es/materials/iron)** dulce aisladas entre sí con barniz formando un anillo ranurado interno que contenga las pérdidas por histéresis y corrientes parásitas.
3. **Bobinar los Devanados Estatóricos:** Alojar en las ranuras dos fases devanadas con **[Hilo](/es/materials/wire)** esmaltado de **[Cobre](/es/materials/copper)** dispuestas en cuadratura eléctrica, conectadas a un divisor de fase capacitivo o inductivo para generar el campo giratorio.
4. **Ensamblar el Rotor y el Eje:** Montar un núcleo ferromagnético arrollado con hilo fino de cobre sobre un eje de **[Acero](/es/materials/steel)** templado rectificado, apoyado sobre cojinetes pulidos de **[Latón](/es/materials/brass)** o rubíes sintéticos.
5. **Instalar Anillos Rozantes y Escobillas:** Ajustar dos anillos concéntricos aislados de **[Latón](/es/materials/brass)** sobre el eje y montar dos escobillas flexibles de bronce fosforoso o latón conectadas a los bornes del alternador entrante.
6. **Equilibrar la Aguja y el Amortiguador:** Montar una aguja ligera de latón o aluminio equilibrada con contrapesos en el extremo del eje; añadir una paleta de amortiguamiento por aire para evitar oscilaciones parásitas sin restarle reactividad.

## Materiales necesarios

- **Esenciales:** **[Hierro](/es/materials/iron)** dulce laminado para los núcleos estatórico y rotórico; **[Cobre](/es/materials/copper)** e **[Hilo](/es/materials/wire)** de cobre esmaltado para todas las bobinas; **[Acero](/es/materials/steel)** templado para el eje central de giro; **[Latón](/es/materials/brass)** para los anillos rozantes, portaescobillas, bornes y aguja; y **[Madera](/es/materials/wood)** u otro soporte aislante para la caja.
- **Herramientas:** Torno de precisión, bobinadora manual, destornilladores de precisión, soldador, voltímetro y alternadores auxiliares o transformadores para comprobación en banco.
- **Sustitutos:** Previo al desarrollo de sincronoscopios electrodinámicos, el sincronismo se lograba mediante el "método de las tres lámparas" (lámparas incandescentes conectadas entre fases de ambos circuitos que se encendían y apagaban rítmicamente al ritmo del deslizamiento).

## Variantes y mejoras

- **Sincronoscopio de Hierro Móvil:** Utiliza paletas de hierro polarizadas por bobinas estacionarias, prescindiendo por completo de anillos rozantes y escobillas para mayor fiabilidad y menor rozamiento.
- **Sincronoscopio Tipo Lincoln (Bobina Móvil):** Sistema clásico con rotor devanado y anillos rozantes que ofrece un par motor muy definido incluso ante mínimas diferencias de frecuencia.
- **Lámparas de Fase (Sincronización Óptica):** Sistema auxiliar sin componentes mecánicos en movimiento que emplea el parpadeo de bombillas de filamento para visualizar el batido entre frecuencias.
- **Relé Automático de Sincronización:** Módulo moderno de estado sólido que monitoriza de forma electrónica el ángulo de desfase y envía de manera autónoma el pulso de disparo al disyuntor en el instante óptimo.

## Límites y riesgos

- **Peligro Catastrófico de Falsa Maniobra:** El cierre del disyuntor fuera de fase somete a las máquinas a esfuerzos mecánicos brutales capaces de desalinear turbinas, romper engranajes y desatar incendios eléctricos masivos.
- **Vulnerabilidad por Lámpara Fundida:** En métodos auxiliares por lámparas, la rotura accidental de un filamento puede simular un estado falso de "lámpara oscura" de sincronismo, induciendo a un cierre catastrófico.
- **Desgaste y Suciedad en Escobillas:** La acumulación de carbonilla o suciedad en los anillos rozantes introduce falsos rebotes o interrupciones que entorpecen el movimiento uniforme de la aguja.
- **Invisibilidad de la Tensión:** El sincronoscopio no compara magnitudes absolutas de tensión, únicamente su desfase angular y frecuencia; es obligatorio verificar previamente la igualdad de voltaje con un voltímetro para evitar corrientes reactivas destructivas.

### Inventos relacionados

- **[Frecuencímetro](/es/inventions/frequency-meter)**
- **[Generador Eléctrico](/es/inventions/electric-generator)**
- **[Voltímetro](/es/inventions/voltmeter)**
- **[Vatímetro](/es/inventions/wattmeter)**
- **[Transformador](/es/inventions/transformer)**
- **[Dínamo](/es/inventions/dynamo)**

### Materiales relacionados

- **[Cobre](/es/materials/copper)**
- **[Hierro](/es/materials/iron)**
- **[Acero](/es/materials/steel)**
- **[Latón](/es/materials/brass)**
- **[Hilo](/es/materials/wire)**
- **[Madera](/es/materials/wood)**
