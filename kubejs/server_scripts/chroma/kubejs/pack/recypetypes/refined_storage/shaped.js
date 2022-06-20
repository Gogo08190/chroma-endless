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
      },
      ///Importer
      {
          output: 'refinedstorage:importer',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A:'refinedstorage:cable',
              B:'refinedstorage:destruction_core',
              C:'xnet:connector_blue',
              D:'refinedstorage:quartz_enriched_iron',
              E:'refinedstorage:improved_processor'
          },
          id: 'refinedstorage:importer'
      },
      ///Exporter
      {
          output: 'refinedstorage:exporter',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A:'refinedstorage:cable',
              B:'refinedstorage:construction_core',
              C:'xnet:connector_blue',
              D:'refinedstorage:quartz_enriched_iron',
              E:'refinedstorage:improved_processor'
          },
          id: 'refinedstorage:exporter'
      },
      ///Interface
      {
          output: 'refinedstorage:interface',
          pattern: ['ABA', 'CDC', 'AEA'],
          key: {
              A:'refinedstorage:cable',
              B:'refinedstorage:importer',
              C:'extendedcrafting:redstone_ingot',
              D:'refinedstorage:machine_casing',
              E:'refinedstorage:exporter'
          },
          id: 'refinedstorage:interface'
      },
      ///Constructor
      {
          output: 'refinedstorage:constructor',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A:'refinedstorage:cable',
              B:'refinedstorage:construction_core',
              C:'xnet:connector_blue',
              D:'enderioalloys:item_alloy_ingot_vivid_alloy',
              E:'refinedstorage:improved_processor'
          },
          id: 'refinedstorage:constructor'
      },
      ///Destructor
      {
          output: 'refinedstorage:destructor',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A:'refinedstorage:cable',
              B:'refinedstorage:destruction_core',
              C:'xnet:connector_blue',
              D:'enderioalloys:item_material_glazed_nether_brick',
              E:'refinedstorage:improved_processor'
          },
          id: 'refinedstorage:destructor'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
