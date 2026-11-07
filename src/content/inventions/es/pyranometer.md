---
title: Piranómetro
materialsUsed:
  - metal
  - glass
  - wire
  - wood
---

# Breve descripción

Un piranómetro es un instrumento actinométrico y meteorológico diseñado para medir la irradiancia solar global procedente de todo el hemisferio celeste sobre una superficie plana horizontal. A diferencia del pirheliómetro —que únicamente mide el haz estrecho de radiación solar directa—, el piranómetro registra la radiación solar total, que engloba tanto la radiación directa del Sol como la radiación difusa dispersada por la atmósfera, las nubes y las partículas en suspensión. Es una herramienta indispensable para estudios climáticos, predicción del rendimiento agrícola y diseño de sistemas de energía solar térmica y fotovoltaica.

## Uso / Función

- **Medición de Irradiancia Solar Global:** Registro de la densidad de flujo de radiación total incidente ($\text{W/m}^2$) en planos horizontales o inclinados.
- **Vigilancia Meteorológica y Climatológica:** Cuantificación del balance energético solar diurno y análisis de la atenuación estacional por la atmósfera.
- **Ingeniería Solar y Fotovoltaica:** Evaluación del potencial de captación solar, dimensionamiento de colectores y cálculo del índice de rendimiento de centrales energéticas.
- **Microclimatología Agrícola:** Determinación de la radiación fotosintéticamente activa recibida por los cultivos y cálculo de tasas de evapotranspiración.

## Principio de funcionamiento

1. **Recepción Hemisférica y Corrección Coseno:** Una o dos cúpulas semiesféricas de vidrio óptico transparente proporcionan un campo visual de $2\pi$ estereorradianes (180 grados), asegurando que la respuesta angular cumpla con la ley del coseno de Lambert (la intensidad registrada varía proporcionalmente al coseno del ángulo cenital del Sol).
2. **Conversión Radiativa a Térmica:** La radiación solar atraviesa la cúpula de vidrio y es absorbida por un disco receptor recubierto con pintura negra mate de alta emisividad térmica, transformando los fotones solares en calor sensible.
3. **Termopila Diferencial:** Debajo del disco absorbedor se ubica una termopila compuesta por una serie de termopares metálicos (cobre-constantán o bismuto-antimonio). Las uniones calientes están en contacto con el disco receptor negro y las uniones frías están conectadas a un disipador metálico masivo a temperatura ambiente.
4. **Generación de Señal Termoeléctrica (Efecto Seebeck):** El gradiente térmico generado entre la superficie negra expuesta y el cuerpo frío del instrumento produce una fuerza electromotriz continua proporcional a la potencia solar incidente ($V \propto \Delta T$).
5. **Aislamiento por Cúpula Óptica:** La cúpula semiesférica actúa como escudo protector contra las corrientes de aire convectivas del viento exterior e impide la entrada de radiación infrarroja lejana procedente de la masa de aire circundante.

## Cómo crearlo

1. **Mecanizar el Cuerpo del Disipador:** Tornear un bloque cilíndrico de metal térmicamente conductor (latón, cobre o aluminio), vaciando una cavidad central superior para el sensor y mecanizando una brida perimetral con tornillos niveladores y un nivel de burbuja circular.
2. **Fabricar la Termopila Diferencial:** Enrollar alambre fino de constantán sobre una lámina delgada de mica o soporte aislante, cobrizando galvánicamente la mitad de cada espira para crear decenas de termopares en serie, o soldar alternativamente pares de hilos de metales disímiles.
3. **Fijar las Uniones Térmicas:** Acoplar mecánicamente las uniones calientes de la termopila a la cara inferior de un disco delgado de cobre ennegrecido con hollín fino de hidrocarburo o negro de humo, asegurando un aislamiento eléctrico perfecto mediante barniz fino o mica.
4. **Instalar el Receptáculo y Aislamiento:** Asentar las uniones de referencia frías sobre el bloque masivo del disipador metálico, intercalando pasta térmica de alta conductividad.
5. **Montar las Cúpulas de Vidrio Semiesféricas:** Fijar una cúpula semiesférica de vidrio borosilicatado sobre la base metálica mediante una junta de estanqueidad de goma, incorporando en la base una cámara hermética con sales desecantes de gel de sílice para evitar condensaciones internas.
6. **Conectar Bornes y Calibrar:** Guiar los hilos de cobre de salida hacia bornes exteriores de conexión y calibrar el instrumento frente a un pirheliómetro patrón en un día despejado, determinando la constante de sensibilidad del dispositivo ($k = V / G$, habitualmente en $\mu\text{V} / (\text{W/m}^2)$).

## Materiales necesarios

- **Esenciales:** **[Metal](/es/materials/metal)** térmicamente conductor (latón, cobre, aluminio) para el disipador y cuerpo nivelador; **[Vidrio](/es/materials/glass)** óptico transparente para la cúpula semiesférica protectora; **[Alambre](/es/materials/wire)** termoeléctrico calibrado (constantán, cobre, nicrom) para formar la termopila; y **[Madera](/es/materials/wood)** tratada o placas aislantes para la base de montaje desacoplada del suelo.
- **Herramientas:** Torno de metales, soldador de estaño de punta fina, microvoltímetro de laboratorio o galvanómetro sensible, nivel de burbuja, sales desecantes de gel de sílice.
- **Sustitutos:** Los piranómetros fotovoltaicos modernos sustituyen la termopila por un fotodiodo de silicio provisto de un difusor opalino esmerilado de teflón.

## Variantes y mejoras

- **Piranómetro de Termopila:** El modelo meteorológico estándar de referencia científica, con respuesta espectral uniforme en el rango de 300 a 2800 nm.
- **Piranómetro de Estrella:** Presenta sectores alternados en forma de estrella negros y blancos; los sectores blancos reflejan la luz y sirven como uniones frías de referencia directa bajo la misma cúpula sin requerir un disipador masivo.
- **Piranómetro de Silicio (Fotodiodo):** Utiliza un sensor semiconductor compacto con un difusor de corrección coseno; de coste muy bajo y respuesta casi instantánea, aunque restringido a la banda de absorción del silicio (400-1100 nm).
- **Albedómetro:** Conjunto formado por dos piranómetros enfrentados en un mismo soporte (uno apuntando hacia el cenit y otro hacia el suelo) para cuantificar la radiación reflejada y el albedo del terreno.

## Límites y riesgos

- **Error de Coseno a Bajas Alturas Solares:** Con el Sol muy bajo en el horizonte (al amanecer o al atardecer), los reflejos en la cúpula causan desviaciones respecto al comportamiento teórico de la ley de Lambert.
- **Condensación y Suciedad en la Cúpula:** La formación de rocío, escarcha o el depósito de polvo atenúa drásticamente la radiación incidente, falseando los registros diarios salvo que se limpie con frecuencia o se equipe con ventilación térmica.
- **Deriva Térmica Nocturna (Offset Negativo):** En noches despejadas, el enfriamiento radiativo de la cúpula de vidrio hacia el espacio exterior puede inducir una tensión negativa parásita en la termopila.

### Inventos relacionados

- **[Pirheliómetro](/es/inventions/pyrheliometer)**
- **[Actinómetro](/es/inventions/actinometer)**
- **[Termopar](/es/inventions/thermocouple)**
- **[Bolómetro](/es/inventions/bolometer)**
- **[Cocina solar](/es/inventions/solar-cooker)**

### Materiales relacionados

- **[Metal](/es/materials/metal)**
- **[Vidrio](/es/materials/glass)**
- **[Alambre](/es/materials/wire)**
- **[Madera](/es/materials/wood)**
