onEvent('recipes', event => {
  const recipes = [
    {
      conditions: [
        {
          type: 'forge:mod_loaded',
          modid: 'occultism'
        }
      ],
      input: { item: 'occultism:iesnium_block' },
      render: 'occultism:iesnium_block',
      growModifier: 1.0,
      categories: ['occultism']
    }
  ]


  recipes.forEach((recipe) => {
      event.custom({
          type: 'cagedmobs:env_data',
          conditions: recipe.conditions,
          input: recipe.input,
          render: recipe.render,
          growModifier: recipe.growModifier,
          categories: recipe.categories
      });
  });
});
