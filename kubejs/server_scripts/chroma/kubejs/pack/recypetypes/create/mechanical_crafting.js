onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'occultism:dictionary_of_spirits',
            pattern: ['CAC', 'CBC', 'CSC'],
            key: {
                C: 'create:cinder_flour',
                A: 'create:andesite_alloy',
                B: 'minecraft:book',
                S: 'occultism:datura_seeds'
            },
            id: 'occultism:dictionary_of_spirits'
        },
        {
            output: '2x create:crushing_wheel',
            pattern: [' AAA ', 'AACAA', 'ACSCA', 'AACAA', ' AAA '],
            key: {
                C: 'create:brass_casing',
                A: 'create:andesite_alloy',
                S: 'create:shaft'
            },
            id: 'create:crushing_wheel'
        },
        {
            output: 'immersiveengineering:watermill',
            pattern: ['   S   ', '  SWS  ', ' SWIWS ', 'SWITIWS', ' SWIWS ', '  SWS  ', '   S   '],
            key: {
                S: 'immersiveengineering:stick_treated',
                W: 'immersiveengineering:waterwheel_segment',
                I: 'emendatusenigmatica:steel_ingot',
                T: 'immersiveengineering:treated_wood_horizontal'
            },
            id: 'immersiveengineering:watermill'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
