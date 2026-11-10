---
title: Wattmeter
materialsUsed:
  - copper
  - iron
  - wire
  - brass
  - wood
---

# Brief description

A wattmeter is an electrical measuring instrument designed to measure the rate of electrical energy transfer, or active electric power, flowing through an electrical circuit, expressed in watts ($W$). Unlike basic ammeters and voltmeters that evaluate single parameters independently, an electrodynamic wattmeter utilizes two sets of electromagnetic coils (stationary current coils and a movable potential coil) to automatically calculate the true instantaneous mathematical product of voltage and current ($P = V \times I \times \cos\theta$). In rebuilding civilization and constructing electrical grids, wattmeters are indispensable for managing generator mechanical loading, tuning alternator phase alignment, monitoring electrical machine efficiency, and preventing boiler or prime-mover stalling from unforeseen power surges.

## Use / Function

- **Active Power Measurement:** Determining true electrical power consumed by resistive loads, motors, heaters, and lighting networks.
- **Generator Output Monitoring:** Measuring the mechanical-to-electrical power delivery of dynamos, steam engines, and water turbines to avoid overload.
- **Power Factor Determination:** Operating alongside ammeters and voltmeters in alternating current (AC) circuits to detect reactive power and calculate power factor ($\cos\theta$).
- **Efficiency and Loss Analysis:** Diagnosing energy losses in transformers, transmission lines, and industrial electrical machinery.

## Operating principle

1. **Electrodynamic Multiplication:** The instrument relies on the electrodynamometer principle, wherein mechanical deflection torque is produced by the interaction of magnetic fields generated solely by electrical coils without permanent magnets.
2. **Current Coils (Field Coils):** Two stationary coils wound with heavy conductor are wired in series with the load; they produce a magnetic flux density $B$ strictly proportional to the instantaneous load current $I$.
3. **Potential Coil (Moving Coil):** A delicate, lightweight moving coil wound with fine wire and connected in series with a high non-inductive resistor is wired in parallel across the load voltage $V$, drawing a current proportional to instantaneous voltage.
4. **Instantaneous Torque Generation:** The magnetic interaction between the stationary field coils and the pivoting potential coil exerts an instantaneous torque proportional to the product $v(t) \cdot i(t)$.
5. **Damping and Time Averaging:** Opposing spiral hairsprings provide mechanical restoring torque, while air-vane dampers smooth out rapid pulsations, allowing the pointer to settle at an angle proportional to the average true active power.

## How to create it

1. **Fabricate the Non-Metallic Enclosure:** Construct a rigid, non-magnetic casing from seasoned **[Wood](/en/materials/wood)** or bakelite with internal air dashpot damping chambers and a transparent glass observation face.
2. **Wind the Stationary Current Coils:** Wind two identical coaxial coils using heavy gauge insulated **[Copper](/en/materials/copper)** and **[Wire](/en/materials/wire)**, securing them rigidly to an insulating frame made of dry wood or ebonite with an open gap between them.
3. **Assemble the Movable Voltage Coil:** Wind a miniature, circular or rectangular coil from ultra-fine insulated copper wire around a lightweight non-metallic former; mount the coil on a hardened steel spindle supported by jeweled or brass cone pivots in the center of the current coil gap.
4. **Attach Control Springs and Pointer:** Affix two counter-wound phosphor-bronze hairsprings to supply restoring torque and conduct potential current into the moving coil without friction; fit a lightweight balanced pointer.
5. **Incorporate the Series Swamping Resistor:** Wire a precision non-inductive multiplier resistance (wound with high-resistivity manganin or nichrome wire on a mica card) in series with the moving coil to minimize inductance and phase error.
6. **Install Heavy-Duty Terminals:** Mount four clearly labeled **[Brass](/en/materials/brass)** binding posts (two heavy current terminals for series connection, and two insulated potential terminals for parallel connection).

## Materials needed

- **Essential:** High-purity insulated **[Copper](/en/materials/copper)** and **[Wire](/en/materials/wire)** for both stationary heavy current coils and the delicate moving potential coil; non-magnetic structural **[Iron](/en/materials/iron)** or steel only for external screening shields (never inside the coil field); **[Brass](/en/materials/brass)** for terminal lugs and pivot bearings; and seasoned **[Wood](/en/materials/wood)** for the housing and coil forms.
- **Tools:** Precision coil winder, soldering iron, jeweler's screwdrivers, non-magnetic tweezers, calibrated ammeter, voltmeter, and resistive test loads for scale calibration.
- **Substitutes:** If electrodynamometer coils cannot be machined, power can be calculated indirectly using separate calibrated ammeter and voltmeter readings on purely direct current (DC) circuits.

## Variants and improvements

- **Electrodynamic Wattmeter:** The universal standard for both DC and AC power measurement, immune to waveform distortion within power frequencies.
- **Induction Wattmeter:** Uses rotating magnetic fields and eddy currents in an aluminum disc; exclusively used for AC circuits and energy metering (watt-hour meters).
- **Thermal (Thermocouple) Wattmeter:** Operates by measuring heat dissipated across bridge thermocouples; useful at high audio and radio frequencies where coil reactance causes errors.
- **Polyphase Wattmeter:** Features two or three electrodynamic movements mounted on a shared spindle to measure total power in three-phase power grids using Blondel's theorem.

## Limits and risks

- **Hidden Overload Danger:** A wattmeter pointer can read within normal limits while either its current coil or its voltage coil is severely overloaded and burning out (e.g., at very low power factors).
- **Phase Shift Error:** Mutual inductance between coils or inductance in the potential coil circuit introduces phase angle errors that distort power readings on alternating current.
- **High-Voltage Arc Flash:** Connecting potential terminals to high-voltage generation circuits without appropriate multiplier resistors risks explosive arc flashes and severe electrical shock.

### Related Inventions

- **[Galvanometer](/en/inventions/galvanometer)**
- **[Ammeter](/en/inventions/ammeter)**
- **[Voltmeter](/en/inventions/voltmeter)**
- **[Electric Generator](/en/inventions/electric-generator)**
- **[Dynamo](/en/inventions/dynamo)**
- **[Resistor](/en/inventions/resistor)**

### Related Materials

- **[Copper](/en/materials/copper)**
- **[Iron](/en/materials/iron)**
- **[Wire](/en/materials/wire)**
- **[Brass](/en/materials/brass)**
- **[Wood](/en/materials/wood)**
