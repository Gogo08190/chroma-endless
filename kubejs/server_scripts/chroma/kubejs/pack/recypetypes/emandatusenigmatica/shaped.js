onEvent('recipes', (event) => {
    const recipes = [

        {
            output: 'emendatusenigmatica:enigmatic_fortunizer',
            pattern: ['PGP', 'DFE', 'CBC'],
            key: {
                P: '#forge:plates/steel',
                G: '#forge:gears/gold_brass',
                D: '#forge:gears/diamond',
                F: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:gears/emerald',
                C: 'kubejs:uranium_capacitor',
                B: '#forge:storage_blocks/steel'
            },
            id: 'emendatusenigmatica:enigmatic_fortunizer'
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
