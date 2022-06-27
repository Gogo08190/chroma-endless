onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/pressing/';

    const recipes = [
      {
          output: 'extendedcrafting:black_iron_slate',
          inputs: ['2x extendedcrafting:black_iron_slate'],
          id: 'extendedcrafting:black_iron_slate'
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
