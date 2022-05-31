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
