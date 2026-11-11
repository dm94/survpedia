---
title: Frecuencímetro
materialsUsed:
  - copper
  - iron
  - steel
  - brass
  - wire
  - wood
---

# Breve descripción

Un frecuencímetro es un instrumento de medida eléctrica diseñado para determinar la frecuencia o número de oscilaciones por segundo (expresada en hercios, $\text{Hz}$) de una fuente de corriente alterna (CA). En la reconstrucción de redes eléctricas y maquinaria industrial, el frecuencímetro es indispensable para coordinar la velocidad de rotación de turbinas hidráulicas, máquinas de vapor y motores de combustión acoplados a alternadores. Mantener una frecuencia constante es imperativo: los transformadores sufren sobrecalentamiento y saturación magnética letal si la frecuencia desciende excesivamente, mientras que los motores de inducción y relojes síncronos varían su velocidad de forma proporcional a las oscilaciones de frecuencia.

## Uso / Función

- **Supervisión de Redes de Corriente Alterna:** Verificación continua de que la energía generada mantiene la frecuencia nominal de trabajo (generalmente 50 Hz o 60 Hz).
- **Regulación de Gobernadores y Turbinas:** Calibración de reguladores centrífugos en calderas de vapor o turbinas Pelton para estabilizar las revoluciones ante cambios bruscos de carga.
- **Protección de Máquinas y Transformadores:** Prevención de caídas de frecuencia que reducen la reactancia inductiva ($X_L = 2\pi f L$), evitando corrientes magnetizantes descontroladas y averías térmicas.
- **Calibración de Comunicaciones y Circuitos Resonantes:** Ajuste de generadores de audio, emisores de chispa y filtros sintonizados a bandas de frecuencia definidas.

## Principio de funcionamiento

1. **Excitación Electromagnética:** La tensión alterna de la línea se conecta a través de una resistencia limitadora a un electroimán fijado a un núcleo de hierro dulce.
2. **Pulsos Magnéticos Periódicos:** La corriente alterna genera un campo magnético oscilante que atrae mecánicamente las piezas ferrosas dos veces por cada ciclo completo de CA.
3. **Resonancia Mecánica (Lengüetas de Frahm):** Delante de los polos del electroimán se sitúa un peine de lengüetas elásticas de acero templado, graduadas de tal forma que cada una posee una frecuencia natural de resonancia mecánica distinta.
4. **Amplificación por Resonancia:** Aquellas lengüetas cuya frecuencia propia difiere de la del campo magnético permanecen casi inmóviles, mientras que la lengüeta afinada exactamente a la frecuencia de oscilación de la red entra en vibración violenta con máxima amplitud.
5. **Lectura Óptica Directa:** Los extremos de las lengüetas, esmaltados en blanco, forman una franja ensanchada visible contra un fondo oscuro graduado, permitiendo al operador conocer la frecuencia sin engranajes, rozamientos de cojinetes ni espirales antagónicas.

## Cómo crearlo

1. **Construir el Chasis Amagnético:** Ensamblar una carcasa de **[Madera](/es/materials/wood)** estacionada o material amagnético con ventana frontal de vidrio plano y soportes de fijación antivibratorios.
2. **Fabricar el Electroimán:** Devanar centenares de espiras de **[Hilo](/es/materials/wire)** de **[Cobre](/es/materials/copper)** esmaltado alrededor de un núcleo de chapas laminadas de **[Hierro](/es/materials/iron)** dulce para minimizar las corrientes de Foucault.
3. **Cortar las Lengüetas Resonantes:** Recortar láminas estrechas y delgadas de fleje elástico de **[Acero](/es/materials/steel)** templado; fijar la base de todas las lengüetas en un bloque macizo de **[Latón](/es/materials/brass)** común.
4. **Calibrar y Afinar las Lengüetas:** Limar cuidadosamente los extremos libres o añadir diminutas gotas de soldadura para ajustar su masa y rigidez en intervalos de 0.5 Hz (por ejemplo, entre 45 Hz y 55 Hz), empleando diapasones acústicos patrón o un alternador mecánico de referencia.
5. **Pintar Extremos y Escala Frontal:** Aplicar esmalte blanco brillante sobre la punta frontal de cada lengüeta y situar por detrás una placa graduada con los valores numéricos correspondientes.
6. **Conectar la Resistencia Reductora Serie:** Intercalar en serie con el electroimán una resistencia bobinada no inductiva para limitar la corriente y disipar el exceso de tensión sin calentar la bobina.

## Materiales necesarios

- **Esenciales:** Fleje elástico de **[Acero](/es/materials/steel)** templado para las lengüetas de resonancia; **[Hilo](/es/materials/wire)** esmaltado y **[Cobre](/es/materials/copper)** para el devanado del electroimán; **[Hierro](/es/materials/iron)** dulce laminado para el núcleo magnético; **[Latón](/es/materials/brass)** para los bloques de amarre y bornes roscados; y **[Madera](/es/materials/wood)** para la caja protectora.
- **Herramientas:** Cizalla de banco, limas de relojero, soldador de estaño, micrómetro, diapasones acústicos patrón o estroboscopio para calibración.
- **Sustitutos:** Si no se dispone de flejes elásticos de acero calibrados, puede construirse un frecuencímetro electrodinámico de cociente empleando dos circuitos paralelos (uno puramente resistivo-inductivo y otro capacitivo) que actúan sobre bobinas cruzadas fijadas a una aguja indicadora.

## Variantes y mejoras

- **Frecuencímetro de Lengüetas Vibrantes (Tipo Frahm):** Máxima robustez mecánica, insensible a fluctuaciones de voltaje ambiental e inmune al desgaste por carecer de pivotes móviles.
- **Frecuencímetro Electrodinámico (Ratiométrico):** Emplea bobinas cruzadas equilibradas cuyo par resultante desplaza una aguja sobre una escala graduada continua sin saltos discretos.
- **Frecuencímetro de Inducción de Disco:** Utiliza corrientes parásitas y circuitos resonantes desfasados para inducir rotación antagonista en un disco ligero de aluminio.
- **Contador Digital de Frecuencia:** Instrumento electrónico moderno basado en puertas lógicas y osciladores de cuarzo que cuenta directamente el número de pasos por cero de la onda en un segundo.

## Límites y riesgos

- **Sensibilidad a Armónicos:** Formas de onda fuertemente distorsionadas generadas por alternadores deficientes pueden excitar lengüetas armónicas secundarias, provocando confusión visual en la lectura.
- **Tensión Mínima de Trabajo:** Si el voltaje de la red desciende excesivamente por debajo del valor nominal, la intensidad de campo magnético no alcanzará a excitar la vibración visible de las lengüetas.
- **Riesgo por Alta Tensión:** La conexión accidental o directa a barras de media o alta tensión sin transformadores reductores de aislamiento puede provocar arcos eléctricos mortales y la destrucción del aparato.

### Inventos relacionados

- **[Tacómetro](/es/inventions/tachometer)**
- **[Generador Eléctrico](/es/inventions/electric-generator)**
- **[Voltímetro](/es/inventions/voltmeter)**
- **[Vatímetro](/es/inventions/wattmeter)**
- **[Estroboscopio](/es/inventions/stroboscope)**
- **[Transformador](/es/inventions/transformer)**

### Materiales relacionados

- **[Cobre](/es/materials/copper)**
- **[Hierro](/es/materials/iron)**
- **[Acero](/es/materials/steel)**
- **[Latón](/es/materials/brass)**
- **[Hilo](/es/materials/wire)**
- **[Madera](/es/materials/wood)**
