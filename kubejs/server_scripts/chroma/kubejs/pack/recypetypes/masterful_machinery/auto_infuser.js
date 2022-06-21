onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/auto_infuser/';
    const recipes = [
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'create:refined_radiance', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'create:chromatic_compound', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'thermal:lightning_charge', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'tconstruct:glow_ball', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'torchmaster:megatorch', count: 1 } },
              { type: 'masterfulmachinery:fluids', data: { fluid: 'thermal:glowstone', amount: 250 } },
              { type: 'masterfulmachinery:fluids', data: { fluid: 'tconstruct:molten_debris', amount: 250 } }
          ],
          ticks: 240,
          id: `${id_prefix}refined_radiance`
      },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_infuser';
        recipe.controllerId = 'autoinfuser';
        event.custom(recipe).id(recipe.id);
    });
});
