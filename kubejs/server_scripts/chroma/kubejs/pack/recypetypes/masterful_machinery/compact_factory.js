onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/compact_factory/';
    const recipes = [
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_tiny', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:wall', count: 8 } },
              { type: 'masterfulmachinery:items', data: { item: 'botania:livingwood', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:component_steel', count: 2 } },
              { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:brass_gear', count: 1 } },
              { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500 } }
          ],
          ticks: 240,
          id: 'compactmachines:machine_tiny'
      },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'compact_factory';
        recipe.controllerId = 'compactfactory';
        event.custom(recipe).id(recipe.id);
    });
});
