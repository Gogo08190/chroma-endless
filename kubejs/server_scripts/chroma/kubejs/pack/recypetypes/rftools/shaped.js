onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'rftoolsbase:smartwrench',
          pattern: ['  G', ' P ', 'P  '],
          key: {
              G: '#forge:gears/invar',
              P: 'pneumaticcraft:plastic_brick_light_blue'
          },
          id: 'rftoolsbase:smartwrench'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
