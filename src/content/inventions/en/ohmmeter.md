---
title: Ohmmeter
materialsUsed:
  - copper
  - iron
  - wire
  - brass
  - battery
  - wood
---

# Brief description

An ohmmeter is an electrical measuring instrument designed to determine the electrical resistance of an unknown component, material, or conductor, expressed in ohms ($\Omega$). Built upon the moving-coil galvanometer and energized by an internal direct current voltage source, the ohmmeter allows engineers to instantly verify circuit continuity, assess insulation integrity, and match resistive loads without performing tedious simultaneous voltage and current calculations. In post-collapse technological recovery, an ohmmeter is an essential diagnostic instrument for identifying salvageable wiring, checking motor winding integrity, winding custom resistors, and diagnosing open or shorted circuits.

## Use / Function

- **Component Resistance Measurement:** Quantifying the exact resistance of resistors, heating elements, incandescent filaments, and coils.
- **Continuity & Short Circuit Testing:** Rapidly verifying unbroken electrical pathways or revealing unintended short circuits across conductors.
- **Winding & Motor Diagnostics:** Inspecting generator, alternator, transformer, and motor coils for turn-to-turn shorts or ground faults.
- **Material Resistivity Assessment:** Evaluating the conductivity and insulation quality of natural and synthetic materials, soils, or chemical solutions.

## Operating principle

1. **Internal Power Excitation:** An internal battery or stabilized galvanic cell delivers a known, small direct voltage into the test circuit formed by the instrument and the connected component.
2. **Current Deflection according to Ohm's Law:** When connected across an unknown resistance $R_x$, the circuit current $I$ equals $V / (R_m + R_x)$, where $R_m$ represents the meter's internal fixed resistance and calibration potentiometer.
3. **Inverse Scale Representation:** Higher unknown resistance allows less current to flow, resulting in smaller angular deflections of the moving coil; zero external resistance produces maximum deflection (full-scale deflection), while an open circuit causes zero deflection (infinity).
4. **Zero-Ohm Adjustment:** Because battery terminal voltage declines with age and discharge, an adjustable series rheostat or potentiometer is dialed before measurement with test leads shorted together to align the pointer precisely with the $0\,\Omega$ mark.
5. **Non-Linear Deflection:** Due to the hyperbolic relationship between resistance and current ($I \propto 1/R$), the meter's faceplate displays a non-linear scale crowded heavily toward infinity at the resting position and spread out widely near zero ohms.

## How to create it

1. **Construct the Protective Enclosure:** Build a non-conductive casing from dry seasoned **[Wood](/en/materials/wood)** or bakelite, featuring a glass viewing window and insulated lead sockets.
2. **Assemble the Permanent Magnet Movement:** Fasten a strong permanent horseshoe magnet of magnetized **[Iron](/en/materials/iron)** or steel around soft iron cylindrical pole pieces to generate a radial magnetic field gap.
3. **Mount the Moving Coil Assembly:** Suspend a lightweight rectangular frame wound with dozens of turns of ultra-fine insulated **[Copper](/en/materials/copper)** wire and **[Wire](/en/materials/wire)** on low-friction jeweled or needle pivots, equipped with phosphor-bronze hairsprings and a balanced pointer.
4. **Incorporate Internal Calibration Resistors:** Wire a precision fixed series multiplier resistor and a variable wirewound potentiometer (**[Brass](/en/materials/brass)** wiper) in series with the meter movement to limit current to full-scale deflection at nominal battery voltage.
5. **Install the Internal Battery:** Mount a dependable dry cell or low-voltage rechargeable **[Battery](/en/materials/battery)** (such as a 1.5 V or 3 V Leclanché or lead-acid cell) inside the enclosure, wired in series with the movement, calibration rheostat, and test terminals.
6. **Calibrate and Mark the Scale Arc:** Connect known reference resistors across the test leads, marking each corresponding pointer deflection on the faceplate from $0\,\Omega$ up to maximum readable resistance and $\infty$.

## Materials needed

- **Essential:** Insulated **[Copper](/en/materials/copper)** and **[Wire](/en/materials/wire)** for the moving coil and series circuit; permanent magnet made from **[Iron](/en/materials/iron)** or steel; a galvanic **[Battery](/en/materials/battery)** providing steady DC voltage; **[Brass](/en/materials/brass)** for terminals, contacts, and potentiometer wiper; and seasoned **[Wood](/en/materials/wood)** for the chassis.
- **Tools:** Soldering equipment, fine wire strippers, precision screwdrivers, watchmaker's tweezers, known standard resistors or calibrated Wheatstone bridge for scale marking.
- **Substitutes:** A separate external DC source, tangent galvanometer, and calibrated resistance decade box can be configured manually into an equivalent substitution ohmmeter if a dedicated Weston movement is unavailable.

## Variants and improvements

- **Series Ohmmeter:** Standard configuration where unknown resistance is placed in series with the movement and battery; best suited for medium to high resistance ranges ($10\,\Omega$ to $100\,\text{k}\Omega$).
- **Shunt Ohmmeter:** Unknown resistance is placed in parallel (shunt) with the meter movement; scale reads $0\,\Omega$ at resting position and $\infty$ at full deflection, ideal for very low resistances (milliohms to a few ohms).
- **Megohmmeter (Megger):** Employs a hand-cranked high-voltage DC magneto generator (often 250 V to 1000 V) and a dual-coil ratiometer movement to test high-voltage insulation breakdown and leakage.
- **Multi-Range Ohmmeter:** Employs switched series-parallel shunt resistors and multiple battery voltages to measure across multiple decades of resistance ($R \times 1$, $R \times 10$, $R \times 100$, $R \times 10\,\text{k}$).

## Limits and risks

- **Live Circuit Hazard:** Never connect an ohmmeter to a circuit with power applied; external voltage will drive excessive current through the delicate coil, instantly destroying the movement or calibration resistor.
- **Battery Depletion Drift:** Leaving test leads shorted or connected across low resistors continuously drains the internal battery, shifting calibration and causing erroneous readings.
- **Component Damage Risk:** The measurement current injected by low-range ohmmeters can overheat delicate components like fine thermocouple junctions, light filaments, or sensitive semiconductor contacts.

### Related Inventions

- **[Galvanometer](/en/inventions/galvanometer)**
- **[Ammeter](/en/inventions/ammeter)**
- **[Voltmeter](/en/inventions/voltmeter)**
- **[Wheatstone Bridge](/en/inventions/wheatstone-bridge)**
- **[Potentiometer](/en/inventions/potentiometer)**
- **[Resistor](/en/inventions/resistor)**

### Related Materials

- **[Copper](/en/materials/copper)**
- **[Iron](/en/materials/iron)**
- **[Wire](/en/materials/wire)**
- **[Brass](/en/materials/brass)**
- **[Battery](/en/materials/battery)**
- **[Wood](/en/materials/wood)**
