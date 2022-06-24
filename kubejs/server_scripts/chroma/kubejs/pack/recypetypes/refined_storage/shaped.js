onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/refined_storage/shaped/';
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
          output: Item.of('refinedstorage:cable', 12),
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
              A:'refinedstorage:quartz_enriched_iron',
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
      },
      ///Grid
      {
          output: 'refinedstorage:grid',
          pattern: ['ABC', 'DEC', 'AFC'],
          key: {
              A:'refinedstorage:improved_processor',
              B:'refinedstorage:construction_core',
              C:'thermal:obsidian_glass',
              D:'rftoolscontrol:graphics_card',
              E:'refinedstorage:machine_casing',
              F:'refinedstorage:destruction_core'
          },
          id: 'refinedstorage:grid'
      },
      ///network receiver
      {
          output: 'refinedstorage:network_receiver',
          pattern: ['ABA', 'CDE', 'FGF'],
          key: {
              A:'botania:mana_diamond_block',
              B:'refinedstorage:advanced_processor',
              C:'refinedstorage:construction_core',
              D:'refinedstorage:machine_casing',
              E:'refinedstorage:destruction_core',
              F:'emendatusenigmatica:enderium_gear',
              G:'enderioalloys:item_material_pulsating_crystal'
          },
          id: 'refinedstorage:network_receiver'
      },
      ///network transmitter
      {
          output: 'refinedstorage:network_transmitter',
          pattern: ['ABA', 'CDE', 'FGF'],
          key: {
              A:'emendatusenigmatica:enderium_gear',
              B:'refinedstorage:advanced_processor',
              C:'refinedstorage:construction_core',
              D:'refinedstorage:machine_casing',
              E:'refinedstorage:destruction_core',
              F:'botania:mana_diamond_block',
              G:'rftoolscontrol:advanced_network_card'
          },
          id: 'refinedstorage:network_transmitter'
      },
      ///Crafter
      {
          output: 'refinedstorage:crafter',
          pattern: ['BAB', 'CMD', 'BZB'],
          key: {
              B:'create:mechanical_crafter',
              A:'refinedstorage:advanced_processor',
              C:'refinedstorage:construction_core',
              M:'refinedstorage:machine_casing',
              D:'refinedstorage:destruction_core',
              Z:'enderioalloys:item_material_skull_zombie_controller'
          },
          id: 'refinedstorage:crafter'
      },
      ///Wireless transmitter
      {
          output: 'refinedstorage:wireless_transmitter',
          pattern: [' A ', 'CMC', 'CNC'],
          key: {
              A:'refinedstorage:advanced_processor',
              C:'pneumaticcraft:ingot_iron_compressed',
              M:'refinedstorage:machine_casing',
              N:'rftoolscontrol:advanced_network_card'
          },
          id: 'refinedstorage:wireless_transmitter'
      },
      ///Crafting Monitor
      {
          output: 'refinedstorage:crafting_monitor',
          pattern: ['IPO', 'QMO', 'IPO'],
          key: {
              I:'refinedstorage:improved_processor',
              P:'refinedstorage:pattern',
              O:'thermal:obsidian_glass',
              Q:'refinedstorage:quartz_enriched_iron',
              M:'refinedstorage:machine_casing'
          },
          id: 'refinedstorage:crafting_monitor'
      },
      ///Crafting Manager
      {
          output: 'refinedstorage:crafter_manager',
          pattern: ['ACO', 'QMO', 'ACO'],
          key: {
              A:'refinedstorage:advanced_processor',
              C:'refinedstorage:crafter',
              O:'thermal:obsidian_glass',
              Q:'refinedstorage:quartz_enriched_iron',
              M:'refinedstorage:machine_casing'
          },
          id: 'refinedstorage:crafter_manager'
      },
      ///Wireless Grid
      {
          output: Item.of('refinedstorage:wireless_grid', '{Energy:0}'),
          pattern: ['QIQ', 'QGQ', 'QAQ'],
          key: {
              Q:'refinedstorage:quartz_enriched_iron',
              I:'rftoolsbase:infused_enderpearl',
              G:'refinedstorage:grid',
              A:'refinedstorage:advanced_processor'
          },
          id: 'refinedstorage:wireless_grid'
      },
      ///Wireless Fluid Grid
      {
          output: Item.of('refinedstorage:wireless_fluid_grid', '{Energy:0}'),
          pattern: ['QIQ', 'QGQ', 'QAQ'],
          key: {
              Q:'refinedstorage:quartz_enriched_iron',
              I:'rftoolsbase:infused_enderpearl',
              G:'refinedstorage:fluid_grid',
              A:'refinedstorage:advanced_processor'
          },
          id: 'refinedstorage:wireless_fluid_grid'
      },
      ///Wireless Crafting Monitor
      {
          output: Item.of('refinedstorage:wireless_crafting_monitor', '{Energy:0}'),
          pattern: ['QIQ', 'QGQ', 'QAQ'],
          key: {
              Q:'refinedstorage:quartz_enriched_iron',
              I:'rftoolsbase:infused_enderpearl',
              G:'refinedstorage:crafting_monitor',
              A:'refinedstorage:advanced_processor'
          },
          id: 'refinedstorage:wireless_crafting_monitor'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
