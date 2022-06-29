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
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_table' }
          ],
          catalyst: { item: 'extendedcrafting:basic_table'},
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:basic_auto_table' },
          id: 'extendedcrafting:basic_auto_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_table' }
          ],
          catalyst: { item: 'extendedcrafting:advanced_table'},
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:advanced_auto_table' },
          id: 'extendedcrafting:advanced_auto_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_table' }
          ],
          catalyst: { item: 'extendedcrafting:elite_table'},
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:elite_auto_table' },
          id: 'extendedcrafting:elite_auto_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_table' }
          ],
          catalyst: { item: 'extendedcrafting:ultimate_table'},
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:ultimate_auto_table' },
          id: 'extendedcrafting:ultimate_auto_table'
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
