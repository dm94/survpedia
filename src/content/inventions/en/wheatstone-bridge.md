---
title: Wheatstone Bridge
materialsUsed:
  - copper
  - wire
  - wood
  - battery
image: ../../../assets/images/inventions/wheatstone-bridge.jpg
---

# Brief description

An electrical circuit instrument used to measure an unknown electrical resistance by balancing two legs of a bridge circuit. Invented by Samuel Hunter Christie and popularized by Sir Charles Wheatstone in 1843, it is the foundational electrical measurement technique for precise resistance, temperature, and strain sensing.

## Use / Function

- **Resistance Measurement:** Determining unknown electrical resistance with high precision down to fractions of an ohm.
- **Sensor Interface:** Reading physical sensors (strain gauges, thermistors, light sensors) whose electrical resistance changes with physical stimuli.
- **Electrical Diagnostics:** Locating cable faults in telegraph lines and power networks.
- **Scale:** Laboratory, industrial instrumentation, and field electronics testing.

## Operating principle

1.  **Diamond Circuit Topology:** Four resistors ($R_1$, $R_2$, $R_3$, and $R_x$) are connected in a closed diamond loop across a DC power source (**[Battery](/en/materials/battery)**).
2.  **Potential Difference:** A sensitive current detector (**[Galvanometer](/en/inventions/galvanometer)**) is connected across the two midpoints of the diamond arms.
3.  **Bridge Balance:** When the ratio of resistance in the known arm ($R_1 / R_2$) equals the ratio in the unknown arm ($R_3 / R_x$), the potential difference across the galvanometer drops to zero ($V_G = 0$), known as the "null point":
    $$\frac{R_1}{R_2} = \frac{R_3}{R_x} \implies R_x = R_3 \cdot \frac{R_2}{R_1}$$
4.  **Null Method Precision:** Because measurement relies on adjusting a calibrated variable resistor until zero current flows, the measurement is independent of supply voltage fluctuations and galvanometer non-linearity.

## How to create it

1.  **Construct Base:** Mount four terminal binding posts on a non-conductive board (**[Wood](/en/materials/wood)** or plastic).
2.  **Bridge Wiring:** Connect four arms forming a square/diamond loop using insulated **[Wire](/en/materials/wire)** or **[Copper](/en/materials/copper)** strips.
3.  **Install Components:**
    - Place fixed known precision resistors in arms $R_1$ and $R_2$.
    - Connect a calibrated variable resistor (rheostat) in arm $R_3$.
    - Connect the unknown resistor to test terminals at $R_x$.
4.  **Connect Indicator & Power:** Wire a sensitive **[Galvanometer](/en/inventions/galvanometer)** between opposite midpoints and connect a **[Battery](/en/materials/battery)** across the outer power terminals.
5.  **Calibrate:** Adjust $R_3$ until the galvanometer needle reads exactly zero, then calculate $R_x$.

## Materials needed

- **Conductive Connections:** Insulated **[Wire](/en/materials/wire)** and high-conductivity **[Copper](/en/materials/copper)** binding posts.
- **Power Supply:** Low-voltage DC supply or **[Battery](/en/materials/battery)** / **[Voltaic Pile](/en/inventions/voltaic-pile)**.
- **Substrate:** Dry **[Wood](/en/materials/wood)** board or phenolic insulator.
- **Detector:** Sensitive **[Galvanometer](/en/inventions/galvanometer)** or microammeter.

## Variants and improvements

- **Slide-Wire Bridge (Meter Bridge):** Replaces $R_1$ and $R_2$ with a uniform 1-meter resistance wire and a sliding contact clip.
- **Kelvin Bridge:** A modified bridge design that eliminates contact resistance errors when measuring extremely low resistances (micro-ohms).
- **AC Bridge (Maxwell / Hay Bridge):** Uses alternating current to measure capacitance and inductance in electrical networks.

## Limits and risks

- **Resistor Heating:** Excessive voltage from the battery can heat bridge resistors, altering their resistance and causing measurement drift.
- **Galvanometer Sensitivity:** Precision depends directly on the sensitivity of the null detector.
- **Contact Resistance:** Corroded terminals or loose wire joints introduce stray resistance into measurements.

### Related Inventions

- **[Galvanometer](/en/inventions/galvanometer)**
- **[Voltaic Pile](/en/inventions/voltaic-pile)**
- **[Resistor](/en/inventions/resistor)**
- **[Telegraph](/en/inventions/telegraph)**

### Related Materials

- **[Copper](/en/materials/copper)**
- **[Wire](/en/materials/wire)**
- **[Battery](/en/materials/battery)**
- **[Wood](/en/materials/wood)**
