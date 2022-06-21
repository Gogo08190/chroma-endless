onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'shrink:shrinking_device',
          pattern: ['SRS', 'SMS', 'SPS'],
          key: {
              S:'#forge:ingots/steel',
              M:'thermal:machine_frame',
              R:'thermal:rf_coil',
              P:'#forge:plates/invar'
          },
          id: 'shrink:shrinking_device'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
