---
title: Potentiometer
materialsUsed:
  - wire
  - wood
  - metal
  - copper
---

# Brief description

A potentiometer is a precision electrical instrument used to measure an unknown electromotive force (EMF) or potential difference by comparing it against a known reference voltage using a null-balance method. Devised in 1841 by German physicist Johann Christian Poggendorff, the measuring potentiometer draws exactly zero current from the source under test at the balance point. This fundamental operating principle eliminates measurement errors caused by the internal resistance of chemical cells or connecting leads, establishing the foundational benchmark for early electrical metrology, sensor calibration, and electrochemical research.

## Use / Function

- **True Electromotive Force (EMF) Measurement:** Measuring open-circuit voltages of primary and secondary electrochemical cells without drawing current or causing terminal voltage drop.
- **Instrument Calibration:** Calibrating deflection-based voltmeters, ammeters, and galvanometers against stable standard voltage cells (such as the Daniell cell or Weston normal cell).
- **Precision Resistance Determination:** Measuring unknown electrical resistances by comparing voltage drops across known standard resistors connected in series under identical current.
- **Temperature and Chemical Potential Sensing:** Measuring tiny millivolt outputs from thermocouples and pH measurement half-cells without loading the transducer.

## Operating principle

1. **Uniform Resistive Voltage Divider:** A steady direct current from an auxiliary working battery flows through a long, perfectly uniform resistance wire stretched over a graduated linear scale. Because resistance is strictly proportional to length ($R = \rho \cdot L / A$), a constant linear voltage drop occurs per unit distance along the wire ($V/L = \text{constant}$).
2. **Standardization of Current:** A standard reference cell of known voltage ($E_{\text{std}}$) is switched into the circuit with a sensitive galvanometer. A sliding contact is adjusted along the calibrated wire until the galvanometer registers zero deflection (null current), establishing the precise potential gradient along the slide wire.
3. **Opposing Null-Balance Circuit:** The unknown voltage source ($E_x$) is connected in parallel opposition to a segment of the slide wire through the galvanometer. Because the polarities oppose each other, current will only flow if the wire voltage drop differs from the unknown EMF.
4. **Zero-Current Measurement:** The sliding contact is moved until the potential drop along the contacted length of wire exactly equals the unknown EMF ($E_x = I \cdot R_x$). At this exact balance point, current through the galvanometer drops strictly to zero, ensuring the source under test operates under ideal open-circuit conditions.
5. **Direct Scale Reading:** The unknown EMF is calculated by simple ratio of wire lengths ($E_x = E_{\text{std}} \cdot L_x / L_{\text{std}}$).

## How to create it

1. **Construct the Baseboard:** Prepare a flat, stable, well-seasoned wooden board (typically 1 meter long or folded into parallel 1-meter segments) fitted with an inlaid metric scale graduated in millimeters.
2. **Mount the Uniform Slide Wire:** Stretch a continuous length of uniform high-resistivity wire (manganin, constantan, or German silver) tightly between insulated brass end posts over the graduated scale.
3. **Assemble the Sliding Contact (Jockey):** Fabricate a knife-edge brass sliding contact with an insulated handle, designed to press firmly against the slide wire at any point without grooving or deforming the wire.
4. **Connect Auxiliary Working Circuit:** Wire a stable low-voltage accumulator (lead-acid cell or Daniell cell) in series with an adjustable rheostat and the ends of the slide wire to drive a steady working current.
5. **Incorporate Galvanometer and Selector Switch:** Connect a center-zero mirror galvanometer and a double-throw switch to toggle between a known reference voltage standard cell and the unknown test source.
6. **Standardize and Measure:** Calibrate the potential drop per millimeter using the reference cell, switch to the unknown source, slide the knife-edge jockey until the galvanometer indicates zero deflection, and record the balance distance.

## Materials needed

- **Essential:** High-resistivity, low-temperature-coefficient **[Wire](/en/materials/wire)** (manganin or constantan) for the slide wire; seasoned **[Wood](/en/materials/wood)** for the dimensional baseboard; conductive **[Metal](/en/materials/metal)** (brass) for binding posts, brackets, and knife-edge sliding contacts; and insulated **[Copper](/en/materials/copper)** wire for internal circuit interconnections.
- **Tools:** Woodworking hand tools, soldering iron, sensitive zero-center galvanometer, precision calipers, metric ruler, reference standard cell.
- **Substitutes:** Modern potentiometers use compact multi-turn helical wirewound coils (Helipots) or digital rotary encoders; modern variable resistors used for volume control derive their mechanical form from this instrument.

## Variants and improvements

- **Slide-Wire Potentiometer:** The foundational linear one-meter or four-meter benchtop teaching design featuring an exposed taut resistive wire.
- **Crompton Potentiometer:** Employs multiple calibrated internal series resistance coils combined with a short dial-adjusted slide wire, dramatically expanding scale length and precision.
- **Duo-Range Laboratory Potentiometer:** Features switchable shunt ranges allowing measurement across both standard volt ranges (0–2 V) and thermocouple millivolt ranges (0–20 mV) with microvolt resolution.
- **Rotary Three-Terminal Potentiometer:** The ubiquitous modern passive electronic component featuring a circular resistive carbon or cermet track with a rotating wiper, used as an adjustable voltage divider.

## Limits and risks

- **Non-Uniform Wire Resistance:** Mechanical wear, kinks, or localized stretching from excessive knife-edge jockey pressure distort the linear resistance profile, introducing systematic calibration errors.
- **Working Battery Drift:** Gradual discharge or temperature shifts of the auxiliary working battery alter the current through the slide wire, requiring periodic recalibration against the standard cell.
- **Thermoelectric Stray Voltages:** Thermal gradients generated by hand warmth on metal binding posts or sliding knife edges can create parasitic Seebeck voltages that disturb delicate microvolt null readings.

### Related Inventions

- **[Wheatstone Bridge](/en/inventions/wheatstone-bridge)**
- **[Galvanometer](/en/inventions/galvanometer)**
- **[Daniell Cell](/en/inventions/daniell-cell)**
- **[Voltaic Pile](/en/inventions/voltaic-pile)**
- **[Resistor](/en/inventions/resistor)**

### Related Materials

- **[Wire](/en/materials/wire)**
- **[Wood](/en/materials/wood)**
- **[Metal](/en/materials/metal)**
- **[Copper](/en/materials/copper)**
