---
title: Thermocouple
materialsUsed:
  - copper
  - iron
image: ../../../assets/images/inventions/thermocouple.jpg
---

# Brief description

A Thermocouple is a solid-state device that converts thermal energy (a temperature difference) directly into electrical energy. Discovered by Thomas Johann Seebeck in 1821, it consists of two dissimilar electrical conductors joined at two junctions. When one junction is heated while the other is kept cool, a small voltage is produced. It is used as a highly robust thermometer for extreme environments and, when stacked in groups, can function as a reliable power generator with no moving parts.

## Use / Function

The Thermocouple has two primary technical applications:

- **Temperature Measurement:** Functions as a robust sensor capable of measuring extremely high or low temperatures (from below -200°C up to 1800°C depending on the metals) where other thermometers would melt or fail.
- **Thermoelectric Power Generation:** When multiple thermocouples are connected in series, they form a "thermopile" which can generate usable electrical power from waste heat (e.g., from a stove, furnace, or geothermal vent).
- **Scale:** Small domestic sensors or larger industrial power-generation banks.

## Operating principle

The Thermocouple operates on the thermoelectric effect, specifically the **Seebeck effect**:

1. **Dissimilar Electron Density:** Different metals, such as **[Copper](/en/materials/copper)** and **[Iron](/en/materials/iron)**, have different free-electron densities and chemical potentials.
2. **Thermal Diffusion:** When a temperature gradient exists along a metal conductor, hot electrons at the warm end have higher energy and diffuse toward the cold end. This creates a tiny electric potential along each wire.
3. **Net Potential Difference:** Because electrons diffuse at different rates and with different magnitudes in different metals, the thermal voltage generated in the copper wire does not balance the thermal voltage in the iron wire.
4. **Current Flow:** If the two dissimilar wires are joined at both ends (junctions) and one junction is kept at a different temperature than the other, a net voltage is established across the open ends of the loop, driving a continuous electric current.

## How to create it

### 1. Preparing the Dissimilar Wires
- Obtain two wires of distinctly different metals. A pair of pure **[Copper](/en/materials/copper)** wire and pure **[Iron](/en/materials/iron)** wire (or constantan / steel) works perfectly for a basic thermocouple.
- Ensure the wires are insulated from each other along their lengths (using fabric, sleeves, or dry air) so they only touch at the junctions.

### 2. Creating the Junctions
- Strip the insulation from the ends of both wires.
- Tightly twist the copper and iron wires together at one end to form the **measuring (hot) junction**. For a more reliable and durable connection, weld or braze the twisted tip using a torch or electric arc.
- Connect the other ends of the copper and iron wires to copper terminal leads at a known temperature (the **reference or cold junction**).

### 3. Measuring the Output
- Connect the terminal leads to a sensitive voltmeter (such as an **[Electroscope](/en/inventions/electroscope)** or galvanometer).
- Place the hot junction in a heat source (like a candle flame or boiling water) and keep the cold junction at room temperature or in ice water.
- Observe the small voltage generated (typically a few millivolts). The voltage is directly proportional to the temperature difference between the two junctions.

### 4. Creating a Thermopile for Power Generation
- To generate practical levels of electricity, connect multiple thermocouples in series.
- Arrange them so all the "hot" junctions are clustered together in the heat source, and all the "cold" junctions are clustered together in a heat sink (such as cooling fins or running water).
- The voltages of the individual thermocouples will add together, producing enough power to run small electric devices or charge a battery.

## Materials needed

- **Conductor A:** **[Copper](/en/materials/copper)** wire.
- **Conductor B:** **[Iron](/en/materials/iron)** wire or steel wire.
- **Insulation:** Ceramic beads, high-temperature glass-fiber sleeves, or dry **[Clay](/en/materials/clay)** channels (to withstand high heat).
- **Tools:** Wire cutters, gas welder or torch (for joining junctions), sensitive galvanometer or multimeter.

### Related Inventions

- **[Electric Generator](/en/inventions/electric-generator)**
- **[Thermostat](/en/inventions/thermostat)**
- **[Electroscope](/en/inventions/electroscope)**

## Variants and improvements

- **Type J (Iron-Constantan):** A common industrial thermocouple with a high sensitivity of about 50 microvolts per degree Celsius, highly suited for reducing atmospheres.
- **Type K (Chromel-Alumel):** The most popular general-purpose thermocouple, highly resistant to oxidation at extreme temperatures.
- **Radioisotope Thermoelectric Generator (RTG):** A spacecraft power source that uses a thermopile to convert the heat released by decaying radioactive material into electricity, functioning reliably for decades in deep space.

## Limits and risks

- **Low Voltage Output:** A single thermocouple produces an extremely tiny voltage (microvolts to millivolts), requiring thousands of junctions in series to produce significant electrical power.
- **Low Efficiency:** Thermoelectric power generation is highly inefficient (usually only 2% to 5% efficiency), meaning most of the heat energy is lost.
- **Oxidation and Degradation:** At very high temperatures, iron and copper wires oxidize rapidly in open air, degrading their electrical properties. They must be enclosed in protective ceramic or metal sheaths.
