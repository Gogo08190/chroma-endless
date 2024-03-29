onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'tconstruct:seared_heater',
          pattern: ['SSS', 'STS', 'SSS'],
          key: {
              S: 'tconstruct:seared_brick',
              T: 'minecraft:campfire'
          },
          id: 'tconstruct:smeltery/seared/heater'
      },
      {
          output: 'tconstruct:seared_fuel_tank',
          pattern: ['SSS', 'STS', 'SSS'],
          key: {
              S: 'tconstruct:seared_brick',
              T: 'minecraft:bucket'
          },
          id: 'tconstruct:smeltery/seared/fuel_tank'
      },
      //Scorched Casting Basin
      {
          output: 'tconstruct:scorched_basin',
          pattern: ['A A', 'ABA', 'AAA'],
          key: {
              A: 'tconstruct:scorched_brick',
              B: 'minecraft:cauldron'
          },
          id: 'tconstruct:smeltery/scorched/basin'
      },
      //Scorched Casting Table
      {
          output: 'tconstruct:scorched_table',
          pattern: ['AAA', 'ABA', 'A A'],
          key: {
              A: 'tconstruct:scorched_brick',
              B: 'create:turntable'
          },
          id: 'tconstruct:smeltery/scorched/table'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
