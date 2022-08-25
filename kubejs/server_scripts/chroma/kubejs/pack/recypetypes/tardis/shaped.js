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
            output: 'tardis:key_pirate',
            pattern: ['  B', 'RSC', 'A  '],
            key: {
                B: 'pneumaticcraft:compressed_iron_block',
                R: 'rftoolsbase:infused_enderpearl',
                S: 'storagedrawers:drawer_key',
                C: 'pneumaticcraft:ingot_iron_compressed',
                A: 'pneumaticcraft:advanced_pcb'
            },
            id: 'tardis:key_pirate'
        },

        {
            output: 'tardis:key_gallifreyan',
            pattern: ['  B', 'RSI', 'A  '],
            key: {
                B: 'minecraft:iron_block',
                R: 'rftoolsbase:infused_enderpearl',
                S: 'storagedrawers:drawer_key',
                I: 'minecraft:iron_ingot',
                A: 'pneumaticcraft:advanced_pcb'
            },
            id: 'tardis:key_gallifreyan'
        },

        {
            output: 'tardis:tardis_key',
            pattern: ['  B', 'RSI', 'A  '],
            key: {
                B: 'minecraft:gold_block',
                R: 'rftoolsbase:infused_enderpearl',
                S: 'storagedrawers:drawer_key',
                I: 'minecraft:gold_ingot',
                A: 'pneumaticcraft:advanced_pcb'
            },
            id: 'tardis:tardis_key'
        },

        {
            output: 'tardis:circuits',
            pattern: ['CXI', 'CER', 'CXE'],
            key: {
                C: 'tardis:circuit_paste',
                X: 'tardis:xion_crystal',
                E: 'kubejs:extreme_circuit_board',
                I: '#forge:ingots/electrum',
                R: 'thermal:redstone_servo'
            },
            id: 'tardis:exotronic_circuit'
        },

        {
            output: 'tardis:blank_upgrade',
            pattern: ['FPE', 'FPE', 'FPE'],
            key: {
                F: 'elementalcraft:fireite_ingot',
                P: 'pneumaticcraft:ingot_iron_compressed',
                E: 'emendatusenigmatica:electrum_ingot'
            },
            id: 'tardis:blank_upgrade'
        },

        {
            output: 'tardis:quantiscope_iron',
            pattern: ['BIB', 'IEI', 'XCX'],
            key: {
                X: 'tardis:xion_crystal',
                C: 'tardis:circuits',
                E: 'thermal:enderium_glass',
                B: 'minecraft:iron_bars',
                I: 'minecraft:iron_block'
            },
            id: 'tardis:quantiscope_iron'
        },

        {
            output: 'tardis:quantiscope_brass',
            pattern: ['BIB', 'IEI', 'XCX'],
            key: {
                X: 'tardis:xion_crystal',
                C: 'tardis:circuits',
                E: 'thermal:enderium_glass',
                B: 'minecraft:iron_bars',
                I: 'emendatusenigmatica:brass_block'
            },
            id: 'tardis:quantiscope_brass'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
