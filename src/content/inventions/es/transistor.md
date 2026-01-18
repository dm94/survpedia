---
title: "Transistor"
materialsUsed: ["silicon", "germanium", "gold", "copper", "resin", "aluminum"]
image: ../../../assets/inventions/transistor.jpg
---

# Breve descripción

El transistor es un dispositivo semiconductor utilizado para amplificar o conmutar señales eléctricas y potencia. Es el bloque de construcción fundamental de la electrónica moderna, reemplazando a las voluminosas y frágiles válvulas de vacío. Permite la miniaturización de circuitos electrónicos y es la base de todo, desde radios simples hasta computadoras complejas.

## Uso / Función

Su propósito práctico es controlar el flujo de electricidad:

- **Amplificación:** Toma una señal de entrada débil y la eleva a una señal de salida más fuerte (esencial para radios, audio y comunicaciones).
- **Conmutación:** Actúa como un interruptor electrónico, encendiendo o apagando la corriente completamente basándose en una señal de control. Esta es la base de la lógica binaria (0s y 1s) en la computación.
- **Oscilación:** Puede generar señales continuas de una frecuencia específica cuando se combina con otros componentes (relojes, transmisores de radio).
- **Regulación de Voltaje:** Mantiene niveles de voltaje estables en fuentes de alimentación.

## Principio de funcionamiento

El transistor se basa en las propiedades cuánticas de materiales semiconductores, principalmente Silicio (Si) o Germanio (Ge).

- **Semiconductores:** Estos materiales no son ni conductores perfectos ni aislantes. Su conductividad puede ser modificada añadiendo impurezas ("dopaje").
- **Dopaje:**
  - **Tipo N:** Dopado con materiales que tienen electrones extra (portadores de carga negativa), como el Fósforo.
  - **Tipo P:** Dopado con materiales que tienen "huecos" (portadores de carga positiva), como el Boro.
- **La Unión:** Cuando se unen materiales tipo N y tipo P, forman una unión. Aplicando voltaje a terminales específicos, se puede controlar el flujo de electrones a través de estas uniones.

**Tipos Principales:**

1.  **BJT (Transistor de Unión Bipolar):** Tiene tres terminales: Base, Colector y Emisor. Una pequeña corriente en la Base controla una gran corriente que fluye del Colector al Emisor. Es como una pequeña válvula controlando una tubería grande.
2.  **FET (Transistor de Efecto de Campo):** Tiene tres terminales: Puerta (Gate), Fuente (Source) y Drenador (Drain). El voltaje en la Puerta crea un campo eléctrico que estrecha o abre el canal entre Fuente y Drenador. Casi no consume corriente para controlar el flujo, haciéndolo muy eficiente.

## Cómo crearlo

**Advertencia:** La fabricación de transistores fiables requiere precisión de nivel industrial, salas blancas y químicos peligrosos. Es probable que sea **imposible** fabricar circuitos integrados modernos en un escenario post-colapso sin restaurar la infraestructura industrial. Sin embargo, los **transistores de contacto puntual** primitivos (como los primeros inventados en 1947) son teóricamente posibles pero extremadamente difíciles.

**Transistor de Contacto Puntual Primitivo (Enfoque Teórico de Supervivencia):**

1.  **Preparación del Material:** Necesitas un cristal de Germanio de alta pureza (más fácil de trabajar que el Silicio debido a su menor punto de fusión y requisitos de procesamiento).
2.  **Base:** Una pequeña losa del cristal de germanio sirve como base.
3.  **Contactos:** Dos alambres metálicos muy finos (oro o bronce fosforoso) deben presionarse contra la superficie del cristal muy cerca uno del otro (micrómetros de separación).
4.  **Formado:** Se envía un pulso de alta corriente a través de los alambres para fundirlos ligeramente con el cristal y crear las uniones P-N necesarias en los puntos de contacto.

**Proceso Industrial (Para contexto):**

1.  **Purificación:** El silicio se purifica al 99.9999999%.
2.  **Crecimiento de Cristal:** Se cultiva en un solo cristal grande (boule) y se corta en obleas.
3.  **Fotolitografía:** Se proyectan patrones sobre la oblea usando luz y químicos fotorresistentes.
4.  **Grabado y Dopaje:** Se elimina material y se bombardean dopantes en las áreas expuestas para crear regiones N y P.
5.  **Metalización:** Se depositan cables microscópicos para conectar los componentes.

## Materiales necesarios

- **Semiconductores:**
  - **Germanio:** Más fácil para intentos primitivos (punto de fusión más bajo, históricamente el primero).
  - **Silicio:** Estándar para tecnología moderna, pero requiere calor extremo y pureza.
- **Dopantes:**
  - Arsénico, Fósforo, Antimonio (Tipo N).
  - Boro, Galio, Indio (Tipo P).
- **Contactos/Conductores:**
  - Oro (resiste corrosión, maleable para cables finos).
  - Cobre, Aluminio.
- **Sustrato:** Material aislante para montaje.

## Variantes y mejoras

- **Válvulas de Vacío:** El predecesor. Mucho más fácil de construir manualmente (soplado de vidrio, alambre de metal) pero voluminoso, caliente y frágil.
- **Transistor de Contacto Puntual:** El primer tipo de transistor. Inestable y ruidoso, pero la versión más "baja tecnología".
- **Transistor de Unión:** Estabilidad mejorada emparedando capas (NPN o PNP) en lugar de presionar alambres.
- **MOSFET:** El estándar moderno. Alta eficiencia, conmutación rápida, base de todos los procesadores modernos.

## Límites y riesgos

- **Calor:** Los transistores son muy sensibles al calor. Pueden sufrir "fuga térmica" donde el calor causa más corriente, lo que causa más calor, hasta la destrucción.
- **Electricidad Estática (ESD):** Una simple chispa de tu dedo puede destruir permanentemente un transistor perforando sus capas de aislamiento internas microscópicas.
- **Picos de Voltaje:** Muy sensible al sobrevoltaje.
- **Radiación:** La alta radiación puede degradar o invertir bits en los transistores (relevante en escenarios nucleares).
- **Prioridad de Recolección:** Dado que la fabricación es casi imposible, los transistores deben ser un artículo de recolección de alta prioridad. Son duraderos si se almacenan correctamente (bolsas antiestáticas).
