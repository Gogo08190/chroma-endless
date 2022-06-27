onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

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

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
