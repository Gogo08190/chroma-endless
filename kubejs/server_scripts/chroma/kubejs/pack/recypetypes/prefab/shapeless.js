onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'prefab:block_compressed_stone',
            inputs: [
                '9x minecraft:cobblestone'
            ],
            id: 'prefab:compressed_stone'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
