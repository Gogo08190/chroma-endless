onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'prefab:block_compressed_stone',
            inputs: [
                '9x minecraft:cobblestone'
            ],
            id: 'prefab:compressed_stone'
        },
        {
            output: '9x minecraft:cobblestone',
            inputs: [
                'prefab:block_compressed_stone'
            ],
            id: 'prefab:compressed_stone_to_stone'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
