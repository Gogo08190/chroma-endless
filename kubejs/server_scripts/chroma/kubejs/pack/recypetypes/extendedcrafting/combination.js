onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/elementalcraft/pureinfusion/';

    const recipes = [
      {
          inputs: [
              { item: 'extendedcrafting:basic_component' },
              { item: 'extendedcrafting:basic_component' },
              { item: 'create:mechanical_crafter' },
              { tag: 'forge:storage_blocks/iron' },
              { item: 'extendedcrafting:basic_component' },
              { item: 'extendedcrafting:basic_component' },
              { tag: 'forge:storage_blocks/iron' },
              { item: 'create:mechanical_crafter' }
          ],
          catalyst: { item: 'extendedcrafting:basic_catalyst' },
          powerCost: 10000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:basic_table' },
          id: 'extendedcrafting:basic_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:advanced_component' },
              { item: 'extendedcrafting:advanced_component' },
              { item: 'extendedcrafting:basic_table' },
              { tag: 'forge:storage_blocks/gold' },
              { item: 'extendedcrafting:advanced_component' },
              { item: 'extendedcrafting:advanced_component' },
              { tag: 'forge:storage_blocks/gold' },
              { item: 'extendedcrafting:basic_table' }
          ],
          catalyst: { item: 'extendedcrafting:advanced_catalyst' },
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:advanced_table' },
          id: 'extendedcrafting:advanced_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:elite_component' },
              { item: 'extendedcrafting:elite_component' },
              { item: 'extendedcrafting:advanced_table' },
              { tag: 'forge:storage_blocks/diamond' },
              { item: 'extendedcrafting:elite_component' },
              { item: 'extendedcrafting:elite_component' },
              { tag: 'forge:storage_blocks/diamond' },
              { item: 'extendedcrafting:advanced_table' }
          ],
          catalyst: { item: 'extendedcrafting:elite_catalyst' },
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:elite_table' },
          id: 'extendedcrafting:elite_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:ultimate_component' },
              { item: 'extendedcrafting:ultimate_component' },
              { item: 'extendedcrafting:elite_table' },
              { tag: 'forge:storage_blocks/emerald' },
              { item: 'extendedcrafting:ultimate_component' },
              { item: 'extendedcrafting:ultimate_component' },
              { tag: 'forge:storage_blocks/emerald' },
              { item: 'extendedcrafting:elite_table' }
          ],
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:ultimate_table' },
          id: 'extendedcrafting:ultimate_table'
      },
      {
          inputs: [
              { item: 'kubejs:angel_ring_part_1' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_2' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_3' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_4' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_5' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_6' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_7' },
              { item: 'kubejs:angel_ring_connector' },
              { item: 'kubejs:angel_ring_part_8' },
              { item: 'kubejs:angel_ring_connector' }
          ],
          catalyst: { item: 'minecraft:gold_block' /* Item temporaire ; idée : Gold Singularity ? */ },
          powerCost: 100000,
          powerRate: 1000,
          result: { item: 'miniutilities:angel_ring' },
          id: 'miniutilities:angel_ring'
      }
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'extendedcrafting:combination',
                powerCost: recipe.powerCost,
                powerRate: recipe.powerRate,
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
