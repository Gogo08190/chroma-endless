onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'miniutilities:netherite_spikes',
      inputs: ['miniutilities:diamond_spikes', 'minecraft:netherite_block'],
      id: 'miniutilities:netherite_spikes_smithing'
    }
  ];

  recipes.forEach((recipe) => {
    event.smithing(recipe.output, recipe.inputs).id(recipe.id);
  });
});
