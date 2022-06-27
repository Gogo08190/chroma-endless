onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'extendedcrafting:frame',
          pattern: ['BGB', 'GMG', 'BGB'],
          key: {
              B: 'extendedcrafting:black_iron_slate',
              G: 'thermal:obsidian_glass',
              M: 'industrialforegoing:machine_frame_supreme'
          },
          id: 'extendedcrafting:frame'
      },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
