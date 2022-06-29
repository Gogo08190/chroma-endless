onEvent('recipes', (event) => {
  const recipes = [
    {
      input1: 'miniutilities:diamond_spikes',
      input2: 'minecraft:netherite_block',
      output: 'miniutilities:netherite_spikes',
      id: 'miniutilities:netherite_spikes_smithing'
    }
  ];

  recipes.forEach((recipe) => {
    event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
  });
});
