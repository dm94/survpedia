---
title: Birkeland-Eyde Process
relatedMaterials:
  - nitric-acid
  - water
  - copper
relatedInventions:
  - electric-generator
  - furnace
  - boiler
  - pump
image: ../../../assets/images/knowledge/birkeland-eyde-process.jpg
---

# Brief description

The Birkeland-Eyde Process was one of the earliest industrial processes for fixing atmospheric nitrogen to produce nitrogen-based synthetic fertilizers and nitric acid. Developed by Norwegian scientist Kristian Birkeland and industrialist Sam Eyde in 1903, it utilizes a high-energy electric arc to force atmospheric nitrogen and oxygen to react, bypassing the need for ammonia or fossil fuels.

## Use / Function

- **Nitric Acid Production**: Yields dilute nitric acid, an essential chemical for manufacturing industrial explosives and chemicals.
- **Nitrogen-Based Fertilizer Production**: Allowed the manufacture of calcium nitrate ("Norway saltpeter"), the first synthetic nitrogen fertilizer that helped sustain global agricultural yields before Haber-Bosch.
- **Scale**: Heavy industrial chemical processing, requiring highly specialized electrical infrastructure and massive power input.

## Operating principle

The process mimics the natural action of lightning to chemically bind atmospheric nitrogen and oxygen in three main chemical reactions:

1. **Nitrogen Fixation (Electric Arc)**: Air is pumped through an intense, flat electric arc (magnetic plasma flame) maintained at temperatures around 3000°C. Under this extreme heat, nitrogen ($N_2$) and oxygen ($O_2$) combine to produce nitric oxide ($NO$):

$$\text{N}_2 (g) + \text{O}_2 (g) \leftrightarrow 2\text{NO} (g) \quad (\Delta H = +180 \text{ kJ/mol})$$

To prevent the nitric oxide from decomposing back into raw gases, the hot air is rapidly cooled to below 1000°C as it leaves the furnace.

2. **Oxidation**: The cooled nitric oxide gas is further cooled to around 50°C and reacted with excess atmospheric oxygen to produce nitrogen dioxide ($NO_2$), a reddish-brown gas:

$$2\text{NO} (g) + \text{O}_2 (g) \rightarrow 2\text{NO}_2 (g)$$

3. **Absorption**: The nitrogen dioxide gas is piped into absorption towers where it is absorbed by trickling water to form nitric acid ($HNO_3$):

$$3\text{NO}_2 (g) + \text{H}_2\text{O} (l) \rightarrow 2\text{HNO}_3 (aq) + \text{NO} (g)$$

To produce solid fertilizer, the nitric acid is reacted with limestone (calcium carbonate, $CaCO_3$) to yield calcium nitrate ($Ca(NO_3)_2$).

## How to implement

### 1. Electric Arc Furnace
- Construct a furnace with two water-cooled copper electrodes placed close together.
- Connect a massive electric generator supplying high-voltage alternating current (AC).
- Place the electrodes in the field of a strong electromagnet. The magnetic field flattens the electric arc into a wide, circular disc of plasma (up to 2 meters in diameter), maximizing contact with incoming air.

### 2. Rapid Cooling Heat Exchangers
- Route the hot gases from the furnace through a high-pressure steam **[Boiler](/en/inventions/boiler)**.
- This serves a dual purpose: it instantly chills the gases to preserve the nitric oxide yield and generates useful steam power for other plant operations.

### 3. Acid Absorption Towers
- Erect a series of tall granite or acid-proof brick towers packed with acid-resistant quartz.
- Use a water-pump system to trickle water down from the top of the towers while gas flows up from the bottom.

## Materials needed

- **Atmospheric Air**: Sourced directly from the environment.
- **Water**: Used for cooling the electrodes and absorbing the gases to form acid. Sourced from **[Water](/en/materials/water)**.
- **Copper**: For the water-cooled electrodes. Sourced from **[Copper](/en/materials/copper)**.
- **Nitric Acid ($HNO_3$)**: The primary chemical output of the process. Sourced from **[Nitric Acid](/en/materials/nitric-acid)**.
- **Refractory and Granite Blocks**: To build the high-temperature furnace chamber and corrosive gas absorption towers.

## Variants and improvements

- **Haber-Bosch and Ostwald Process**: The ultimate improvement. The Birkeland-Eyde process was highly inefficient, consuming about 15 megawatt-hours of electricity per ton of nitric acid produced. It was replaced by combining Haber-Bosch (producing ammonia) with Ostwald's catalytic oxidation, which consumes only a fraction of the electricity.

## Limits and risks

- **Extreme Energy Consumption**: The process is economically viable only where extremely cheap, abundant electricity (such as hydroelectric power) is available.
- **Electrode Degradation**: The intense electric arc slowly vaporizes the copper electrodes, which require regular replacement and maintenance.
- **Nitrogen Dioxide Hazard**: Nitrogen dioxide gas is extremely toxic and corrosive. Any leaks in the absorption or transport piping pose immediate respiratory hazards to operators.
