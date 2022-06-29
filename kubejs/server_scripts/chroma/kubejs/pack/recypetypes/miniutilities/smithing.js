onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'miniutilities:netherite_spikes',
      inputs: ['miniutilities:diamond_spikes', '#forge:storage_blocks/netherite'],
      id: 'minecraft:netherite_spikes_smithing'
    }
  ];

  recipes.forEach((recipe) => {
    event.smithing(recipe.output, recipe.inputs).id(recipe.id);
  });
});
