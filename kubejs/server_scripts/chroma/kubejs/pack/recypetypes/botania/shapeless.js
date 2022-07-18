onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'kubejs:gaia_spirit_block',
          inputs: [
              '9x botania:gaia_ingot'
          ],
          id: 'chroma:block_from_ingot/gaia_spirit_block'
      }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
