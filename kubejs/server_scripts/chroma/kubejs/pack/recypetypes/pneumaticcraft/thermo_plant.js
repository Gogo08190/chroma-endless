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
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
