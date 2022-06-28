onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'miniutilities:stone_drum',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: 'minecraft:smooth_stone',
        B: 'minecraft:smooth_stone_slab',
        C: '#forge:ingots/iron',
        D: 'create:fluid_tank'
      },
      id: 'miniutilities:stone_drum'
    },
    {
      output: 'miniutilities:iron_drum',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: '#forge:sheetmetals/iron',
        B: '#forge:plates/iron',
        C: '#forge:ingots/iron',
        D: 'miniutilities:stone_drum'
      },
      id: 'miniutilities:iron_drum'
    },
    {
      output: 'miniutilities:reinforced_large_drum',
      pattern: ['ABC', 'DED', 'ABA'],
      key: {
        A: '#forge:sheetmetals/iron',
        B: '#forge:plates/gold',
        C: '#forge:ingots/iron',
        D: 'botania:mana_diamond_block',
        E: 'miniutilities:iron_drum'
      },
      id: 'miniutilities:reinforced_large_drum'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
