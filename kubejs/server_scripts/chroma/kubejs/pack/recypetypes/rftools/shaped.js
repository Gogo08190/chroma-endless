onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'rftoolsbase:smartwrench',
          pattern: ['  G', ' P ', 'P  '],
          key: {
              G: '#forge:gears/invar',
              P: 'pneumaticcraft:plastic_brick_light_blue'
          },
          id: 'rftoolsbase:smartwrench'
      },
      {
          output: 'rftoolspower:cell1',
          pattern: ['PFP', 'EME', 'PEP'],
          key: {
              P: 'rftoolspower:power_core1',
              E: 'pipez:energy_pipe',
              M: 'rftoolsbase:machine_frame',
              F: 'thermal:rf_coil'
          },
          id: 'rftoolspower:cell1'
      },
      {
          output: 'rftoolspower:cell2',
          pattern: ['RPR', 'PMP', 'RPR'],
          key: {
              P: 'rftoolspower:power_core2',
              R: 'extendedcrafting:redstone_ingot',
              M: 'rftoolspower:cell1'
          },
          id: 'rftoolspower:cell2'
      },
      {
          output: 'rftoolspower:cell3',
          pattern: ['RPR', 'PMP', 'RPR'],
          key: {
              P: 'rftoolspower:power_core3',
              R: 'extendedcrafting:redstone_ingot',
              M: 'rftoolspower:cell2'
          },
          id: 'rftoolspower:cell3'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
