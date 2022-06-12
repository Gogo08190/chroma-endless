onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/kubejs/shaped/';
    const recipes = [
      {
          output: 'kubejs:central_windmill',
          pattern: [' T ', 'TST', ' T '],
          key: {
              T: 'immersiveengineering:treated_wood_horizontal',
              S: 'immersiveengineering:stick_treated'
          },
          id: `${id_prefix}central_windmill`
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
