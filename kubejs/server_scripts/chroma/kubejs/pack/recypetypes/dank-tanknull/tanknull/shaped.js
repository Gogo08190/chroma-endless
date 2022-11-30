onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'tanknull:dock',
      pattern: ['ABA', 'B B', 'ABA'],
      key: {
        A: '#forge:sheetmetals/iron',
        B: '#chroma:stonecuttables/white_concrete'
      },
      id: 'tanknull:dock'
    },
    {
      output: 'tanknull:tank_1',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: '#forge:gems/coal_coke',
        B: 'minecraft:bucket',
        C: 'create:fluid_tank'
      },
      id: 'tanknull:1'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
