---
title: Bimetallic Strip
materialsUsed:
  - brass
  - steel
image: ../../../assets/images/inventions/bimetallic-strip.jpg
---

# Brief description

A strip composed of two different metals bonded together, which bends predictably when heated or cooled due to differing thermal expansion coefficients.

## Use / Function

- **Primary use**: Mechanical thermal actuation and temperature control (thermostats, circuit breakers, dial thermometers).
- **Secondary uses**: Thermal compensation in precision clocks, steam traps, and over-current protection devices.
- **Scale**: Small component / Instrument level.

## Operating principle

The bimetallic strip relies on differential thermal expansion:

1. **Dual Layer Bonding**: Two metals with significantly different coefficients of thermal expansion (e.g., brass expands rapidly, steel expands slowly) are mechanically joined or welded along their entire length.
2. **Thermal Response**: When heated, the high-expansion metal expands more than the low-expansion metal.
3. **Curvature**: Because the two layers are rigidly bonded, the length difference forces the strip to bend into an arc toward the side of the metal with the lower expansion rate.
4. **Reversibility**: Upon cooling, the strip contracts back to its original flat shape (or bends in the opposite direction if cooled below room temperature).

## How to create it

### Minimum functional version

1. **Material Selection**: Obtain two thin, flat strips of equal dimensions: one of high thermal expansion (**[Brass](/en/materials/brass)**) and one of low expansion (**[Steel](/en/materials/steel)**).
2. **Surface Cleaning**: Thoroughly clean and degrease the joining surfaces with solvent and light abrasives.
3. **Joining**: Rivet the two strips tightly together along their length at regular intervals, or solder/braze them into a solid laminate.
4. **Calibration**: Heat the strip gently over a flame to verify uniform bending toward the steel side upon heating.

### Technical level

Basic to Intermediate. Requires clean metal surfaces and tight mechanical bonding or brazing.

## Materials needed

- **Essential materials**:
  - **High-Expansion Metal**: **[Brass](/en/materials/brass)** or copper sheet/strip.
  - **Low-Expansion Metal**: High-carbon or stainless **[Steel](/en/materials/steel)** sheet/strip (or Invar alloy).
  - **Fasteners/Solder**: Copper/iron rivets or silver brazing alloy.
- **Tools**:
  - Metal shears, drill or hole punch, hammer, torch or soldering iron.

## Variants and improvements

- **Helical / Spiral Bimetal Coil**: Coiling the long strip into a spiral amplifies angular displacement, ideal for dial thermometers and clock balance wheels.
- **Snap-Action Disc**: Pre-stressed disc shape that flips abruptly at a threshold temperature, creating a crisp make-or-break electrical contact.
- **Invar Alloy Combination**: Pairing brass with Invar (nickel-iron alloy with near-zero expansion) maximizes deflection sensitivity per degree.

## Limits and risks

- **Delamination**: Repeated heating cycles or excessive bending force can separate the bonded metals.
- **Plastic Deformation**: Overheating beyond the elastic limit permanently deforms the strip, ruining calibration.
- **Slow Response**: Thicker strips have high thermal mass and respond slowly to temperature changes.
