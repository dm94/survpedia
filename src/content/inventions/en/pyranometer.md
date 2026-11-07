---
title: Pyranometer
materialsUsed:
  - metal
  - glass
  - wire
  - wood
---

# Brief description

A pyranometer is an actinometric instrument designed to measure broadband solar irradiance received from a hemispherical field of view on a planar surface. Unlike a pyrheliometer—which tracks and measures only the narrow, direct solar beam—a pyranometer captures global solar radiation, which comprises both direct sunlight and diffuse sky radiation scattered by the atmosphere, clouds, and surrounding terrain. It provides essential quantitative data for climate science, agricultural yield forecasting, architectural daylighting, and photovoltaic system engineering.

## Use / Function

- **Global Solar Irradiance Measurement:** Measuring total radiant power per unit area ($\text{W/m}^2$) incident on horizontal or tilted planes.
- **Meteorological and Climate Monitoring:** Recording daily solar energy budgets, insolation duration, and seasonal atmospheric transmission trends.
- **Renewable Energy Assessment:** Optimizing the tilt, layout, and performance ratios of solar photovoltaic arrays and thermal collectors.
- **Agricultural Microclimatology:** Determining available photosynthetically active radiation and estimating crop evapotranspiration rates.

## Operating principle

1. **Hemispherical Directional Acceptance:** Precision optical glass domes ensure an unattenuated $2\pi$ steradian (180-degree) field of view while obeying Lambert's cosine law, meaning the recorded irradiance varies with the cosine of the solar zenith angle ($\theta$).
2. **Thermal Conversion:** Incoming solar flux passes through the transparent dome and impinges upon a high-absorptance black sensor disk (or alternating black and white sectors), converting radiant optical energy into sensible heat.
3. **Differential Thermopile Sensing:** In thermopile pyranometers, a radial or vertical array of series-connected thermocouples (such as copper-constantan or bismuth-antimony junctions) bridges the hot blackened receiver and an insulated, high-heat-capacity metal body acting as a heat sink.
4. **Thermoelectric Voltage Generation:** According to the Seebeck effect, the temperature difference between the active blackened target and the cold reference junctions generates a minute direct current electromotive force ($V \propto \Delta T$), directly proportional to the incident total solar flux.
5. **Spectral Filtering and Convection Shielding:** The concentric outer glass dome blocks long-wave thermal infrared radiation emitted by the ambient air and prevents convective cooling of the blackened detector by external winds.

## How to create it

1. **Machine the Instrument Body:** Turn a solid cylinder of brass, aluminum, or thermally massive bronze on a lathe, milling a central sensing cavity and a surrounding planar flange equipped with adjustable leveling screws and a circular spirit level.
2. **Fabricate the Thermopile Receiver:** Assemble a differential thermopile by winding fine constantan resistance wire around a thin mica core, electroplating half of each turn with copper, or soldering alternating pairs of dissimilar metal junctions in series.
3. **Form Thermal Junctions:** Affix the active hot junctions beneath a thin, blackened copper receiver disc coated with matte carbon soot or lampblack, while bedding the cold reference junctions into thermally conductive contact with the main metal heat sink.
4. **Fit Optical Hemispherical Domes:** Grind and polish two concentric hemispherical optical glass domes (typically optical-grade crown or borosilicate glass), securing them over the sensor with hermetic O-ring gaskets and desiccated sealing chambers.
5. **Wire Signal Terminals:** Route insulated copper output leads through a water-tight seal to external binding posts, incorporating internal silica gel desiccant packs to prevent condensation under the glass dome.
6. **Calibrate Against Standard:** Position the finished instrument alongside a calibrated reference pyrheliometer or standard pyranometer on a cloudless day, establishing the device calibration constant ($k = V / G$, typically expressed in $\mu\text{V} / (\text{W/m}^2)$).

## Materials needed

- **Essential:** Thermally conductive **[Metal](/en/materials/metal)** (brass, copper, aluminum) for the heat-sink body and leveling base; optical-grade **[Glass](/en/materials/glass)** for hemispherical weather domes; fine thermoelectric **[Wire](/en/materials/wire)** (copper, constantan, or nickel alloys) for the thermopile; and well-seasoned **[Wood](/en/materials/wood)** or phenolic composites for thermal insulation bases.
- **Tools:** Metal lathe, micro-soldering station, precision millivoltmeter or galvanometer, optical polishing lap, spirit level, desiccant capsules.
- **Substitutes:** Photovoltaic pyranometers substitute thermopiles with calibrated silicon photodiodes; primitive differential pyranometers use bimetallic expansion strips driving mechanical recording pens.

## Variants and improvements

- **Thermopile Pyranometer:** The international standard meteorological instrument utilizing multi-junction thermopiles for flat spectral response from 300 to 2800 nm.
- **Star Pyranometer:** Employs interleaved black and white star-shaped ceramic or metal sectors beneath a single dome; white sectors reflect sunlight to serve as cold reference junctions without massive metallic heat sinks.
- **Silicon Photodiode Pyranometer:** Uses a small, planar semiconductor photodiode covered with an optical cosine diffuser; highly responsive and compact, though limited to the silicon spectral absorption band (400–1100 nm).
- **Albedometer:** Consists of two back-to-back pyranometers—one facing upward toward the sky and one facing downward toward the ground—to measure surface albedo and reflected solar radiation.

## Limits and risks

- **Cosine Error:** Deviations from true Lambertian cosine response at low solar elevations (sun near the horizon) can produce measurement inaccuracies during dawn and dusk.
- **Dome Dew and Frosting:** Condensation, frost, or dust settling on the outer glass dome diffuses or attenuates incoming light, requiring routine cleaning and optional ventilation fans.
- **Thermal Offset Errors:** Net infrared radiative cooling of the outer glass dome to a clear, cold sky can induce negative thermal zero offsets during calm nighttime conditions.

### Related Inventions

- **[Pyrheliometer](/en/inventions/pyrheliometer)**
- **[Actinometer](/en/inventions/actinometer)**
- **[Thermocouple](/en/inventions/thermocouple)**
- **[Bolometer](/en/inventions/bolometer)**
- **[Solar Cooker](/en/inventions/solar-cooker)**

### Related Materials

- **[Metal](/en/materials/metal)**
- **[Glass](/en/materials/glass)**
- **[Wire](/en/materials/wire)**
- **[Wood](/en/materials/wood)**
