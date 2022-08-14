onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'tconstruct:seared_table',
          pattern: ['SSS', 'STS', 'S S'],
          key: {
              S: 'tconstruct:seared_brick',
              T: 'create:turntable'
          },
          id: 'tconstruct:smeltery/seared/table'
      },
      {
          output: 'tconstruct:seared_basin',
          pattern: ['S S', 'STS', 'SSS'],
          key: {
              S: 'tconstruct:seared_brick',
              T: 'minecraft:bucket'
          },
          id: 'tconstruct:smeltery/seared/basin'
      },
      {
          output: 'tconstruct:seared_heater',
          pattern: ['SSS', 'STS', 'SSS'],
          key: {
              S: 'tconstruct:seared_brick',
              T: 'create:empty_blaze_burner'
          },
          id: 'tconstruct:smeltery/seared/heater'
      },
      {
          output: 'tconstruct:seared_fuel_tank',
          pattern: ['SSS', 'STS', 'SSS'],
          key: {
              S: 'tconstruct:seared_brick',
              T: 'create:fluid_tank'
          },
          id: 'tconstruct:smeltery/seared/fuel_tank'
      },
      //Scorched Casting Basin
      {
          output: 'tconstruct:scorched_basin',
          pattern: ['A A', 'ABA', 'AAA'],
          key: {
              A: 'tconstruct:scorched_brick',
              B: 'minecraft:bucket'
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
