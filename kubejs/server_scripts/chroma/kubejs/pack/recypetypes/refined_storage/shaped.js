onEvent('recipes', (event) => {
    const recipes = [
      {
          output: Item.of('refinedstorage:processor_binding', 8),
          pattern: ['SBS'],
          key: {
              S: 'botania:mana_string',
              B: '#forge:slimeballs'
          },
          id: 'refinedstorage:processor_binding'
      },
      ///Cable
      {
          output: 'refinedstorage:cable',
          pattern: ['AAA', 'BCB', 'AAA'],
          key: {
              A:'refinedstorage:quartz_enriched_iron',
              B:'thermal:obsidian_glass',
              C:'extendedcrafting:redstone_ingot'
          },
          id: 'refinedstorage:cable'
      },
      ///External storage
      {
          output: 'refinedstorage:external_storage',
          pattern: [' A ', 'BCD', 'EFE'],
          key: {
              A:'refinedstorage:cable',
              B:'refinedstorage:destruction_core',
              C:'xnet:connector_blue',
              D:'refinedstorage:construction_core',
              E:'refinedstorage:quartz_enriched_iron',
              F:'refinedstorage:improved_processor'
          },
          id: 'refinedstorage:external_storage'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
