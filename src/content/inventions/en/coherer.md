---
title: Coherer
materialsUsed:
  - brass
  - glass
  - iron
  - silver
  - wire
image: ../../../assets/images/inventions/coherer.jpg
---

# Brief description

A coherer is a primitive form of radio signal detector used in the very first radio receivers during the late 19th and early 20th centuries. Consisting of a tube containing loose metal filings between two electrodes, it changes its electrical resistance from extremely high to low when exposed to radio frequency electromagnetic waves, allowing early wireless telegraphy transmissions to be recorded or converted into audible sounds.

## Use / Function

- **Wireless Signal Detection**: Serving as the central sensor in early radio receivers to detect electromagnetic waves emitted by spark-gap transmitters.
- **Telegraphic Recording**: Acting as a switch to activate a telegraph sounder, ink register, or electric bell to record Morse code messages.
- **Scale**: Local and long-distance (capable of picking up transatlantic signals when combined with a sensitive relay, large antenna, and high-power transmitters).

## Operating principle

The coherer exploits the physical phenomenon of electromagnetic coherence in granular metal mixtures:

1. **High-Resistance State (De-cohered)**: In its normal state, the loose metal filings (usually a mix of nickel, iron, or silver) inside the glass tube touch each other only loosely. The natural microscopic oxide layer on the filings acts as an insulator, resulting in extremely high electrical resistance (thousands of ohms) across the tube. This prevents current from a local battery from flowing through the circuit.
2. **Coherence (Conduction)**: When a radio wave (high-frequency electromagnetic pulse) passes through the coherer, it induces a small high-frequency electrical voltage in the antenna connected to the electrodes. This voltage breaks down the thin oxide layers on the filings, causing tiny sparks (micro-welds) that fuse the filings together in microscopic bridges. The resistance instantly drops to a very low level (a few ohms).
3. **Switch Action**: With the resistance dropped, the current from the local battery can easily flow through the coherer, activating a **[Relay](/en/inventions/relay)** or telegraph sounder.
4. **Decohering (Reset)**: Once the filings have cohered, they remain joined and conductive even after the radio wave stops. To detect the next pulse, the coherer must be tapped physically (decohered) to break the micro-welds and restore the high-resistance state. This is typically done automatically using an electric hammer (similar to a doorbell clapper).

## How to create it

### 1. Preparing the Glass Tube

- Obtain a small, clean **[Glass](/en/materials/glass)** tube about 3 to 5 centimeters in length and 4 to 6 millimeters in internal diameter.

### 2. Creating the Electrodes

- Cut two short plugs of **[Brass](/en/materials/brass)** or **[Silver](/en/materials/silver)** wire that fit snugly inside the glass tube.
- Polish the facing ends of the plugs to ensure clean electrical contact.

### 3. Sourcing Metal Filings

- Use a fine metal file to grate filings from a piece of **[Iron](/en/materials/iron)**, nickel, or silver.
- Sift the filings to remove any extremely fine dust or large chunks. A mixture of 90% nickel and 10% iron filings is historically optimal, but pure iron or brass filings can function adequately.
- Ensure the filings are kept completely dry and free of oils to prevent thick oxide layers from forming.

### 4. Assembling the Coherer

- Insert one electrode plug into the glass tube and seal it in place, leaving a wire lead extending out.
- Fill a tiny gap of about 1 to 2 millimeters inside the tube with a small quantity of the prepared metal filings. The gap should be only partially filled (about half-full) to allow the filings to shift freely.
- Insert the second electrode plug, leaving the specified gap with filings in between, and seal the outer end.

### 5. Integrating the Tapper

- Mount the glass tube near an electromagnetic hammer (a buzzer or a modified electric bell mechanism).
- Wire the electromagnet so that whenever a signal is received and current flows through the coherer circuit, the hammer strikes the tube gently to shake the filings and reset the coherer's resistance.

## Materials needed

- **Glass Tube**: The insulating container. Sourced from **[Glass](/en/materials/glass)**.
- **Metal Filings**: The active detecting medium. Sourced from **[Iron](/en/materials/iron)**, **[Brass](/en/materials/brass)**, or **[Silver](/en/materials/silver)**.
- **Electrodes**: Conductive contact plugs. Sourced from **[Brass](/en/materials/brass)** or copper.
- **Connecting Wire**: To build the receiver circuit. Sourced from **[Wire](/en/materials/wire)**.
- **De-coherer Hammer**: Sourced from a simple electromagnet or buzzer mechanism.

### Related Inventions

- **[Spark-Gap Transmitter](/en/inventions/spark-gap-transmitter)**
- **[Relay](/en/inventions/relay)**
- **[Telegraph](/en/inventions/telegraph)**
- **[Electromagnet](/en/inventions/electromagnet)**

## Variants and improvements

- **Vacuum Coherer**: Sealing the tube in a vacuum prevents the filings from gradually oxidizing due to air exposure, which greatly increases reliability and operational lifespan.
- **Mercury-Iron Coherer (Castelli Coherer)**: Uses a drop of mercury between two iron electrodes. This design is self-restoring (automatically decohering as soon as the radio signal stops), eliminating the need for a mechanical tapper.

## Limits and risks

- **Low Speed**: Because it requires a mechanical tap to reset after every signal pulse, the coherer is extremely slow, limiting transmission speeds to about 10–15 words per minute.
- **Mechanical Sensitivity**: External vibrations or shaking can accidentally cause the filings to cohere or decohere, leading to false signals or missed messages.
- **Atmospheric Noise**: Highly sensitive to static electricity, lightning, and other ambient electromagnetic interference, which can trigger the coherer and corrupt received telegraphic messages.
