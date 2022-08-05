onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/ender_crafter/';
    const recipes = [
      {
          pattern: ['ABA', 'CDC', 'AEA'],
          key: {
            A: { item: 'envirocore:structure_panel' },
            B: { item: 'mekanism:hdpe_sheet' },
            C: { item: 'extendedcrafting:black_iron_ingot' },
            D: { item: 'mekanism:upgrade_speed' },
            E: { item: 'create:shaft' }
          },
          result: { item: 'masterfulmachinery:cuttingmachine_cuttingmachine_speed_port_create_rotation_input', count: 1 },
          id: `${id_prefix}cuttingmachine_cuttingmachine_speed_port_create_rotation_input`
      },
      {
          pattern: ['ABA', 'CDC', 'AEA'],
          key: {
            A: { item: 'envirocore:structure_panel' },
            B: { item: 'mekanism:hdpe_sheet' },
            C: { item: 'enderioalloys:item_alloy_ingot_redstone_alloy' },
            D: { item: 'expandedstorage:netherite_chest' },
            E: { item: 'refinedpipes:advanced_item_pipe' }
          },
          result: { item: 'masterfulmachinery:cuttingmachine_cuttingmachine_item_port_items_output', count: 1 },
          id: `${id_prefix}cuttingmachine_cuttingmachine_item_port_items_output`
      },
      {
          pattern: ['ABA', 'CDC', 'AEA'],
          key: {
            A: { item: 'envirocore:structure_panel' },
            B: { item: 'mekanism:hdpe_sheet' },
            C: { item: 'enderioalloys:item_alloy_ingot_vibrant_alloy' },
            D: { item: 'expandedstorage:netherite_chest' },
            E: { item: 'refinedpipes:advanced_item_pipe' }
          },
          result: { item: 'masterfulmachinery:cuttingmachine_cuttingmachine_item_port_items_input', count: 1 },
          id: `${id_prefix}cuttingmachine_cuttingmachine_item_port_items_input`
      }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:shaped_ender_crafter',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
