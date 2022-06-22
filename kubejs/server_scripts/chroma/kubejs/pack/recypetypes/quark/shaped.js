onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('quark:paper_wall', 4),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
              A: 'minecraft:bamboo',
              B: '#forge:paper'
            },
            id: 'quark:building/crafting/panes/paper_wall'
      }
    ];

    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
