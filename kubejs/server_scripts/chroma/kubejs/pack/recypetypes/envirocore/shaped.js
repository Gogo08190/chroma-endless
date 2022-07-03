onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'envirocore:litherite_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:litherite_crystal',
              P: 'envirocore:litherite_powder'
          },
          id: 'envirocore:items/boules/_1litherite'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
