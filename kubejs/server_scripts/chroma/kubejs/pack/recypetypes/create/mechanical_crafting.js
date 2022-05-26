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
            output: 'create:crushing_wheel',
            pattern: [' AAA ', 'AACAA', 'ACSCA', 'AACAA', ' AAA '],
            key: {
                C: 'create:brass_casing',
                A: 'create:andesite_alloy',
                S: 'create:shaft'
            },
            id: 'create:crushing_wheel'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
