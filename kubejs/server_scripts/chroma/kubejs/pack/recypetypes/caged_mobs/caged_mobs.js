onEvent('recipes', event => {
  const recipes = [
    {
      entity: 'occultism:afrit_wild',
      conditions: [
        {
          type: 'forge:mod_loaded',
          modid: 'occultism'
        }
      ],
      samplerTier: 3,
      environments: ['occultism'],
      growTicks: 1200,
      results: [
        {
          lightning: true,
          chance: 0.05,
          output: { item: 'occultism:afrit_essence' },
          minAmount: 1,
          maxAmount: 2
        },
        {
          chance: 0.2,
          output: { item: 'minecraft:blaze_rod' },
          minAmount: 1,
          maxAmount: 2
        }
      ]
    }
  ]


  recipes.forEach((recipe) => {
      event.custom({
          type: 'cagedmobs:mob_data',
          entity: recipe.entity,
          conditions: recipe.conditions,
          samplerTier: recipe.samplerTier,
          environments: recipe.environments,
          growTicks: recipe.growTicks,
          results: recipe.results,
      });
  });
});
