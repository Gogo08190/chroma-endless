onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/cutting/';
    const recipes = [
        {
            input: '#forge:ingots/andesite_alloy',
            outputs: [Item.of('create:shaft', 4)],
            id: 'create:cutting/andesite_alloy'
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.cutting(recipe.outputs, recipe.input).id(recipe.id);
    });
});
