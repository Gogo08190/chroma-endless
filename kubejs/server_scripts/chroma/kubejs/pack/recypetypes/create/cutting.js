onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/cutting/';
    const recipes = [
        {
            input: '#forge:ingots/andesite_alloy',
            outputs: [Item.of('create:shaft', 4)],
            id: 'create:cutting/andesite_alloy'
        },
        {
            input: 'valhelsia_structures:oak_post',
            outputs: [Item.of('valhelsia_structures:cut_oak_post', 4)],
            id: `${id_prefix}cut_oak_post`
        },
        {
            input: 'valhelsia_structures:spruce_post',
            outputs: [Item.of('valhelsia_structures:cut_spruce_post', 4)],
            id: `${id_prefix}cut_spruce_post`
        },
        {
            input: 'valhelsia_structures:birch_post',
            outputs: [Item.of('valhelsia_structures:cut_birch_post', 4)],
            id: `${id_prefix}cut_birch_post`
        },
        {
            input: 'valhelsia_structures:jungle_post',
            outputs: [Item.of('valhelsia_structures:cut_jungle_post', 4)],
            id: `${id_prefix}cut_jungle_post`
        },
        {
            input: 'valhelsia_structures:acacia_post',
            outputs: [Item.of('valhelsia_structures:cut_acacia_post', 4)],
            id: `${id_prefix}cut_acacia_post`
        },
        {
            input: 'valhelsia_structures:dark_oak_post',
            outputs: [Item.of('valhelsia_structures:cut_dark_oak_post', 4)],
            id: `${id_prefix}cut_dark_oak_post`
        },
        {
            input: 'valhelsia_structures:warped_post',
            outputs: [Item.of('valhelsia_structures:cut_warped_post', 4)],
            id: `${id_prefix}cut_warped_post`
        },
        {
            input: 'valhelsia_structures:crimson_post',
            outputs: [Item.of('valhelsia_structures:cut_crimson_post', 4)],
            id: `${id_prefix}cut_crimson_post`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.cutting(recipe.outputs, recipe.input).id(recipe.id);
    });
});
