onEvent('recipes', (event) => {
    const recipes = [

        {
            output: 'prefab:item_starter_farm',
            pattern: ['SSS', 'TDT', 'WBW'],
            key: {
                S: '#forge:seeds',
                T: 'prefab:item_ton_of_timber',
                D: 'prefab:block_double_compressed_dirt',
                W: 'quark:white_quilted_wool',
                B: 'minecraft:water_bucket'
            },
            id: 'prefab:starter_farm'
        },

        {
            output: 'prefab:item_moderate_farm',
            pattern: ['TST', 'DFD', 'PSP'],
            key: {
                P: 'prefab:item_pallet_of_bricks',
                T: 'prefab:item_ton_of_timber',
                S: 'prefab:block_triple_compressed_stone',
                D: 'prefab:block_double_compressed_dirt',
                F: 'prefab:item_starter_farm'
            },
            id: 'prefab:moderate_farm'
        },

        {
            output: 'prefab:item_advanced_farm',
            pattern: ['GBG', 'TFT', 'SCS'],
            key: {
                G: 'prefab:block_double_compressed_glowstone',
                B: 'prefab:item_pallet_of_bricks',
                T: 'prefab:item_ton_of_timber',
                S: 'prefab:block_triple_compressed_stone',
                C: 'expandedstorage:diamond_chest',
                F: 'prefab:item_moderate_farm'
            },
            id: 'prefab:advanced_farm'
        },

        {
            output: 'prefab:item_modern_buildings',
            pattern: ['LTL', 'CSC', 'NIN'],
            key: {
                L: 'prefab:item_coil_of_lanterns',
                I: '#forge:storage_blocks/steel',
                T: 'prefab:item_ton_of_timber',
                S: 'minecraft:nether_star',
                C: 'prefab:block_triple_compressed_stone',
                N: 'expandedstorage:netherite_chest'
            },
            id: 'prefab:modern_buildings'
        },

        {
            output: 'prefab:item_warehouse',
            pattern: ['TTT', 'TDT', 'CWC'],
            key: {
                D: 'expandedstorage:gold_chest',
                W: '#forge:storage_blocks/steel',
                T: 'prefab:block_triple_compressed_stone',
                C: 'prefab:item_coil_of_lanterns'
            },
            id: 'prefab:warehouse'
        },

        {
            output: 'prefab:item_advanced_warehouse',
            pattern: ['TDT', 'TWT', 'CUC'],
            key: {
                U: 'prefab:item_warehouse_upgrade',
                T: 'prefab:block_triple_compressed_stone',
                D: 'expandedstorage:diamond_chest',
                W: 'prefab:item_warehouse',
                C: 'prefab:item_coil_of_lanterns'
            },
            id: 'prefab:advanced_warehouse'
        },

        {
            output: 'prefab:item_villager_houses',
            pattern: ['TTT', 'TTT', 'CCC'],
            key: {
                T: 'prefab:item_ton_of_timber',
                C: 'prefab:block_triple_compressed_stone'
            },
            id: 'prefab:villager_houses'
        },

        {
            output: 'prefab:item_workshop',
            pattern: ['LML', 'IWI', 'LCL'],
            key: {
                L: '#minecraft:logs',
                C: 'thermal:wrench',
                I: '#forge:gears/steel',
                W: 'prefab:item_warehouse_upgrade',
                M: 'prefab:item_moderate_house'
            },
            id: 'prefab:workshop'
        },

        {
            output: 'prefab:item_advanced_aqua_base',
            pattern: ['GGG', 'CAC', 'TST'],
            key: {
                T: 'prefab:block_triple_compressed_stone',
                S: 'minecraft:sea_lantern',
                A: 'prefab:item_aqua_base',
                C: 'minecraft:conduit',
                G: 'tconstruct:clear_glass'
            },
            id: 'prefab:advanced_aqua_base'
        },

        {
            output: 'prefab:item_nether_gate',
            pattern: ['TOQ', 'OFO', 'QOT'],
            key: {
                T: 'prefab:block_triple_compressed_stone',
                F: Item.of('minecraft:flint_and_steel', '{Damage:0}').weakNBT(),
                O: 'prefab:block_double_compressed_obsidian',
                Q: 'minecraft:quartz_block'
            },
            id: 'prefab:nether_gate'
        },

        {
            output: 'prefab:ender_gateway',
            pattern: ['PEP', 'EBE', 'PSP'],
            key: {
                S: 'prefab:block_triple_compressed_stone',
                P: 'minecraft:prismarine',
                E: 'minecraft:end_stone',
                B: 'betterendforge:eternal_crystal'
            },
            id: 'prefab:ender_gateway'
        },

        {
            output: 'prefab:item_town_hall',
            pattern: ['STS', 'CTC', 'DSD'],
            key: {
                T: 'prefab:item_ton_of_timber',
                D: 'prefab:block_double_compressed_dirt',
                S: 'prefab:block_triple_compressed_stone',
                C: 'prefab:item_coil_of_lanterns'
            },
            id: 'prefab:town_hall'
        },

        {
            output: 'prefab:item_ski_lodge',
            pattern: ['STS', 'TCT', 'GDG'],
            key: {
                T: 'prefab:item_ton_of_timber',
                G: 'prefab:block_double_compressed_glowstone',
                S: 'betterendforge:dense_snow',
                D: 'prefab:block_double_compressed_dirt',
                C: 'dustrial_decor:wrapped_ice_chains'
            },
            id: 'prefab:ski_lodge'
        },

        {
            output: 'prefab:item_magic_temple',
            pattern: ['TTT', 'BPM', 'TTT'],
            key: {
                T: 'prefab:item_ton_of_timber',
                B: 'botania:brewery',
                P: 'pedestals:coin/xpenchanter',
                M: 'botania:blaze_block'
            },
            id: 'prefab:magic_temple'
        },

        {
            output: 'prefab:item_watch_tower',
            pattern: ['CCC', ' C ', ' T '],
            key: {
                T: 'prefab:block_triple_compressed_stone',
                C: 'minecraft:polished_blackstone_bricks'
            },
            id: 'prefab:watch_tower'
        },

        {
            output: 'prefab:item_moderate_house',
            pattern: [' S ', 'SCS', ' S '],
            key: {
                S: 'prefab:item_start_house',
                C: '#forge:ingots/steel'
            },
            id: 'prefab:moderate_house'
        },

        {
            output: 'prefab:item_mineshaft_entrance',
            pattern: ['DTD', 'SWS', 'TTT'],
            key: {
                T: 'prefab:item_ton_of_timber',
                W: '#minecraft:beds',
                S: 'prefab:block_triple_compressed_stone',
                D: Item.of('minecraft:diamond_pickaxe', '{Damage:0}')
            },
            id: 'prefab:mineshaft_entrance'
        },

        {
            output: 'prefab:item_start_house',
            pattern: ['CBF', 'SWS', 'TTT'],
            key: {
                C: 'tconstruct:crafting_station',
                B: 'supplementaries:clock_block',
                F: 'minecraft:blast_furnace',
                S: 'prefab:block_triple_compressed_stone',
                W: '#minecraft:beds',
                T: 'prefab:item_bundle_of_timber'
            },
            id: 'prefab:starting_house'
        },

        {
            output: 'prefab:item_defense_bunker',
            pattern: ['ICI', 'TOT', 'III'],
            key: {
                C: 'prefab:item_coil_of_lanterns',
                I: '#forge:storage_blocks/steel',
                T: 'prefab:block_triple_compressed_stone',
                O: 'prefab:block_double_compressed_obsidian'
            },
            id: 'prefab:defense_bunker'
        },

        {
            output: 'prefab:item_wind_mill',
            pattern: [' T ', 'TST', 'DTH'],
            key: {
                D: 'prefab:block_double_compressed_dirt',
                H: '#forge:hay_bales',
                S: 'prefab:block_triple_compressed_stone',
                T: 'prefab:item_ton_of_timber'
            },
            id: 'prefab:wind_mill'
        },

        {
            output: 'prefab:item_saloon',
            pattern: ['TTT', 'CBN', 'TTT'],
            key: {
                N: 'minecraft:note_block',
                B: 'minecraft:brewing_stand',
                C: 'tconstruct:clear_glass',
                T: 'prefab:item_ton_of_timber'
            },
            id: 'prefab:saloon'
        },

        {
            output: 'prefab:item_machinery_tower',
            pattern: ['PPP', ' C ', ' T '],
            key: {
                P: 'thermal:lumium_powered_rail',
                T: 'prefab:block_triple_compressed_stone',
                C: 'prefab:item_coil_of_lanterns'
            },
            id: 'prefab:machinery_tower'
        },

        {
            output: 'prefab:item_modern_buildings',
            pattern: ['LTL', 'CSC', 'INI'],
            key: {
                N: 'expandedstorage:netherite_chest',
                I: '#forge:storage_blocks/steel',
                C: 'prefab:block_triple_compressed_stone',
                T: 'prefab:item_ton_of_timber',
                S: 'minecraft:nether_star',
                L: 'prefab:item_coil_of_lanterns'
            },
            id: 'prefab:modern_buildings'
        },

        {
            output: 'prefab:item_aqua_base',
            pattern: ['GGG', 'SHS', 'TCT'],
            key: {
                G: 'tconstruct:clear_glass',
                S: 'minecraft:sea_lantern',
                H: 'minecraft:heart_of_the_sea',
                T: 'prefab:block_triple_compressed_stone',
                C: 'prefab:item_coil_of_lanterns'
            },
            id: 'prefab:aqua_base'
        },

        {
            output: 'prefab:item_clutch_of_eggs',
            pattern: ['TET', 'ETE', 'TET'],
            key: {
                E: 'minecraft:egg',
                T: 'minecraft:turtle_egg'
            },
            id: 'prefab:clutch_of_eggs'
        },

        {
            output: 'prefab:item_bunch_of_potatoes',
            pattern: ['PEP', 'EBE', 'PEP'],
            key: {
                P: 'minecraft:potato',
                E: 'minecraft:poisonous_potato',
                B: 'minecraft:baked_potato'
            },
            id: 'prefab:bunch_of_potatoes'
        },


        {
            output: 'prefab:item_bunch_of_carrots',
            pattern: ['CCC', 'CGC', 'CCC'],
            key: {
                G: 'minecraft:golden_carrot',
                C: 'minecraft:carrot'
            },
            id: 'prefab:bunch_of_carrots'
        },

        {
            output: 'prefab:item_bunch_of_beets',
            pattern: ['BSB', 'SBS', 'BSB'],
            key: {
                B: 'minecraft:beetroot',
                S: 'minecraft:beetroot_seeds'
            },
            id: 'prefab:bunch_of_beets'
        },

        {
            output: 'prefab:item_warehouse_upgrade',
            pattern: ['MBM', 'ECE', 'MBM'],
            key: {
                M: 'minecraft:bookshelf',
                B: 'botania:brewery',
                C: 'sophisticatedbackpacks:crafting_upgrade',
                E: 'minecraft:enchanting_table'
            },
            id: 'prefab:warehouse_upgrade'
        }
     ];


    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
