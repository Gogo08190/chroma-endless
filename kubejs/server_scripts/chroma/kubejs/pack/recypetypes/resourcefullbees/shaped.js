onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/resourcefulbees/shaped/';

    treeRegistry.forEach((treeCategories) => {
        if (treeCategories.type == 'tree') {
            treeCategories.trees.forEach((tree) => {
              event
                  .shaped(Item.of(tree.trunk, 8), ['WHW', 'HSH', 'WHW'], {
                      S: tree.sapling,
                      H: 'resourcefulbees:forest_honeycomb',
                      W: 'resourcefulbees:wax'
                  })
                  .id(`${id_prefix}${tree.trunk.replace(':', '_')}_from_${tree.sapling.replace(':', '_')}`);
            });
        }
    });

    const recipes = [
      {
          output: 'minecraft:beehive',
          pattern: ['BBB', 'CHC', 'BBB'],
          key: {
              B: 'minecraft:stripped_oak_wood',
              C: 'minecraft:honeycomb_block',
              H: '#forge:beehives/tier_0'
          },
          id: 'minecraft:beehive'
      },

      {
          output: 'resourcefulbees:centrifuge',
          pattern: ['SSS', 'WFW', 'CPC'],
          key: {
              C: 'resourcefulbees:mechanical_centrifuge',
              P: 'minecraft:sticky_piston',
              W: 'resourcefulbees:waxed_machine_block',
              F: Item.of('thermal:fluid_cell').ignoreNBT(),
              S: 'emendatusenigmatica:steel_block'
          },
          id: 'resourcefulbees:centrifuge'
      },

      {
          output: 'resourcefulbees:mechanical_centrifuge',
          pattern: ['I  ', 'BR ', 'I  '],
          key: {
              I: 'minecraft:iron_trapdoor',
              B: 'metalbarrels:netherite_barrel',
              R: 'rsgauges:rustic_lever'
          },
          id: 'resourcefulbees:mechanical_centrifuge'
      },

      {
          output: 'resourcefulbees:beepedia',
          pattern: ['IRI', 'IGI', 'IHI'],
          key: {
              I: 'minecraft:iron_block',
              H: 'minecraft:honey_block',
              G: '#forge:glass',
              R: 'minecraft:redstone_block'
          },
          id: 'resourcefulbees:beepedia'
      },

      {
          output: 'resourcefulbees:honey_dipper',
          pattern: [' HW', ' SH', 'S  '],
          key: {
              S: 'minecraft:stick',
              H: 'minecraft:honey_block',
              W: 'resourcefulbees:wax_block',
          },
          id: 'resourcefulbees:honey_dipper'
      },

      {
          output: 'resourcefulbees:honey_generator',
          pattern: ['SWS', 'IER', 'SFS'],
          key: {
              S: 'emendatusenigmatica:steel_block',
              F: Item.of('thermal:fluid_cell').ignoreNBT(),
              I: 'minecraft:iron_bars',
              E: 'thermal:enderium_glass',
              R: 'thermal:rf_coil',
              W: 'resourcefulbees:waxed_machine_block'
          },
          id: 'resourcefulbees:honey_generator'
      },

      {
          output: 'resourcefulbees:apiary_storage',
          pattern: ['BIB', 'NHG', 'BDB'],
          key: {
              B: 'minecraft:honeycomb_block',
              I: 'metalbarrels:iron_barrel',
              G: 'metalbarrels:gold_barrel',
              D: 'metalbarrels:diamond_barrel',
              N: 'metalbarrels:netherite_barrel',
              H: 'minecraft:hopper'
          },
          id: 'resourcefulbees:apiary_storage'
      },

      // Iron Storage Upgrade

      {
          output: 'resourcefulbees:iron_storage_upgrade',
          pattern: ['ICI', 'CAC', 'ICI'],
          key: {
              I: 'minecraft:iron_ingot',
              C: 'expandedstorage:iron_chest',
              A: 'resourcefulbees:apiary_storage'
          },
          id: 'resourcefulbees:iron_storage_upgrade'
      },

      // Gold Storage Upgrade

      {
          output: 'resourcefulbees:gold_storage_upgrade',
          pattern: ['GCG', 'CAC', 'GCG'],
          key: {
              G: 'minecraft:gold_ingot',
              C: 'expandedstorage:gold_chest',
              A: 'resourcefulbees:apiary_storage'
          },
          id: 'resourcefulbees:gold_storage_upgrade'
      },

      // Diamond Storage Upgrade

      {
          output: 'resourcefulbees:diamond_storage_upgrade',
          pattern: ['DCD', 'CAC', 'DCD'],
          key: {
              D: 'minecraft:diamond_block',
              C: 'expandedstorage:diamond_chest',
              A: 'resourcefulbees:apiary_storage'
          },
          id: 'resourcefulbees:diamond_storage_upgrade'
      },

      // Emerald Storage Upgrade

      {
          output: 'resourcefulbees:emerald_storage_upgrade',
          pattern: ['ECE', 'CAC', 'ECE'],
          key: {
              E: 'minecraft:emerald_block',
              C: 'expandedstorage:netherite_chest',
              A: 'resourcefulbees:apiary_storage'
          },
          id: 'resourcefulbees:emerald_storage_upgrade'
      },

      {
          output: 'resourcefulbees:apiary_breed_time_upgrade',
          pattern: ['HAH', 'ASA', 'HAH'],
          key: {
              S: 'miniutilities:speed_upgrade',
              A: 'industrialforegoing:animal_feeder',
              H: 'minecraft:honeycomb_block'
          },
          id: 'resourcefulbees:apiary_breed_time_upgrade'
      },

      {
          output: 'resourcefulbees:apiary_breeder_upgrade',
          pattern: ['HAH', 'ASA', 'HAH'],
          key: {
              S: 'resourcefulbees:emerald_storage_upgrade',
              A: 'industrialforegoing:animal_feeder',
              H: 'minecraft:honeycomb_block'
          },
          id: 'resourcefulbees:apiary_breeder_upgrade'
      },

      {
          output: 'resourcefulbees:waxed_machine_block',
          pattern: ['WWW', 'WSW', 'WWW'],
          key: {
              W: 'resourcefulbees:trimmed_waxed_planks',
              S: 'emendatusenigmatica:steel_block'
          },
          id: 'resourcefulbees:waxed_machine_block'
      },

      {
          output: 'resourcefulbees:ender_beecon',
          pattern: ['PPP', 'GBG', 'PCP'],
          key: {
              P: 'minecraft:purpur_block',
              G: '#forge:glass',
              C: 'minecraft:crying_obsidian',
              B: 'minecraft:beacon'
          },
          id: 'resourcefulbees:ender_beecon'
      },

      {
          output: 'resourcefulbees:honey_congealer',
          pattern: [' G ', 'IGI', 'SWS'],
          key: {
              S: '#forge:stone',
              G: '#forge:glass',
              W: 'resourcefulbees:wax',
              I: '#forge:ingots/steel'
          },
          id: 'resourcefulbees:honey_congealer'
      },
      {
          output: Item.of('occultism:otherstone', 8),
          pattern: ['OSO', 'SOS', 'OSO'],
          key: {
              S: '#forge:stone',
              O: 'resourcefulbees:occultist_honeycomb'
          },
          id: `${id_prefix}occultism:otherstone`
      },
      {
          output: Item.of('occultism:otherworld_log', 8),
          pattern: ['OLO', 'LOL', 'OLO'],
          key: {
              L: '#minecraft:logs',
              O: 'resourcefulbees:occultist_honeycomb'
          },
          id: `${id_prefix}occultism:otherworld_log`
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
