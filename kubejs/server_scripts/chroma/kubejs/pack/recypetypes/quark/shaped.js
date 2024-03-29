onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/quark/shaped';
    const recipes = [
        {
            output: Item.of('quark:paper_wall', 4),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
              A: 'minecraft:bamboo',
              B: '#forge:paper'
            },
            id: 'quark:building/crafting/panes/paper_wall'
      },
      {
        output: 'minecraft:glass',
        pattern: ['AA', 'AA'],
        key: {
          A:'quark:dirty_shard'
        },
        id: `${id_prefix}dirty_glass`
      }
    ];

    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
