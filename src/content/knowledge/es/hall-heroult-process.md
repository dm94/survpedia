---
title: Proceso Hall-Héroult
relatedMaterials:
  - aluminum
  - graphite
  - charcoal
relatedInventions:
  - electrolysis
  - electric-arc-furnace
  - electric-generator
image: ../../../assets/images/knowledge/hall-heroult-process.jpg
---

# Descripción breve

El proceso Hall-Héroult es el principal método industrial utilizado para obtener aluminio elemental ($Al$) a partir de la alúmina (óxido de aluminio, $Al_2O_3$). Antes de su descubrimiento, el aluminio era un metal precioso más valioso que el oro o la plata, a pesar de ser el metal más abundante en la corteza terrestre, debido a la extrema dificultad para reducirlo a partir de su óxido.

## Uso / Función

- **Producción de aluminio**: Sintetiza aluminio elemental de alta pureza a partir de alúmina purificada.
- **Metalurgia estructural y aeroespacial**: Permite la producción masiva de aleaciones de aluminio ligeras y resistentes a la corrosión, indispensables en aviación, vehículos, embalaje y construcción.
- **Transmisión eléctrica**: Produce cables conductores de aluminio de alta capacidad para las redes eléctricas de larga distancia.
- **Escala**: Grandes fundiciones industriales que operan ininterrumpidamente, requiriendo cantidades masivas de energía eléctrica.

## Principio de funcionamiento

El aluminio no se puede reducir a partir de su óxido utilizando carbono en un alto horno común, porque el aluminio tiene una afinidad química por el oxígeno mucho mayor que la del carbono. En su lugar, el proceso Hall-Héroult emplea la electrólisis en sales fundidas:

1. **Disolución en criolita**: La alúmina ($Al_2O_3$) tiene un punto de fusión extremadamente alto (unos 2072°C), lo que hace inviable su electrólisis directa. Se disuelve en un baño fundido de criolita ($Na_3AlF_6$) a unos 950°C–980°C, reduciendo drásticamente la temperatura de operación.
2. **Reducción electrolítica**: Se hace pasar una corriente continua (CC) de gran intensidad a través de la mezcla fundida.
3. **Reacción en el cátodo**: El aluminio metálico líquido, más denso que la mezcla de criolita y alúmina, se deposita en el fondo de la celda de acero revestida de carbono (que actúa como cátodo):

$$Al^{3+} + 3e^- \rightarrow Al (l)$$

4. **Reacción en el ánodo**: Los iones de oxígeno migran hacia los ánodos de carbono/grafito, donde reaccionan químicamente para formar dióxido de carbono gaseoso ($CO_2$), que se desprende en burbujas. Este proceso consume gradualmente los ánodos de carbono:

$$C (s) + 2O^{2-} \rightarrow CO_2 (g) + 4e^-$$

La ecuación química global es:

$$2Al_2O_3 + 3C \rightarrow 4Al + 3CO_2$$

## Cómo implementarlo

### 1. Celda electrolítica (Cuba)

- Construir una cubeta de acero revestida con aislantes refractarios y bloques de carbono conductor, que actuarán como cátodo.
- Instalar un mecanismo de sifón o un crisol de vacío para retirar periódicamente el aluminio fundido acumulado en el fondo.

### 2. Ánodos de carbono

- Moldear bloques de carbono de alta pureza (utilizando coque de petróleo o carbón calcinado) acoplados a varillas de cobre o acero. Estos cuelgan dentro del baño fundido y deben descender y reemplazarse periódicamente a medida que se desgastan.

### 3. Suministro eléctrico de alta potencia

- Conectar un generador de corriente continua (CC) de gran capacidad capaz de entregar miles de amperios a bajo voltaje (por lo general de 4 a 6 voltios por celda, con múltiples celdas conectadas en serie).

## Materiales necesarios

- **Alúmina**: Óxido de aluminio refinado, típicamente extraído de la bauxita mediante el proceso Bayer (disolución en sosa cáustica caliente seguida de calcinación).
- **Criolita**: Fluoruro de sodio y aluminio fundido ($Na_3AlF_6$) utilizado para disolver la alúmina. Se puede producir sintéticamente a partir de fluorita y ácido sulfúrico.
- **Grafito / Carbono**: Carbono de alta pureza para los ánodos y los revestimientos catódicos.
- **Electricidad de corriente continua**: Una fuente masiva y constante de energía eléctrica.

## Variantes y mejoras

- **Ánodo Søderberg**: Utiliza un ánodo continuo de autococción hecho de una pasta de carbono que se hornea en el lugar a medida que desciende por la celda, eliminando la necesidad de cambiar ánodos de forma manual.
- **Ánodos precocidos**: Las plantas modernas prefieren ánodos previamente horneados en horno, que generan menos emisiones y logran una mayor eficiencia eléctrica.
- **Ánodos inertes**: Investigaciones modernas buscan reemplazar los ánodos de carbono por cerámicas o aleaciones no reactivas que desprendan oxígeno puro en lugar de dióxido de carbono, reduciendo a cero las emisiones de carbono del proceso.

## Límites y riesgos

- **Demanda extrema de energía**: El proceso requiere grandes flujos eléctricos (de 13 a 15 kWh por kilogramo de aluminio producido). Las plantas suelen situarse cerca de grandes centrales hidroeléctricas.
- **Vapores de fluoruro corrosivos**: El baño de criolita emite gases de fluoruro de hidrógeno ($HF$) sumamente corrosivos y tóxicos, que deben ser lavados y neutralizados en chimeneas para proteger el entorno.
- **Consumo de ánodos**: El desgaste continuo del ánodo añade costes de operación permanentes y libera gases de efecto invernadero.
