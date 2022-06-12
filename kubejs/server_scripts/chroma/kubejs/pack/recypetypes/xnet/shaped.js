onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'xnet:controller',
          pattern: ['ICI', 'RFR', 'ISI'],
          key: {
              I: '#forge:ingots/compressed_iron',
              C: 'minecraft:comparator',
              R: 'minecraft:repeater',
              F: 'kubejs:xnet_machine_frame',
              S: 'thermal:redstone_servo'
          },
          id: 'xnet:controller'
      },
      {
          output: 'xnet:controller',
          pattern: ['ICI', 'RFR', 'ISI'],
          key: {
              I: '#forge:ingots/compressed_iron',
              C: 'minecraft:comparator',
              R: 'minecraft:repeater',
              F: 'kubejs:xnet_machine_frame',
              S: 'thermal:redstone_servo'
          },
          id: 'xnet:controller'
      },
      {
          output: 'xnet:router',
          pattern: ['PPP', 'RFR', 'IEI'],
          key: {
              I: '#forge:ingots/compressed_iron',
              E: 'minecraft:ender_pearl',
              R: 'extendedcrafting:redstone_ingot',
              F: 'kubejs:xnet_machine_frame',
              P: 'minecraft:powered_rail'
          },
          id: 'xnet:router'
      },
      {
          output: 'xnet:wireless_router',
          pattern: ['ECE', 'RFR', 'ERE'],
          key: {
              C: 'minecraft:comparator',
              E: '#forge:ingots/enderium',
              R: 'extendedcrafting:redstone_ingot',
              F: 'kubejs:xnet_machine_frame'
          },
          id: 'xnet:wireless_router'
      },
      {
          output: 'xnet:antenna',
          pattern: ['BRB', 'BRB', ' R '],
          key: {
              B: 'minecraft:iron_bars',
              R: '#forge:rods/steel'
          },
          id: 'xnet:antenna'
      },
      {
          output: 'xnet:antenna_base',
          pattern: [' R ', ' R ', 'PBP'],
          key: {
              B: '#forge:storage_blocks/osmium',
              R: '#forge:rods/steel',
              P: '#forge:plates/steel'
          },
          id: 'xnet:antenna_base'
      },
      {
          output: 'xnet:antenna_dish',
          pattern: ['PPP', 'PEP', ' C '],
          key: {
              C: '#forge:ingots/compressed_iron',
              E: '#forge:ingots/enderium',
              P: '#forge:plates/steel'
          },
          id: 'xnet:antenna_dish'
      },
      {
          output: 'xnet:redstone_proxy',
          pattern: ['RRR', 'RFR', 'RRR'],
          key: {
              R: 'extendedcrafting:redstone_ingot',
              F: 'kubejs:xnet_machine_frame'
          },
          id: 'xnet:redstone_proxy'
      },
      {
          output: 'xnet:connector_upgrade',
          pattern: ['PE', 'DD'],
          key: {
              P: 'minecraft:paper',
              E: '#forge:ingots/enderium',
              D: '#forge:plates/diamond'
          },
          id: 'xnet:connector_upgrade'
      },
      {
          output: Item.of('xnet:netcable_red', 16),
          pattern: ['IDI', 'RSR', 'IRI'],
          key: {
              I: 'botania:mana_string',
              D: '#forge:dyes/red',
              R: 'extendedcrafting:redstone_ingot',
              S: '#forge:ingots/signalum'
          },
          id: 'xnet:netcable_red'
      },
      {
          output: Item.of('xnet:netcable_green', 16),
          pattern: ['IDI', 'RSR', 'IRI'],
          key: {
              I: 'botania:mana_string',
              D: '#forge:dyes/green',
              R: 'extendedcrafting:redstone_ingot',
              S: '#forge:ingots/signalum'
          },
          id: 'xnet:netcable_green'
      },
      {
          output: Item.of('xnet:netcable_blue', 16),
          pattern: ['IDI', 'RSR', 'IRI'],
          key: {
              I: 'botania:mana_string',
              D: '#forge:dyes/blue',
              R: 'extendedcrafting:redstone_ingot',
              S: '#forge:ingots/signalum'
          },
          id: 'xnet:netcable_blue'
      },
      {
          output: Item.of('xnet:netcable_yellow', 16),
          pattern: ['IDI', 'RSR', 'IRI'],
          key: {
              I: 'botania:mana_string',
              D: '#forge:dyes/yellow',
              R: 'extendedcrafting:redstone_ingot',
              S: '#forge:ingots/signalum'
          },
          id: 'xnet:netcable_yellow'
      },
      {
          output: Item.of('xnet:netcable_routing', 32),
          pattern: ['IDI', 'RSR', 'IRI'],
          key: {
              I: 'botania:mana_string',
              D: '#forge:dyes/black',
              R: 'extendedcrafting:redstone_ingot',
              S: '#forge:ingots/signalum'
          },
          id: 'xnet:netcable_routing'
      },
      {
          output: Item.of('xnet:connector_red', 2),
          pattern: ['NCN', 'RDR', 'NRN'],
          key: {
              N: '#forge:ingots/nickel',
              C: '#forge:chests',
              R: 'extendedcrafting:redstone_ingot',
              D: '#forge:dyes/red'
          },
          id: 'xnet:connector_red'
      },
      {
          output: Item.of('xnet:connector_blue', 2),
          pattern: ['NCN', 'RDR', 'NRN'],
          key: {
              N: '#forge:ingots/nickel',
              C: '#forge:chests',
              R: 'extendedcrafting:redstone_ingot',
              D: '#forge:dyes/blue'
          },
          id: 'xnet:connector_blue'
      },
      {
          output: Item.of('xnet:connector_yellow', 2),
          pattern: ['NCN', 'RDR', 'NRN'],
          key: {
              N: '#forge:ingots/nickel',
              C: '#forge:chests',
              R: 'extendedcrafting:redstone_ingot',
              D: '#forge:dyes/yellow'
          },
          id: 'xnet:connector_yellow'
      },
      {
          output: Item.of('xnet:connector_routing', 2),
          pattern: ['NCN', 'RDR', 'NRN'],
          key: {
              N: '#forge:ingots/nickel',
              C: '#forge:chests',
              R: 'extendedcrafting:redstone_ingot',
              D: '#forge:dyes/light_blue'
          },
          id: 'xnet:connector_routing'
      },
      {
          output: 'xnet:advanced_connector_red',
          pattern: ['CE', 'PP'],
          key: {
              C: 'xnet:connector_red',
              E: '#forge:ingots/enderium',
              P: '#forge:plates/diamond'
          },
          id: 'xnet:advanced_connector_red'
      },
      {
          output: 'xnet:advanced_connector_green',
          pattern: ['CE', 'PP'],
          key: {
              C: 'xnet:connector_green',
              E: '#forge:ingots/enderium',
              P: '#forge:plates/diamond'
          },
          id: 'xnet:advanced_connector_green'
      },
      {
          output: 'xnet:advanced_connector_blue',
          pattern: ['CE', 'PP'],
          key: {
              C: 'xnet:connector_blue',
              E: '#forge:ingots/enderium',
              P: '#forge:plates/diamond'
          },
          id: 'xnet:advanced_connector_blue'
      },
      {
          output: 'xnet:advanced_connector_yellow',
          pattern: ['CE', 'PP'],
          key: {
              C: 'xnet:connector_yellow',
              E: '#forge:ingots/enderium',
              P: '#forge:plates/diamond'
          },
          id: 'xnet:advanced_connector_yellow'
      },
      {
          output: 'xnet:advanced_connector_routing',
          pattern: ['CE', 'PP'],
          key: {
              C: 'xnet:connector_routing',
              E: '#forge:ingots/enderium',
              P: '#forge:plates/diamond'
          },
          id: 'xnet:advanced_connector_routing'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
