---
title: Frequency Meter
materialsUsed:
  - copper
  - iron
  - steel
  - brass
  - wire
  - wood
---

# Brief description

A frequency meter is an electrical measuring instrument designed to indicate the frequency, or number of cycles per second (measured in hertz, $\text{Hz}$), of an alternating current (AC) power source or signal. Without reliable frequency metering, maintaining a steady AC electrical distribution grid is impossible: alternating machinery, transformers, electric motors, and synchronous clocks depend entirely on rotational synchrony. In a post-collapse rebuild of hydroelectric, steam, or combustion-driven generators, the frequency meter provides direct feedback on prime mover governor performance, preventing catastrophic transformer saturation, grid instability, and mechanical motor breakdown.

## Use / Function

- **AC Grid Frequency Monitoring:** Continuously verifying that generated electrical power maintains nominal operating frequency (typically 50 Hz or 60 Hz).
- **Turbine & Engine Governor Tuning:** Calibrating steam governor, hydro pelton gate, or fuel throttle mechanisms to maintain constant rotational speed under changing electrical loads.
- **Transformer & Inductor Protection:** Preventing low-frequency operation, which lowers coil inductive reactance ($X_L = 2\pi f L$) and induces destructive core saturation, excessive excitation current, and coil burn-out.
- **Audio & Radio Frequency Calibration:** Tuning resonant circuits, transmitters, and spark-gap audio modulations to designated communication bands.

## Operating principle

1. **Electromagnetic Excitation:** The input alternating voltage is fed through a series current-limiting resistor into an electromagnet wound around a soft iron core.
2. **Periodic Magnetic Tractive Pulses:** The alternating current generates an oscillating magnetic field whose attraction peaks twice per full AC cycle (or once per cycle if magnetically biased by a permanent magnet).
3. **Mechanical Resonance (Frahm Reed Principle):** A comb or bank of graduated spring-steel reeds, each precisely calibrated to a distinct natural resonant vibration frequency, is mounted in front of the electromagnet.
4. **Resonant Reed Amplification:** While off-frequency reeds experience negligible movement, the specific reed whose natural mechanical oscillation frequency matches the magnetic pulse frequency vibrates violently with maximum amplitude.
5. **Direct Visual Readout:** The white-enameled tips of the vibrating reeds appear as an expanded visual blur against a dark graduated faceplate, showing the operator the precise frequency at a glance without mechanical gears, hairsprings, or pivots.

## How to create it

1. **Construct the Enclosure and Mount:** Build a vibration-dampened housing from seasoned **[Wood](/en/materials/wood)** or non-magnetic casing with a glass viewing window and sturdy mounting lugs.
2. **Fabricate the Electromagnet:** Wind hundreds of turns of fine insulated **[Copper](/en/materials/copper)** wire and **[Wire](/en/materials/wire)** around a laminated soft **[Iron](/en/materials/iron)** core; mount the core firmly across the chassis base.
3. **Craft the Resonant Steel Reeds:** Cut dozens of identical narrow strips from tempered spring **[Steel](/en/materials/steel)** sheet; clamp one end of each reed into a shared rigid **[Brass](/en/materials/brass)** mounting block.
4. **Tune the Reeds to Calibration Standards:** File the free ends of the reeds or attach tiny solder weights to adjust their natural frequencies incrementally (e.g., in 0.5 Hz increments from 45 Hz to 55 Hz or 55 Hz to 65 Hz) using an acoustic tuning fork or known mechanical alternator.
5. **Paint Reed Tips and Graduated Scale:** Coat the free tips of the reeds with bright enamel or white paint against a matte black scale plate marked with the corresponding frequencies.
6. **Wire the Series Dropping Resistor:** Connect a non-inductive series resistor wound from high-resistance alloy wire to drop line voltage down to the magnet's rated operating current, preventing overheating during continuous service.

## Materials needed

- **Essential:** Tempered spring **[Steel](/en/materials/steel)** for the calibrated resonant reeds; insulated **[Copper](/en/materials/copper)** and **[Wire](/en/materials/wire)** for the electromagnet coil; soft **[Iron](/en/materials/iron)** for the laminated magnetic core; **[Brass](/en/materials/brass)** for the reed clamping block, terminals, and hardware; and seasoned **[Wood](/en/materials/wood)** for the case.
- **Tools:** Precision bench shears, jeweler's files, soldering iron, micrometer, mechanical tuning forks or calibrated stroboscope for frequency reference.
- **Substitutes:** If spring steel reeds are unavailable, an electrical resonance frequency meter can be built using two parallel circuits (one inductive, one capacitive) acting on opposing coils of an electrodynamic ratiometer pointer movement.

## Variants and improvements

- **Vibrating Reed Meter (Frahm Type):** Highly robust, immune to voltage fluctuations and temperature variations, having zero rotating parts, pivots, or wear points.
- **Electrodynamic (Ratiometer) Frequency Meter:** Utilizes two crossed coils (one in series with an inductor, the other in series with a capacitor) driving a pointer across a continuous graduated scale.
- **Weston Induction Frequency Meter:** Uses magnetic shielding and opposing eddy currents in a pivoted aluminum vane, providing smooth continuous pointer readings.
- **Electronic Counting Meter:** Modern digital frequency counter utilizing multivibrator timing gates and crystal oscillators to count zero crossings over a fixed gate interval.

## Limits and risks

- **Harmonic Distortion Sensitivity:** Strong odd harmonics on distorted AC generator waveforms can trigger secondary resonances on harmonic-tuned reeds, confusing the operator.
- **Voltage Drop Threshold:** If generator terminal voltage collapses below the minimum excitation threshold, the magnetic field will be too weak to induce visible reed amplitude.
- **High-Voltage Contact:** Direct connection of panel terminals to high-voltage generation lines without potential isolation transformers poses lethal shock and catastrophic flashover hazards.

### Related Inventions

- **[Tachometer](/en/inventions/tachometer)**
- **[Electric Generator](/en/inventions/electric-generator)**
- **[Voltmeter](/en/inventions/voltmeter)**
- **[Wattmeter](/en/inventions/wattmeter)**
- **[Stroboscope](/en/inventions/stroboscope)**
- **[Transformer](/en/inventions/transformer)**

### Related Materials

- **[Copper](/en/materials/copper)**
- **[Iron](/en/materials/iron)**
- **[Steel](/en/materials/steel)**
- **[Brass](/en/materials/brass)**
- **[Wire](/en/materials/wire)**
- **[Wood](/en/materials/wood)**
