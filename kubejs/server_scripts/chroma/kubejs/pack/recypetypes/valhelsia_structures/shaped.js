onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/valhelsia_structures/shaped';
    const recipes = [
        {
            output: Item.of('valhelsia_structures:paper_wall', 4),
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
              A: 'minecraft:bamboo',
              B: '#forge:paper'
            },
            id: 'valhelsia_structures:paper_wall'
        },
        {
            output: 'valhelsia_structures:oak_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_oak_post'
            },
            id: `${id_prefix}oak_post`
        },
        {
            output: 'valhelsia_structures:spruce_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_spruce_post'
            },
            id: `${id_prefix}spruce_post`
        },
        {
            output: 'valhelsia_structures:birch_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_birch_post'
            },
            id: `${id_prefix}birch_post`
        },
        {
            output: 'valhelsia_structures:jungle_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_jungle_post'
            },
            id: `${id_prefix}jungle_post`
        },
        {
            output: 'valhelsia_structures:acacia_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_acacia_post'
            },
            id: `${id_prefix}acacia_post`
        },
        {
            output: 'valhelsia_structures:dark_oak_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_dark_oak_post'
            },
            id: `${id_prefix}dark_oak_post`
        },
        {
            output: 'valhelsia_structures:warped_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_warped_post'
            },
            id: `${id_prefix}warped_post`
        },
        {
            output: 'valhelsia_structures:crimson_post',
            pattern: ['AA', 'AA'],
            key: {
              A: 'valhelsia_structures:cut_crimson_post'
            },
            id: `${id_prefix}crimson_post`
        }
    ];

    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
