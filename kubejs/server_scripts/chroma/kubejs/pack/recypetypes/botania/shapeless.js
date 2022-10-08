onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'botania:lexicon',
            inputs: [
                'minecraft:book',
                '#botania:mystical_flowers'
            ],
            id: 'botania:lexicon'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
