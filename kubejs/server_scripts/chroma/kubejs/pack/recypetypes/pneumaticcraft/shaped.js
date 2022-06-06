onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'pneumaticcraft:air_canister',
          pattern: [' A ', 'BCB', ' BCB '],
          key: {
              A: 'pneumaticcraft:pressure_tube',
              B: 'pneumaticcraft:ingot_iron_compressed'
              C: 'extendedcrafting:redstone_ingot'
          },
          id: 'pneumaticcraft:air_canister'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
