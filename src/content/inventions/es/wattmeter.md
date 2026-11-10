---
title: Vatímetro
materialsUsed:
  - copper
  - iron
  - wire
  - brass
  - wood
---

# Breve descripción

Un vatímetro (de vatio y metro) es un instrumento de medida eléctrica diseñado para determinar la tasa de transferencia de energía eléctrica, o potencia activa, consumida o suministrada en un circuito eléctrico, expresada en vatios ($W$). A diferencia de los amperímetros y voltímetros que miden parámetros individuales de forma aislada, el vatímetro electrodinámico combina dos conjuntos de bobinas (bobinas amperimétricas fijas y una bobina voltimétrica móvil) para calcular de manera mecánica e instantánea el producto de la tensión, la corriente y el factor de potencia ($P = V \times I \times \cos\theta$). En la reconstrucción de redes eléctricas y maquinaria industrial, el vatímetro es indispensable para coordinar la carga mecánica sobre generadores, ajustar la excitación en alternadores y evitar sobrecargas críticas en calderas o turbinas.

## Uso / Función

- **Medición de Potencia Activa Real:** Determinación del consumo eléctrico efectivo en receptores, redes de alumbrado, hornos resistivos y motores de tracción.
- **Supervisión de Alternadores y Dínamos:** Control de la potencia suministrada por grupos generadores accionados por vapor, agua o combustión para evitar el calado del motor primario.
- **Cálculo del Factor de Potencia:** Empleo conjunto con voltímetros y amperímetros en corriente alterna para evaluar desfases reactivos ($\cos\theta$) y optimizar líneas.
- **Diagnóstico de Rendimiento y Pérdidas:** Cuantificación precisa de pérdidas en el hierro y en el cobre en transformadores y maquinaria de conversión rotativa.

## Principio de funcionamiento

1. **Principio Electrodinámico:** El instrumento aprovecha las fuerzas mecánicas mutuas que surgen entre conductores que transportan corriente, sin necesidad de imanes permanentes de hierro en la zona activa.
2. **Bobinas de Intensidad (Fijas):** Dos bobinas estacionarias de grueso calibre conectadas en serie estricta con la carga generan un campo magnético $B$ directamente proporcional a la corriente instantánea $I$.
3. **Bobina de Tensión (Móvil):** Una bobina ligera y pivoteada, arrollada con hilo fino y conectada en serie con una gran resistencia no inductiva, se conecta en paralelo con la carga, conduciendo una corriente proporcional al voltaje instantáneo $V$.
4. **Par Motor Proporcional al Producto:** La interacción magnética entre el campo fijo y el móvil genera un par de giro instantáneo proporcional en todo momento al producto $v(t) \cdot i(t)$.
5. **Amortiguamiento y Promediado:** Los resortes espirales antagónicos equilibran el par motor mientras que un amortiguador de paleta de aire suaviza las oscilaciones, haciendo que la aguja señale el valor medio de la potencia activa eficaz.

## Cómo crearlo

1. **Elaborar la Caja Amagnética:** Construir una carcasa rígida de **[Madera](/es/materials/wood)** curada o ebonita con mirilla de cristal plano y cámara sellada para amortiguamiento neumático por paleta.
2. **Bobinar las Bobinas Fijas de Corriente:** Arrollar dos bobinas idénticas y coaxiales de **[Hilo](/es/materials/wire)** grueso de **[Cobre](/es/materials/copper)** electrolítico sobre soportes dieléctricos, fijándolas firmemente dejando un espacio central abierto entre ambas.
3. **Construir el Cuadro Móvil Voltimétrico:** Bobinar decenas de espiras de hilo de cobre extrafino sobre un armazón circular o rectangular ultraligero; montar el conjunto sobre un eje de acero templado con conos de apoyo o cojinetes pulidos de **[Latón](/es/materials/brass)**.
4. **Instalar Espirales de Control y Aguja:** Colocar dos espirales concéntricas opuestas de bronce fosforoso o latón elástico que ejerzan el par antagónico y conduzcan la corriente de tensión sin fricción; fijar una aguja equilibrada con contrapesos.
5. **Montar la Resistencia Multiplicadora No Inductiva:** Conectar en serie estricta con la bobina móvil una resistencia de alto valor óhmico arrollada de forma no inductiva sobre placas aislantes de mica o cerámica, minimizando el desfase inductivo.
6. **Disponer los Bornes de Conexión:** Instalar cuatro robustos bornes roscados de **[Latón](/es/materials/brass)**: dos bornes gruesos de intensidad para la conexión en serie con la carga, y dos bornes aislados de tensión para la conexión en paralelo. El blindaje magnético exterior puede emplear láminas de **[Hierro](/es/materials/iron)** dulce alejadas del entrehierro para bloquear perturbaciones externas.

## Materiales necesarios

- **Esenciales:** **[Cobre](/es/materials/copper)** de alta pureza e **[Hilo](/es/materials/wire)** esmaltado para el bobinado de corriente y de tensión; **[Hierro](/es/materials/iron)** dulce reservado exclusivamente para la pantalla de blindaje externa; **[Latón](/es/materials/brass)** para los terminales de borne y elementos de pivote; y **[Madera](/es/materials/wood)** u otro aislante para el cuerpo estructural.
- **Herramientas:** Bobinadora manual, soldador de estaño, pinzas de precisión, destornilladores, voltímetro, amperímetro y banco de cargas resistivas puras de calibración.
- **Sustitutos:** En circuitos exclusivos de corriente continua libre de rizado, el cálculo de potencia puede realizarse multiplicando de forma aritmética las lecturas simultáneas de un amperímetro y un voltímetro independientes.

## Variantes y mejoras

- **Vatímetro Electrodinámico:** El diseño canónico apto tanto para corriente continua como alterna, independiente de la forma de onda dentro de frecuencias industriales.
- **Vatímetro de Inducción:** Basado en campos magnéticos giratorios y corrientes inducidas de Foucault en un disco de aluminio giratorio; base de los contadores domésticos de energía activa (vatio-hora).
- **Vatímetro Térmico:** Opera mediante termopares acoplados a resistencias de caldeo; idóneo para altas frecuencias de radio donde la reactancia de las bobinas falsea el sistema electrodinámico.
- **Vatímetro Polifásico:** Agrupa dos o tres sistemas electrodinámicos independientes acoplados mecánicamente a un mismo eje para registrar la potencia total de una red trifásica siguiendo el teorema de Blondel.

## Límites y riesgos

- **Peligro de Sobrecarga Oculta:** La aguja del vatímetro puede marcar valores moderados mientras su bobina de corriente o de tensión sufre una sobrecarga letal que la quema por efecto Joule (común cuando el factor de potencia es muy bajo).
- **Error por Desfase Inductivo Interno:** Cualquier inductancia residual en la bobina móvil o en su resistencia serie altera el ángulo de fase relativo, provocando desvíos significativos al medir circuitos muy inductivos o capacitivos.
- **Riesgo de Cortocircuito y Descarga:** La conexión errónea de los bornes de tensión en serie o de los de corriente en paralelo puede provocar cortocircuitos francos con proyección de metal fundido y arcos destructivos.

### Inventos relacionados

- **[Galvanómetro](/es/inventions/galvanometer)**
- **[Amperímetro](/es/inventions/ammeter)**
- **[Voltímetro](/es/inventions/voltmeter)**
- **[Generador Eléctrico](/es/inventions/electric-generator)**
- **[Dínamo](/es/inventions/dynamo)**
- **[Resistencia](/es/inventions/resistor)**

### Materiales relacionados

- **[Cobre](/es/materials/copper)**
- **[Hierro](/es/materials/iron)**
- **[Hilo](/es/materials/wire)**
- **[Latón](/es/materials/brass)**
- **[Madera](/es/materials/wood)**
