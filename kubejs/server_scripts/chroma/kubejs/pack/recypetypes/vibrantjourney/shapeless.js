onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
    const recipes = [
        {
            output: Item.of('projectvibrantjourneys:rocks', 4),
            inputs: [
                'minecraft:cobblestone'
            ],
            id: `${id_prefex}rocks_from_cobble`
        },
        {
            output: Item.of('projectvibrantjourneys:mossy_rocks', 4),
            inputs: [
                'minecraft:mossy_cobblestone'
            ],
            id: `${id_prefex}rocks_from_mossy`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
