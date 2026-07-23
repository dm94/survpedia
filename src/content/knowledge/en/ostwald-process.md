---
title: Ostwald Process
relatedMaterials:
  - nitric-acid
  - ammonia
  - water
  - platinum
relatedInventions:
  - furnace
  - air-compressor
  - pump
image: ../../../assets/images/knowledge/ostwald-process.jpg
---

# Brief description

The Ostwald Process is a fundamental chemical process used to produce nitric acid ($HNO_3$) from ammonia ($NH_3$). Developed by Wilhelm Ostwald at the beginning of the 20th century, it is highly linked with the Haber-Bosch process, providing the primary industrial pathway for turning atmospheric nitrogen into fertilizers and industrial chemicals.

## Use / Function

- **Nitric Acid Production**: Generates concentrated nitric acid, which is critical for making nitrogen-based agricultural fertilizers (like ammonium nitrate).
- **Explosives Manufacturing**: Provides the essential precursor for nitrating compounds to make explosives (such as guncotton, nitroglycerin, and TNT).
- **Metallurgy and Chemical Synthesis**: Supplies acid for metal pickling, rocket propellants, and precursor organic synthesis.
- **Scale**: Large-scale chemical manufacturing plant working continuously.

## Operating principle

The process converts ammonia ($NH_3$) into nitric acid ($HNO_3$) via catalytic oxidation in three primary steps:

1. **Catalytic Oxidation of Ammonia**: Ammonia gas is mixed with dried air and passed through a fine catalytic mesh made of platinum (often alloyed with 10% rhodium) at high temperatures (800°C–900°C) and pressure. This exothermic reaction produces nitric oxide ($NO$) and water vapor:

$$4\text{NH}_3 (g) + 5\text{O}_2 (g) \rightarrow 4\text{NO} (g) + 6\text{H}_2\text{O} (g) \quad (\Delta H = -905.2 \text{ kJ/mol})$$

Once started, the reaction is self-sustaining due to its high heat release.

2. **Oxidation of Nitric Oxide**: The gas mixture is cooled, and the nitric oxide is allowed to react with excess oxygen to form nitrogen dioxide ($NO_2$):

$$2\text{NO} (g) + \text{O}_2 (g) \rightarrow 2\text{NO}_2 (g) \quad (\Delta H = -114 \text{ kJ/mol})$$

3. **Absorption**: The nitrogen dioxide gas is absorbed in water inside a reaction tower. It reacts with water to yield dilute nitric acid ($HNO_3$) and nitric oxide ($NO$), which is recycled back to the second step:

$$3\text{NO}_2 (g) + \text{H}_2\text{O} (l) \rightarrow 2\text{HNO}_3 (aq) + \text{NO} (g)$$

To maximize acid concentration and yield, additional oxygen is introduced to oxidize the liberated nitric oxide directly in the absorption column:

$$4\text{NO}_2 (g) + \text{O}_2 (g) + 2\text{H}_2\text{O} (l) \rightarrow 4\text{HNO}_3 (aq)$$

## How to implement

### 1. Catalytic Reactor

- Construct a pressurized vessel containing a fine mesh or gauze of **[Platinum](/en/materials/platinum)**.
- Implement pre-heaters to raise the incoming ammonia-air mixture to roughly 200°C to initiate the reaction on the catalyst surface.
- Design efficient gas-flow pathways to ensure a contact time of less than a few milliseconds, as longer exposure at high temperatures degrades the desired nitric oxide product.

### 2. Cooling and Oxidation Chambers

- Route the hot exhaust gases through a heat exchanger (such as a steam **[Boiler](/en/inventions/boiler)**) to quickly cool them down to below 150°C, promoting the oxidation of nitric oxide to nitrogen dioxide.
- Direct the gases into a dedicated oxidation vessel where additional atmospheric air is added.

### 3. Absorption Tower

- Build a tall absorption tower lined with acid-resistant ceramic or glass.
- Introduce water at the top of the tower to trickle down over packing materials (like ceramic rings) while the nitrogen dioxide gas enters from the bottom, maximizing gas-liquid contact.
- Use a **[Pump](/en/inventions/pump)** to recirculate the acid until the desired concentration (typically 50%–60%) is achieved.

## Materials needed

- **Ammonia ($NH_3$)**: Produced via the **[Haber-Bosch Process](/en/knowledge/haber-bosch-process)**.
- **Atmospheric Air**: Dried and filtered to remove impurities that could poison the catalyst.
- **Catalyst**: High-purity **[Platinum](/en/materials/platinum)** or platinum-rhodium wire mesh.
- **Water**: Demineralized water for optimal absorption and purity.
- **Acid-Resistant Alloys or Ceramics**: Specialized materials to handle highly corrosive nitrogen oxides and hot nitric acid.

## Variants and improvements

- **Dual-Pressure Process**: Operates the ammonia combustion step at medium pressure (for higher catalyst efficiency) and the absorption step at high pressure (to increase absorption rate and acid concentration).
- **Birkeland-Eyde Process**: The historical alternative that used a high-energy electric arc to directly fix atmospheric nitrogen into nitric oxide. It did not require ammonia, but consumed vast amounts of electricity.

## Limits and risks

- **Catalyst Poisoning**: Impurities in the air or ammonia feed (such as sulfur or heavy metals) can "poison" the platinum catalyst, stopping the reaction.
- **Nitrous Fumes**: Nitrogen dioxide is a highly toxic, reddish-brown gas. Leaks cause severe respiratory damage and are lethal in high concentrations.
- **Corrosive Degradation**: Nitric acid aggressively attacks standard metals. Glass, stone, or specialized high-chromium stainless steel must be used for containment.
