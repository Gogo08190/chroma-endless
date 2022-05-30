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
