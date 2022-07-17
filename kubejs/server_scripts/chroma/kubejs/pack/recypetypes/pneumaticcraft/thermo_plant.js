onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/thermo_plant/';

    const recipes = [
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 },
          item_input: { item: 'emendatusenigmatica:lapis_plate', count: 1 },
          item_output: { item: 'pneumaticcraft:upgrade_matrix', count: 4 },
          pressure: 2.0,
          speed: 0.8,
          id: 'pneumaticcraft:thermo_plant/upgrade_matrix'
      },
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:plastic', amount: 1000 },
          item_input: { item: 'thermal:machine_frame', count: 1 },
          item_output: { item: 'rftoolsbase:machine_base', count: 2 },
          pressure: 4.5,
          speed: 0.8,
          exothermic: false,
          temperature: { min_temp: 1873 },
          id: 'rftoolsbase:machine_base'
      },
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 8000 },
          item_input: { item: 'rftoolsbase:machine_base', count: 1 },
          item_output: { item: 'rftoolspower:power_core1', count: 1 },
          pressure: 2.0,
          exothermic: false,
          temperature: { min_temp: 1973 },
          id: 'rftoolspower:power_core1'
      },
      {
          fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'kubejs:silicon_oil', amount: 500 },
          item_input: { item: 'minecraft:blaze_powder', count: 1 },
          item_output: { item: 'rftoolspower:power_core1', count: 1 },
          pressure: 2.0,
          exothermic: false,
          temperature: { min_temp: 1973 },
          id: 'rftoolspower:power_core1'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
