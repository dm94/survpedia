---
title: Thermostat
materialsUsed:
  - brass
  - iron
image: ../../../assets/images/inventions/thermostat.jpg
---

# Brief description

A thermostat is an automatic control device that detects temperature changes and maintains a system's temperature near a desired set point. It acts as an automatic switch, turning heating or cooling systems on or off without requiring human intervention.

## Use / Function

- **Primary use**: Automatic regulation of temperature in heating, cooling, and industrial thermal processes.
- **Secondary uses**: Safety shutoffs for boilers to prevent overheating, regulating temperature in incubators, and controlling fluid flow in engines.
- **Scale**: Domestic (ovens, space heaters), agricultural (incubators, greenhouses), and industrial (steam boilers, chemical reactors).

## Operating principle

The mechanical thermostat exploits the physical phenomenon of thermal expansion, specifically using a **bimetallic strip**:

1.  **Differential Expansion**: Two different metals—typically **[Brass](/en/materials/brass)** (which expands rapidly when heated) and **[Iron](/en/materials/iron)** or **[Steel](/en/materials/steel)** (which expands slowly)—are bonded or riveted together side-by-side.
2.  **Bending Action**: When heated, the brass layer expands more than the iron layer. Since they are tightly bonded, the strip is forced to bend toward the side of the metal that expands less (the iron).
3.  **Mechanical Switch**: The bending strip acts as a lever. At a specific temperature, the physical bending of the strip either makes or breaks an electrical contact, or opens/closes a physical valve (e.g., in a gas heater or steam line).
4.  **Cooling Reverse**: As the temperature drops, the brass contracts faster, straightening the strip and reversing the switch position.

## How to create it

### 1. The Bimetallic Element

- Obtain thin, flat strips of **[Brass](/en/materials/brass)** and **[Iron](/en/materials/iron)** or **[Steel](/en/materials/steel)** of identical dimensions.
- Bond them together securely. This can be achieved by riveting them at frequent intervals along their length, or by brazing/soldering them using a high-temperature solder.

### 2. The Contact Mechanism

- Mount one end of the bimetallic strip to a solid, insulated base so it remains stationary.
- Attach an electrical contact point (such as a small piece of **[Copper](/en/materials/copper)** or **[Silver](/en/materials/silver)**) to the free, moving end of the strip.
- Place a stationary, adjustable contact screw opposite the strip's contact point. Turning this screw changes the distance the strip must bend to make contact, allowing you to adjust the temperature setpoint.

### 3. Calibration

- Heat the environment slowly. Note the temperature at which the contact opens/closes using a **[Thermometer](/en/inventions/thermometer)**.
- Adjust the contact screw until the switch triggers at your desired target temperature (e.g., 37°C for a poultry **[Incubator](/en/inventions/incubator)**).

## Materials needed

- **Bimetallic Strip**: Thin sheets of **[Brass](/en/materials/brass)** and **[Iron](/en/materials/iron)** or **[Steel](/en/materials/steel)**.
- **Contacts**: High-conductivity metal like **[Copper](/en/materials/copper)**, **[Brass](/en/materials/brass)**, or **[Silver](/en/materials/silver)**.
- **Insulating Base**: Wood, dry slate, or **[Ceramics](/en/materials/ceramics)** to prevent electrical shorting.
- **Adjustment Screw**: A standard brass or steel screw.
- **Tools**: Riveter or soldering gear, metal shears, file.

## Variants and improvements

- **Mercury Switch (Tilt-Type)**: The bimetallic strip is wound into a spiral coil. As the temperature changes, the coil twists, tilting a glass vial containing a drop of mercury. The mercury rolls to bridge two electrical contacts, offering a spark-free, long-lasting switch.
- **Gas/Expansion Bellows**: Uses a small metal capsule filled with a volatile liquid or gas. When heated, the gas expands, inflating the bellows to mechanically push a switch.
- **Electronic/Digital**: Uses a thermistor or thermocouple coupled with a microcontroller to measure resistance changes and trigger solid-state relays.

## Limits and risks

- **Metal Fatigue**: Over thousands of cycles, the bonding between the two metals can degrade, or the metals themselves can suffer fatigue, changing the calibration.
- **Contact Arcing**: When used to switch high electrical currents directly, a spark (arc) can form between the contacts, eventually melting or welding them shut. Using a **[Relay](/en/inventions/relay)** or **[Capacitor](/en/inventions/capacitor)** across the contacts reduces this risk.
- **Calibration Drift**: Vibrations or mechanical shocks can shift the adjustment screw, requiring periodic recalibration.
