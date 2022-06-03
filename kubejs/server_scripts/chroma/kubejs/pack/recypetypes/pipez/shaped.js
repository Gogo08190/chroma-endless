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
            output: Item.of('pipez:item_pipe', 16),
            pattern: ['LLL', 'PRP', 'LLL'],
            key: {
                L: '#forge:plates/lead',
                P: 'prettypipes:pipe',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'pipez:item_pipe'
        },
        {
            output: Item.of('pipez:fluid_pipe', 16),
            pattern: ['LLL', 'PRP', 'LLL'],
            key: {
                L: '#forge:plates/lead',
                P: 'ppfluids:fluid_pipe',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'pipez:fluid_pipe'
        },
        {
            output: Item.of('pipez:energy_pipe', 16),
            pattern: ['LLL', 'PRP', 'LLL'],
            key: {
                L: '#forge:plates/lead',
                P: 'extendedcrafting:redstone_ingot',
                R: 'immersiveengineering:coil_mv'
            },
            id: 'pipez:energy_pipe'
        },
        {
            output: Item.of('pipez:gas_pipe', 16),
            pattern: ['LLL', 'PRP', 'LLL'],
            key: {
                L: '#forge:plates/lead',
                R: 'extendedcrafting:redstone_ingot',
                P: 'mekanism:alloy_infused'
            },
            id: 'pipez:gas_pipe'
        },
        // Universal Pipe
        {
            output: Item.of('pipez:universal_pipe', 6),
            pattern: ['ELG', 'LRL', 'ILF'],
            key: {
                R: 'immersiveengineering:rs_engineering',
                L: '#forge:plates/lead',
                G: 'pipez:gas_pipe',
                E: 'pipez:energy_pipe',
                F: 'pipez:fluid_pipe',
                I: 'pipez:item_pipe'
            },
            id: 'pipez:universal_pipe'
        },
        // Wrench Pipez
        {
            output: 'pipez:wrench',
            pattern: [' SU', ' IS', 'I  '],
            key: {
                U: 'pipez:universal_pipe',
                I: '#forge:rods/iron',
                S: '#forge:plates/steel'
            },
            id: 'pipez:wrench'
        },
        // Basic Upgrade
        {
            output: 'pipez:basic_upgrade',
            pattern: ['CIC', 'IRI', 'CIC'],
            key: {
                R: 'thermal:rf_coil',
                I: '#forge:plates/iron',
                C: 'immersiveengineering:component_iron'
            },
            id: 'pipez:basic_upgrade'
        },
        // Improved Upgrade
        {
            output: 'pipez:improved_upgrade',
            pattern: ['GRG', 'RBR', 'GRG'],
            key: {
                B: 'pipez:basic_upgrade',
                G: '#forge:plates/gold',
                R: 'thermal:redstone_servo'
            },
            id: 'pipez:improved_upgrade'
        },
        // Advanced Upgrade
        {
            output: 'pipez:advanced_upgrade',
            pattern: ['DRD', 'SIS', 'DRD'],
            key: {
                I: 'pipez:improved_upgrade',
                D: '#forge:plates/diamond',
                R: 'thermal:rf_coil',
                S: 'immersiveengineering:rs_engineering'
            },
            id: 'pipez:advanced_upgrade'
        },
        // Ultimate Upgrade
        {
            output: 'pipez:ultimate_upgrade',
            pattern: ['NRN', 'RAR', 'NRN'],
            key: {
                A: 'pipez:advanced_upgrade',
                R: 'immersiveengineering:rs_engineering',
                N: 'tconstruct:netherite_item_frame'
            },
            id: 'pipez:ultimate_upgrade'
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
