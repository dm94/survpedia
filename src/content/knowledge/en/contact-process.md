---
title: Contact Process
relatedMaterials:
  - sulfuric-acid
  - sulfur
  - water
relatedInventions:
  - furnace
  - pump
image: ../../../assets/images/knowledge/contact-process.jpg
---

# Brief description

The Contact Process is the primary modern industrial method for producing high-concentration sulfuric acid ($H_2SO_4$). Sulfuric acid is the "lifeblood of chemistry" and the core benchmark of a nation's industrial capacity, used in refining, batteries, metallurgy, and chemical manufacturing.

## Use / Function

- **Industrial Acid Production**: Synthesizes highly concentrated sulfuric acid (98% or oleum), an essential reagent for manufacturing fertilizers, dyes, detergents, and explosives.
- **Fertilizer Manufacture**: Used to process phosphate rock into soluble superphosphate fertilizers.
- **Metal Processing**: Used in "pickling" to clean steel and iron surfaces before galvanizing or coating.
- **Petroleum Refining**: Serves as a catalyst in alkylation processes to increase gasoline octane ratings.
- **Scale**: Heavy industrial chemical plants working continuously.

## Operating principle

The overall process converts sulfur ($S$) or sulfur dioxide ($SO_2$) into sulfuric acid ($H_2SO_4$) through catalytic oxidation:

1. **Combustion of Sulfur**: Solid sulfur is burned in dry air to produce sulfur dioxide gas ($SO_2$):

$$S (s) + O_2 (g) \rightarrow SO_2 (g)$$

2. **Catalytic Oxidation**: Sulfur dioxide is reacted with excess oxygen over a vanadium pentoxide ($V_2O_5$) catalyst at high temperatures (around 450°C) to form sulfur trioxide ($SO_3$):

$$2SO_2 (g) + O_2 (g) \rightleftharpoons 2SO_3 (g) \quad (\Delta H = -197 \text{ kJ/mol})$$

This is a reversible exothermic reaction. To maximize yield, the gas mixture is passed through multiple catalyst beds with intermediate cooling.

3. **Absorption**: Sulfur trioxide is absorbed into pre-existing concentrated sulfuric acid (98%) to form a heavy, fuming liquid called **oleum** ($H_2S_2O_7$):

$$SO_3 (g) + H_2SO_4 (l) \rightarrow H_2S_2O_7 (l)$$

Direct dissolution of $SO_3$ in water is extremely exothermic and produces a dense, uncontrollable mist of sulfuric acid droplets rather than a liquid.

4. **Dilution**: The oleum is carefully diluted with water to produce highly concentrated sulfuric acid:

$$H_2S_2O_7 (l) + H_2O (l) \rightarrow 2H_2SO_4 (l)$$

## How to implement

### 1. Sulfur Burner

- Build a refractory-lined furnace to melt and burn elemental sulfur.
- Inject dry, compressed air to ensure complete combustion to sulfur dioxide. Moisture must be completely removed (using a drying tower with existing sulfuric acid) to prevent premature acid formation and corrosion.

### 2. Converter (Catalytic Reactor)

- Build a multi-stage steel reactor tower containing trays of porous vanadium pentoxide ($V_2O_5$) or platinum catalyst.
- Implement heat exchangers between stages to cool the gas mixture back to 400°C–450°C, maintaining the optimal temperature for high catalytic activity and favorable equilibrium.

### 3. Absorption and Dilution Towers

- Construct ceramic-lined packed absorption columns. Sulfur trioxide gas enters at the bottom, while concentrated 98% acid trickles down from the top over ceramic packing to maximize surface contact.
- Use a separate dilution vessel with heavy cooling jackets to safely mix the resulting oleum with clean water.

## Materials needed

- **Elemental Sulfur**: Mined, extracted from volcanic deposits, or recovered from petroleum refining. Alternatively, iron pyrites ($FeS_2$) can be roasted in air to produce sulfur dioxide.
- **Oxygen/Air**: Extracted from atmospheric air, thoroughly dried.
- **Catalyst**: Vanadium pentoxide ($V_2O_5$) supported on silica, or platinum wire mesh (more expensive and easily poisoned by impurities).
- **Water**: High-purity water for safe dilution.
- **Refractory Bricks**: To line sulfur burners.
- **Acid-Resistant Alloys or Ceramics**: To withstand extremely hot and highly corrosive fuming acids.

## Variants and improvements

- **Lead Chamber Process**: The older historical predecessor. It used nitrogen oxides as catalysts in lead-lined chambers, but could only produce acid up to 70% concentration.
- **Double Contact Double Absorption (DCDA)**: Modern plants pass unreacted $SO_2$ through a secondary converter and absorber, increasing chemical conversion efficiency to over 99.7% and minimizing sulfur dioxide emissions.

## Limits and risks

- **Corrosion and Embrittlement**: Hot sulfuric acid is aggressively corrosive. Specialized materials (like high-silicon cast iron or acid-resistant brick) are mandatory.
- **Toxic Emissions**: Sulfur dioxide leaks are highly irritating to the eyes and lungs, and contribute directly to acid rain.
- **Water Reactivity**: Concentrated sulfuric acid reacts violently with water. Water must _always_ be added slowly to the acid with cooling, never the reverse, to prevent explosive boiling and splashing.
