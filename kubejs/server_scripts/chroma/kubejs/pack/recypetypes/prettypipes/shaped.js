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
            output: Item.of('prettypipes:pipe', 8),
            pattern: ['TTT', 'CGC', 'TTT'],
            key: {
                T: 'emendatusenigmatica:aluminum_plate',
                C: 'immersiveengineering:component_iron',
                G: '#forge:glass'
            },
            id: 'prettypipes:pipe'
        },
        {
            output: Item.of('ppfluids:fluid_pipe', 8),
            pattern: ['TTT', 'CGC', 'TTT'],
            key: {
                T: 'emendatusenigmatica:aluminum_plate',
                C: 'immersiveengineering:fluid_pipe',
                G: '#forge:glass'
            },
            id: 'ppfluids:fluid_pipe'
        },
        {
            output: Item.of('prettypipes:blank_module', 2),
            pattern: ['QRQ', 'SPS', 'QRQ'],
            key: {
                Q: 'minecraft:quartz',
                R: 'minecraft:redstone',
                S: '#forge:ingots/steel',
                P: 'prettypipes:pipe'
            },
            id: 'prettypipes:blank_module'
        },
        {
            output: Item.of('prettypipes:item_terminal', 1),
            pattern: ['DPS', 'RCE', 'SPD'],
            key: {
                D: 'minecraft:diamond',
                P: 'minecraft:ender_pearl',
                S: 'emendatusenigmatica:steel_block',
                R: 'prettypipes:high_retrieval_module',
                C: 'immersiveengineering:crate',
                E: 'prettypipes:high_extraction_module'
            },
            id: 'prettypipes:item_terminal'
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
