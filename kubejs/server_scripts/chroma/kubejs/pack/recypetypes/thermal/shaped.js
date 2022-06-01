onEvent('recipes', (event) => {
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

    const recipes = [
        {
            output: 'thermal:redstone_servo',
            pattern: ['RSR', ' S ', 'RSR'],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                S: '#forge:rods/steel'
            },
            id: 'thermal:redstone_servo'
        },
        {
            output: 'thermal:rf_coil',
            pattern: [' RP', 'RER', 'PR '],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                P: '#forge:plates/gold',
                E: '#forge:rods/electrum'
            },
            id: 'thermal:rf_coil'
        },
        {
            output: 'thermal:upgrade_augment_1',
            pattern: ['IGI', 'RCR', 'IGI'],
            key: {
                I: '#forge:plates/invar',
                G: '#forge:glass',
                R: 'extendedcrafting:redstone_ingot',
                C: 'immersiveengineering:circuit_board'
            },
            id: 'thermal:augment/upgrade_augment_1'
        },
        {
            output: 'thermal:upgrade_augment_2',
            pattern: ['IGI', 'VCR', 'IGI'],
            key: {
                I: '#forge:plates/electrum',
                G: '#forge:gears/signalum',
                R: 'thermal:rf_coil',
                C: 'thermal:upgrade_augment_1',
                V: 'immersiveengineering:electron_tube'
            },
            id: 'thermal:augment/upgrade_augment_2'
        },
        {
            output: 'thermal:upgrade_augment_3',
            pattern: ['IGI', 'RCR', 'IGI'],
            key: {
                I: '#forge:plates/enderium',
                G: '#forge:gears/lumium',
                R: 'thermal:signalum_glass',
                C: 'thermal:upgrade_augment_2'
            },
            id: 'thermal:augment/upgrade_augment_3'
        },
        {
            output: 'thermal:tinker_bench',
            pattern: ['LCL', 'LLL', 'TRM'],
            key: {
                L: '#forge:plates/lead',
                C: 'engineersdecor:metal_crafting_table',
                T: 'immersiveengineering:toolbox',
                R: 'thermal:rf_coil',
                M: Item.of('immersiveengineering:maintenance_kit', '{Damage:0}').weakNBT()
            },
            id: 'thermal:tinker_bench'
        },
        {
            output: 'thermal:device_water_gen',
            pattern: ['LLL', 'CFC', 'LPL'],
            key: {
                L: '#forge:plates/lead',
                P: 'create:mechanical_pump',
                C: 'create:copper_casing',
                F: Item.of('thermal:fluid_cell').ignoreNBT(),
            },
            id: 'thermal:device_water_gen'
        },
        {
            output: 'thermal:charge_bench',
            pattern: ['GGG', 'RFR', 'LRL'],
            key: {
                L: '#forge:plates/lead',
                R: 'thermal:rf_coil',
                G: '#forge:plates/electrum',
                F: Item.of('thermal:energy_cell').ignoreNBT()
            },
            id: 'thermal:charge_bench'
        },
        {
            output: 'thermal:machine_furnace',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/invar',
                R: 'thermal:rf_coil',
                C: 'create:andesite_alloy',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'engineersdecor:small_electrical_furnace'
            },
            id: 'thermal:machine_furnace'
        },
        {
            output: 'thermal:machine_pulverizer',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: 'create:andesite_alloy',
                R: 'thermal:rf_coil',
                C: 'create:andesite_alloy',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'create:millstone'
            },
            id: 'thermal:machine_pulverizer'
        },
        {
            output: 'thermal:machine_smelter',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/invar',
                R: 'thermal:rf_coil',
                C: 'immersiveengineering:radiator',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'minecraft:blast_furnace'
            },
            id: 'thermal:machine_smelter'
        },
        {
            output: 'thermal:machine_sawmill',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/invar',
                R: 'thermal:rf_coil',
                C: 'thermal:polished_slag',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'thermal:saw_blade'
            },
            id: 'thermal:machine_sawmill'
        },
        {
            output: 'thermal:machine_insolator',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/lumium',
                R: 'thermal:rf_coil',
                C: '#thermal:glass/hardened',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'thermal:phytogro'
            },
            id: 'thermal:machine_insolator'
        },
        {
            output: 'thermal:machine_centrifuge',
            pattern: ['AEA', 'CFT', 'IRI'],
            key: {
                I: '#forge:gears/constantan',
                R: 'thermal:rf_coil',
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
                T: 'immersiveengineering:turntable',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: Item.of('immersiveengineering:sawblade', '{Damage:0}').weakNBT()
            },
            id: 'thermal:machine_centrifuge'
        },
        {
            output: 'thermal:machine_press',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/constantan',
                R: 'thermal:rf_coil',
                C: '#forge:ingots/brass',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: '#forge:storage_blocks/steel'
            },
            id: 'thermal:machine_press'
        },
        {
            output: 'thermal:machine_crucible',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/invar',
                R: 'thermal:rf_coil',
                C: 'immersiveengineering:radiator',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'create:blaze_cake'
            },
            id: 'thermal:machine_crucible'
        },
        {
            output: 'thermal:machine_chiller',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: 'engineersdecor:small_freezer',
                R: 'thermal:rf_coil',
                C: 'create:propeller',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'cookingforblockheads:ice_unit'
            },
            id: 'thermal:machine_chiller'
        },
        {
            output: 'thermal:machine_refinery',
            pattern: ['AEA', 'CFT', 'IRI'],
            key: {
                I: '#forge:gears/invar',
                R: 'thermal:rf_coil',
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
                T: 'create:fluid_pipe',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'create:empty_blaze_burner'
            },
            id: 'thermal:machine_refinery'
        },
        {
            output: 'thermal:machine_pyrolyzer',
            pattern: ['AEA', 'CFT', 'IRI'],
            key: {
                I: '#forge:gears/constantan',
                R: 'thermal:rf_coil',
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
                T: 'immersiveengineering:radiator',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'create:blaze_cake'
            },
            id: 'thermal:machine_pyrolyzer'
        },
        {
            output: 'thermal:machine_bottler',
            pattern: ['AEA', 'CFT', 'IRI'],
            key: {
                I: '#forge:gears/copper',
                R: 'thermal:rf_coil',
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
                T: 'immersiveengineering:heavy_engineering',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'create:spout'
            },
            id: 'thermal:machine_bottler'
        },
        {
            output: 'thermal:machine_brewer',
            pattern: ['AEA', 'CFT', 'IRI'],
            key: {
                I: '#forge:gears/enderium',
                R: 'thermal:rf_coil',
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
                T: 'thermal:potion_infuser',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'minecraft:brewing_stand'
            },
            id: 'thermal:machine_brewer'
        },
        {
            output: 'thermal:machine_crafter',
            pattern: ['AEA', 'CFC', 'IRI'],
            key: {
                I: '#forge:gears/brass',
                R: 'thermal:rf_coil',
                C: 'thermal:redstone_servo',
                F: 'thermal:machine_frame',
                A: '#forge:plates/aluminum',
                E: 'immersiveengineering:craftingtable'
            },
            id: 'thermal:machine_crafter'
        },
        {
            output: 'thermal:device_nullifier',
            pattern: ['LSL', 'TIT', 'TRT'],
            key: {
                L: '#forge:plates/lead',
                S: 'create:item_drain',
                I: 'trashcans:item_trash_can',
                R: 'thermal:redstone_servo',
                T: '#forge:plates/tin'
            },
            id: 'thermal:device_nullifier'
        },
        {
            output: 'thermal:device_rock_gen',
            pattern: ['LSL', 'AIA', 'TRT'],
            key: {
                L: '#forge:plates/lead',
                S: '#forge:gears/constantan',
                I: Item.of('immersiveengineering:rockcutter', '{Damage:0}').weakNBT(),
                R: 'thermal:redstone_servo',
                T: '#forge:plates/tin',
                A: 'immersiveengineering:toolupgrade_drill_lube'
            },
            id: 'thermal:device_rock_gen'
        },
        {
            output: 'thermal:device_collector',
            pattern: ['LSL', 'AIA', 'TRT'],
            key: {
                L: '#forge:plates/lead',
                S: 'immersiveengineering:electron_tube',
                I: 'create:chute',
                R: 'thermal:redstone_servo',
                T: '#forge:plates/tin',
                A: '#thermal:glass/hardened'
            },
            id: 'thermal:device_collector'
        },
        {
            output: 'thermal:device_tree_extractor',
            pattern: ['TFT', 'GPG', 'TRT'],
            key: {
                T: '#forge:treated_wood',
                R: 'thermal:redstone_servo',
                P: 'create:mechanical_pump',
                F: 'create:fluid_tank',
                G: '#forge:glass'

            },
            id: 'thermal:device_tree_extractor'
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
