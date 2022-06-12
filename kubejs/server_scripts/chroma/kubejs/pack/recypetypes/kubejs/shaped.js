onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/kubejs/shaped/';
    const recipes = [
      {
          output: 'kubejs:central_windmill',
          pattern: [' T ', 'TST', ' T '],
          key: {
              T: 'immersiveengineering:treated_wood_horizontal',
              S: 'immersiveengineering:stick_treated'
          },
          id: `${id_prefix}central_windmill`
      },
      {
          output: 'kubejs:xnet_machine_frame',
          pattern: ['SCS', 'GFG', 'SHS'],
          key: {
              S: '#forge:plates/steel',
              F: 'thermal:energy_cell_frame',
              G: '#forge:gears/enderium',
              H: 'thermal:enderium_glass',
              C: 'thermal:rf_coil'
          },
          id: `${id_prefix}xnet_machine_frame`
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
