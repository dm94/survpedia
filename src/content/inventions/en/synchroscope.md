---
title: Synchroscope
materialsUsed:
  - copper
  - iron
  - steel
  - brass
  - wire
  - wood
---

# Brief description

A synchroscope is a specialized electrodynamic instrument used to indicate the exact phase angle and frequency difference between two alternating current (AC) power systems, typically an incoming generator and the live running electrical grid. In AC power networks, alternators cannot simply be switched onto a shared bus line at arbitrary moments; doing so out of phase produces what is equivalent to an instantaneous short circuit, shearing generator driveshafts, destroying windings, and causing grid blackouts. The synchroscope gives the switchboard operator a rotating pointer that visibly indicates whether the incoming machine is running too slow or too fast, and points straight up to "12 o'clock" at the exact moment of synchronized phase coincidence, signaling the safe split-second to close the paralleling circuit breaker.

## Use / Function

- **Generator Paralleling Synchronization:** Determining the exact safe moment to close the main breaker connecting an alternator to a powered electrical grid or another generator.
- **Frequency Matching Diagnostics:** Indicating by pointer rotation direction and speed whether the prime mover (steam turbine, water wheel, diesel engine) needs to be accelerated or throttled down.
- **Phase Angle Verification:** Ensuring that the voltage waveforms of both sources rise, peak, and cross zero in absolute lockstep.
- **Central Switchboard Control:** Essential diagnostic apparatus on generation station control boards and marine vessel power management racks.

## Operating principle

1. **Dual System Input:** The instrument receives two independent voltage inputs: one from the running busbar (reference system) and one from the oncoming generator (incoming system), usually stepped down via potential transformers to standard 110 V or 120 V levels.
2. **Rotating Magnetic Field Stator:** The busbar potential is applied across split-phase stator windings (using a resistor-inductor or phase-shifting network) to establish a smooth, two-phase rotating magnetic field in the stator core.
3. **Incoming Rotor Field:** The oncoming machine's voltage energizes the rotor coil through lightweight slip rings and phosphor-bronze brushes, creating an alternating magnetic dipole in the pivoted rotor.
4. **Torque Proportional to Phase Difference:** The interaction between the stator's rotating field and the rotor's alternating field produces a mechanical torque on the rotor that is directly related to the instantaneous phase difference between the two systems.
5. **Rotational Slip Indication:** If the incoming generator is running slower than the busbar, the pointer continuously rotates counterclockwise ("SLOW"); if faster, it rotates clockwise ("FAST").
6. **Synchronism Coincidence:** When both systems run at the identical frequency and their voltage waveforms align in exact phase, the pointer stands motionless pointing vertically at the 12 o'clock index mark, indicating zero phase displacement and permitting breaker closure.

## How to create it

1. **Construct the Structural Casing:** Build a sturdy enclosure from seasoned non-magnetic **[Wood](/en/materials/wood)** or metal casting, equipped with a circular front glass window and clearly marked dial face labeled "SLOW", "FAST", and a top synchronization index mark.
2. **Fabricate the Laminated Stator:** Assemble a ring-shaped stator core from thin laminations of high-permeability soft **[Iron](/en/materials/iron)** to suppress eddy currents; notch slots around the internal circumference for two-phase windings.
3. **Wind the Stator Coils:** Wind insulated **[Copper](/en/materials/copper)** wire and **[Wire](/en/materials/wire)** into the stator slots to produce two orthogonal phases ($90^\circ$ electrical displacement), using an external capacitor or choke coil to split the single-phase bus reference voltage.
4. **Assemble the Rotor and Spindle:** Mount an iron rotor core with a fine copper winding onto a precision tempered **[Steel](/en/materials/steel)** spindle fitted with miniature jewel bearings or polished **[Brass](/en/materials/brass)** sleeve pivots.
5. **Install Slip Rings and Brushes:** Mount two polished **[Brass](/en/materials/brass)** slip rings onto the rotor shaft, insulated from the spindle; fit spring-loaded phosphor-bronze or brass brush contacts to feed current from the oncoming generator.
6. **Mount Balanced Pointer and Damping Vane:** Fix a lightweight aluminum or brass pointer to the front shaft tip; integrate a light pneumatic damping vane or magnetic eddy-current brake to dampen erratic oscillation without introducing friction lag.

## Materials needed

- **Essential:** Laminated soft **[Iron](/en/materials/iron)** for stator and rotor cores; insulated magnet **[Copper](/en/materials/copper)** and **[Wire](/en/materials/wire)** for all field and armature windings; tempered **[Steel](/en/materials/steel)** for the central pivot spindle; **[Brass](/en/materials/brass)** for slip rings, brush holders, and terminal blocks; and seasoned **[Wood](/en/materials/wood)** for the housing.
- **Tools:** Lathe, coil winder, jeweler's screwdrivers, soldering iron, voltmeter, and two controllable test alternators or transformers for calibration.
- **Substitutes:** Before electrodynamic synchroscopes were standardized, operators synchronized machines using a "three-lamp method" or "dark lamp / bright lamp" configuration with three incandescent carbon-filament lamps wired crosswise across open breaker poles.

## Variants and improvements

- **Electrodynamic (Moving-Iron) Synchroscope:** Features iron vanes polarized by stationary coils, eliminating slip rings and rotating brushes for enhanced mechanical reliability.
- **Moving-Coil Synchroscope (Lincoln Type):** Employs a true wound rotor with slip rings, offering high sensitivity and crisp torque even near zero-frequency slip.
- **Synchronizing Lamps with Dark/Bright Configuration:** A zero-moving-parts optical predecessor using three incandescent lamps whose cyclic dimming and brightening indicate slip speed and phase opposition.
- **Automatic Paralleling Relays:** Modern electronic synchro-check units that measure phase angle, slip frequency, and voltage differentials via solid-state operational amplifiers, issuing an automated closure pulse when all criteria are met.

## Limits and risks

- **Catastrophic Out-of-Phase Closure:** Closing a generator breaker when the synchroscope is not at top dead center creates violent electromechanical forces capable of warping generator rotors, shearing engine drive couplings, or triggering switchgear explosions.
- **Lamp Filament Burnout Hazard:** In backup lamp systems, a burned-out lamp filament mimics a "dark lamp" synchronized condition, creating a false indication that can prompt a disastrous out-of-phase closure.
- **Slip Ring Wear & Contact Bounce:** Dirty or bouncing slip ring brushes create intermittent torque drops that cause false jitter in pointer rotation.
- **Voltage Discrepancy Invisibility:** A synchroscope only measures frequency and phase angle, not absolute voltage magnitude; an operator must always confirm voltage equality with a voltmeter prior to paralleling to prevent massive reactive circulating currents.

### Related Inventions

- **[Frequency Meter](/en/inventions/frequency-meter)**
- **[Electric Generator](/en/inventions/electric-generator)**
- **[Voltmeter](/en/inventions/voltmeter)**
- **[Wattmeter](/en/inventions/wattmeter)**
- **[Transformer](/en/inventions/transformer)**
- **[Dynamo](/en/inventions/dynamo)**

### Related Materials

- **[Copper](/en/materials/copper)**
- **[Iron](/en/materials/iron)**
- **[Steel](/en/materials/steel)**
- **[Brass](/en/materials/brass)**
- **[Wire](/en/materials/wire)**
- **[Wood](/en/materials/wood)**
