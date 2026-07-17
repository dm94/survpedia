---
title: Solvay Process
relatedMaterials:
  - salt
  - limestone
  - ammonia
relatedInventions:
  - furnace
  - pump
image: ../../../assets/images/knowledge/solvay-process.jpg
---

# Brief description

The Solvay process (or ammonia-soda process) is the major industrial chemical process for producing sodium carbonate (soda ash, $Na_2CO_3$). It reacts sodium chloride (brine) and calcium carbonate (limestone) using ammonia as a cyclical reagent, which is recycled back into the process.

## Use / Function

- **Soda Ash Production**: Produces sodium carbonate, a key raw material for manufacturing glass, soap, paper, and detergents.
- **Glass Industry**: Lowers the melting temperature of silica sand, enabling the mass production of cheap glass containers and window panes.
- **Water Treatment**: Softens water and neutralizes acids.
- **Chemical Precursor**: Used to manufacture sodium bicarbonate (baking soda) and other industrial sodium salts.

## Operating principle

The overall chemical equation is:

$$2\text{NaCl} + \text{CaCO}_3 \rightarrow \text{Na}_2\text{CO}_3 + \text{CaCl}_2$$

This reaction does not occur directly. Instead, the Solvay process uses ammonia ($NH_3$) in a closed loop to facilitate the reaction:

1. **Brine Saturation**: Concentrated sodium chloride solution (brine) is saturated with ammonia gas.
2. **Carbonation**: Limestone (calcium carbonate, $CaCO_3$) is heated in a kiln (calcination) to produce quicklime ($CaO$) and carbon dioxide ($CO_2$). This $CO_2$ is bubbled through the ammoniacal brine.
3. **Precipitation**: The carbon dioxide reacts with the dissolved ammonia and salt to precipitate sodium bicarbonate ($NaHCO_3$), leaving ammonium chloride ($NH_4Cl$) in solution:

$$\text{NaCl} + \text{NH}_3 + \text{CO}_2 + \text{H}_2\text{O} \rightarrow \text{NaHCO}_3 \downarrow + \text{NH}_4\text{Cl}$$

4. **Calcination**: The precipitated sodium bicarbonate is filtered and heated to produce sodium carbonate, water, and $CO_2$ (which is recycled back into step 2):

$$2\text{NaHCO}_3 \rightarrow \text{Na}_2\text{CO}_3 + \text{H}_2\text{O} + \text{CO}_2 \uparrow$$

5. **Ammonia Recovery**: The quicklime ($CaO$) from step 2 is slaked with water to form calcium hydroxide ($Ca(OH)_2$), which is then reacted with the ammonium chloride solution from step 3 to recover the ammonia gas, leaving calcium chloride ($CaCl_2$) as the only waste product:

$$2\text{NH}_4\text{Cl} + \text{Ca(OH)}_2 \rightarrow \text{CaCl}_2 + 2\text{H}_2\text{O} + 2\text{NH}_3 \uparrow$$

## How to implement

### 1. Lime Kiln
- Build a vertical shaft kiln to heat **[Limestone](/en/materials/limestone)** to 900–1000°C to release carbon dioxide gas and create quicklime.

### 2. Carbonating Towers
- Construct tall absorption columns where carbon dioxide bubbles upwards through down-flowing ammoniacal brine. These must be cooled as the reaction is exothermic.

### 3. Filtration and Recovery
- Implement vacuum filters or centrifuges to separate the precipitated sodium bicarbonate crystals.
- Build an ammonia recovery still where calcium hydroxide is mixed with the leftover ammonium chloride solution and heated with steam to distill and recover ammonia.

## Materials needed

- **Salt Brine**: Concentrated sodium chloride solution, sourced from salt deposits or seawater.
- **Limestone**: Calcium carbonate stone, mined or quarried.
- **Ammonia**: Initially required as a charge, though mostly recycled.
- **Refractory Bricks**: For lining the lime kiln and calcining furnaces.

## Variants and improvements

- **Leblanc Process**: The historical predecessor, which used sulfuric acid, coal, and limestone. It was highly polluting and inefficient compared to the Solvay process.
- **Hou's Process**: A modification developed in China that recycles the ammonium chloride to produce ammonium chloride fertilizer instead of wasting it as calcium chloride.
- **Natural Trona Mining**: Mining natural sodium carbonate deposits (trona), which is cheaper in regions where large deposits exist (like Wyoming).

## Limits and risks

- **Ammonia Leakage**: Ammonia is toxic and corrosive; even small leaks in the cycle present hazardous work conditions and environmental hazards.
- **Calcium Chloride Disposal**: The byproduct (calcium chloride) can cause environmental salinization if dumped in large quantities into local waterways.
- **Corrosive Solutions**: Hot brine and ammonium chloride solutions are highly corrosive, requiring specialized piping and vessels.
