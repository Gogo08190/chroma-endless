onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('valhelsia_structures:paper_wall', 4),
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
              A: 'minecraft:bamboo',
              B: '#forge:paper'
            },
            id: 'valhelsia_structures:paper_wall'
      }
    ];

    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
