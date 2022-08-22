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

      // Colored Glasses

        {
            output: Item.of('minecraft:green_stained_glass', 6),
            pattern: ['GGR', 'RRG', 'GGG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}green_stained_glass`
        },

        {
            output: Item.of('minecraft:lime_stained_glass', 6),
            pattern: ['GGR', 'GGR', 'GGR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}lime_stained_glass`
        },

        {
            output: Item.of('minecraft:light_gray_stained_glass', 6),
            pattern: ['GRG', 'GRG', 'GGR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}light_gray_stained_glass`
        },

        {
            output: Item.of('minecraft:black_stained_glass', 6),
            pattern: ['GGG', 'RRG', 'GGR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}black_stained_glass`
        },

        {
            output: Item.of('minecraft:purple_stained_glass', 6),
            pattern: ['GGR', 'GGR', 'GRG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}purple_stained_glass`
        },

        {
            output: Item.of('minecraft:pink_stained_glass', 6),
            pattern: ['RGG', 'GRG', 'GGR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}pink_stained_glass`
        },

        {
            output: Item.of('minecraft:light_blue_stained_glass', 6),
            pattern: ['RGG', 'RGG', 'RGG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}light_blue_stained_glass`
        },

        {
            output: Item.of('minecraft:brown_stained_glass', 6),
            pattern: ['GGR', 'GRG', 'GGR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}brown_stained_glass`
        },

        {
            output: Item.of('minecraft:white_stained_glass', 6),
            pattern: ['RRR', 'GGG', 'GGG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}white_stained_glass`
        },

        {
            output: Item.of('minecraft:red_stained_glass', 6),
            pattern: ['GGR', 'GRG', 'GRG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}red_stained_glass`
        },

        {
            output: Item.of('minecraft:gray_stained_glass', 6),
            pattern: ['GGR', 'GRG', 'RGG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}gray_stained_glass`
        },

        {
            output: Item.of('minecraft:magenta_stained_glass', 6),
            pattern: ['GGG', 'GGG', 'RRR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}magenta_stained_glass`
        },

        {
            output: Item.of('minecraft:orange_stained_glass', 6),
            pattern: ['GGG', 'RRR', 'GGG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}orange_stained_glass`
        },

        {
            output: Item.of('minecraft:blue_stained_glass', 6),
            pattern: ['GGG', 'GRG', 'RGR'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}blue_stained_glass`
        },

        {
            output: Item.of('minecraft:yellow_stained_glass', 6),
            pattern: ['GRG', 'GRG', 'GRG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}yellow_stained_glass`
        },

        {
            output: Item.of('minecraft:cyan_stained_glass', 6),
            pattern: ['RGR', 'GRG', 'GGG'],
            key: {
                R: 'resourcefulbees:rainbow_glass_honeycomb',
                G: 'minecraft:glass'
            },
            id: `${id_prefix}cyan_stained_glass`
        },

        // Dye Recipes

        {
            output: Item.of('minecraft:green_dye', 6),
            pattern: ['  R', 'RR ', '   '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}green_dye`
        },

        {
            output: Item.of('minecraft:light_gray_dye', 6),
            pattern: [' R ', ' R ', '  R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}light_gray_dye`
        },


        {
            output: Item.of('minecraft:lime_dye', 6),
            pattern: ['  R', '  R', '  R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}lime_dye`
        },
      
        {
            output: Item.of('minecraft:black_dye', 6),
            pattern: ['   ', 'RR ', '  R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}black_dye`
        },

        {
            output: Item.of('minecraft:purple_dye', 6),
            pattern: ['  R', '  R', ' R '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}purple_dye`
        },

        {
            output: Item.of('minecraft:pink_dye', 6),
            pattern: ['R  ', ' R ', '  R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}pink_dye`
        },

        {
            output: Item.of('minecraft:light_blue_dye', 6),
            pattern: ['R  ', 'R  ', 'R  '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}light_blue _dye`
        },

        {
            output: Item.of('minecraft:brown_dye', 6),
            pattern: ['  R', ' R ', '  R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}brown_dye`
        },

        {
            output: Item.of('minecraft:white_dye', 6),
            pattern: ['RRR', '   ', '   '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}white_dye`
        },

        {
            output: Item.of('minecraft:red_dye', 6),
            pattern: ['  R', ' R ', ' R '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}red_dye`
        },

        {
            output: Item.of('minecraft:gray_dye', 6),
            pattern: ['  R', '  R', '  R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}gray_dye`
        },

        {
            output: Item.of('minecraft:magenta_dye', 6),
            pattern: ['   ', '   ', 'RRR'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}magenta_dye`
        },

        {
            output: Item.of('minecraft:orange_dye', 6),
            pattern: ['   ', 'RRR', '   '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}orange_dye`
        },

        {
            output: Item.of('minecraft:blue_dye', 6),
            pattern: ['   ', ' R ', 'R R'],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}blue_dye`
        },

        {
            output: Item.of('minecraft:yellow_dye', 6),
            pattern: [' R ', ' R ', ' R '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}yellow_dye`
        },

        {
            output: Item.of('minecraft:cyan_dye', 6),
            pattern: ['R R', ' R ', '   '],
            key: {
                R: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}cyan_dye`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
