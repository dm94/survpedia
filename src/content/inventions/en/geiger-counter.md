---
title: Geiger Counter
materialsUsed:
  - metal
  - glass
  - wire
  - battery
image: ../../../assets/images/inventions/geiger-counter.jpg
---

# Brief description

A Geiger counter (or Geiger–Müller counter) is an instrument used for detecting and measuring ionizing radiation, including alpha particles, beta particles, and gamma rays. Named after Hans Geiger and Walther Müller who perfected the design in 1928, it provides immediate real-time audible or visual feedback when radioactive radiation is present.

## Use / Function

Its primary purpose is detecting ionizing radiation hazards and measuring environmental contamination:

- **Radiation Detection**: Identifies radioactive materials, mineral deposits (such as pitchblende/uranium ore), and radioactive contamination in food, water, soil, or scrap metal.
- **Personal Safety & Dosimetry**: Warns individuals of dangerous radiation levels following nuclear accidents or exposure in industrial and medical settings.
- **Scale**: Portable hand-held device for field surveying, laboratory research, and civil defense.

## Operating principle

The core of a Geiger counter is the **Geiger–Müller (GM) tube**, a hollow gas-filled cylinder functioning as an ionization chamber:

1. **High-Voltage Potential**: The outer cylindrical wall of the tube acts as the cathode (connected to ground), while a fine central **[Wire](/en/materials/wire)** running down the middle acts as the anode. A high DC voltage (typically 400 to 900 volts) supplied by a **[Battery](/en/materials/battery)** and step-up circuit is applied across the electrodes, creating a strong electric field inside the tube.
2. **Gas Filling**: The tube is sealed and filled with an inert gas (such as argon or helium) mixed with a small amount of a quench gas (such as halogen gas or alcohol vapor) at low pressure (approx. 0.1 atm).
3. **Ionization Cascade (Townsend Discharge)**: When an ionizing radiation particle penetrates the tube's thin entrance window (made of thin **[Glass](/en/materials/glass)** or mica) or **[Metal](/en/materials/metal)** cylinder, it strikes gas atoms, knocking off electrons and creating ion pairs ($Ar \rightarrow Ar^+ + e^-$).
4. **Avalanche Multiplication**: Accelerating rapidly toward the central high-voltage wire, the liberated electrons collide with other gas atoms, freeing additional electrons in a chain-reaction avalanche (Townsend discharge).
5. **Electrical Pulse Output**: The sudden flood of electrons arriving at the central wire creates a sharp, measurable pulse of electrical current across a load resistor. This pulse triggers a loudspeaker click or increments a digital pulse counter.
6. **Quenching**: The quenching gas absorbs remaining positive ions and UV photons, preventing continuous spurious discharges and resetting the tube within microseconds to register the next radiation count.

## How to create it

To assemble a basic functional Geiger–Müller detection circuit:

1. **Construct or Obtain a GM Tube**: Fabricate a sealed glass cylinder lined with a thin copper metal cathode mesh or foil, with an ultra-fine tungsten wire (0.05 mm diameter) stretched taut along the central axis. Backfill the tube with argon gas mixed with a trace of ethanol vapor at low pressure (~10 kPa), or use a salvaged commercial GM tube (such as SBM-20 or STS-5).
2. **Build High-Voltage Power Supply**: Construct a high-voltage boost converter using a small transformer, transistor oscillator, and diode-capacitor voltage multiplier ladder to convert 3V to 9V battery DC up to 400V–500V DC.
3. **Assemble Load & Signal Processing Circuit**: Connect a high-resistance load resistor ($4.7\text{--}10\,\text{M}\Omega$) in series with the GM tube cathode and high-voltage supply. Connect a coupling capacitor ($100\,\text{pF}$) from the junction to a transistor audio amplifier or piezo buzzer.
4. **Integrate Power Source**: Wire a 9V **[Battery](/en/materials/battery)** through a power switch to supply the high-voltage generator and audio amplifier circuit.
5. **Calibrate and Test**: Turn on the unit in a clean environment to record the ambient background radiation count rate (typically 10 to 30 clicks per minute from cosmic rays and natural background). Bring a known weak radioactive source (such as an americium-241 smoke detector button or thoriated lantern mantle) near the thin window to verify an immediate increase in count rate.

_Technical Level_: Advanced. Requires high-voltage generation ($400\text{V}+$) and delicate gas-handling or tube sourcing.

## Materials needed

- **Sensors & Contacts**:
  - Sealed **[Glass](/en/materials/glass)** or thin metal cylinder (GM tube body).
  - Fine metallic **[Wire](/en/materials/wire)** (tungsten or stainless steel central anode).
  - **[Metal](/en/materials/metal)** foil or mesh for the outer cathode sleeve.
- **Power & Electronics**:
  - **[Battery](/en/materials/battery)** (9V or battery pack power source).
  - High-voltage step-up transformer and multiplier capacitors/diodes.
  - Signal resistors, coupling capacitors, and audio buzzer/speaker.

## Variants and improvements

- **Halogen-Quenched Tubes**: Modern tubes use chlorine or bromine gas as quenchers. Unlike organic alcohol quenchers, halogen gases recombine after ionization, giving the tube an essentially unlimited operational lifespan.
- **Scintillation Counters**: Use a crystal (like sodium iodide) that emits flashes of light when struck by radiation, detected by a photomultiplier tube. This offers energy spectroscopy capabilities beyond simple particle counting.
- **Proportional Counters**: Operate at lower voltages than Geiger counters, allowing discrimination between different radiation types (alpha vs. beta vs. gamma) based on pulse height.

## Limits and risks

- **Dead Time**: After each avalanche, positive ions form a sheath around the central wire that temporarily reduces the electric field. The tube cannot detect subsequent incoming radiation for 50–200 microseconds ("dead time"). In extremely high radiation fields, the counter can become saturated and read zero ("paralysis").
- **High Voltage Hazard**: The internal circuit operates at 400V to 900V DC. Although current capacity is low, improper handling can cause uncomfortable electrical shocks.
- **No Energy Spectroscopy**: Standard Geiger counters count radiation events but cannot determine the specific energy or exact isotope species of the radiation source.
