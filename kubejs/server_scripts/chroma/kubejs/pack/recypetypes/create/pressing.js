onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/pressing/';

    const recipes = [
      {
          output: 'extendedcrafting:black_iron_slate',
          inputs: ['extendedcrafting:black_iron_ingot'],
          id: 'extendedcrafting:black_iron_slate'
      },
      {
          output: 'envirocore:obsidian_plate',
          inputs: ['prefab:block_compressed_obsidian'],
          id: 'envirocore:items/obsidian_plate'
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
