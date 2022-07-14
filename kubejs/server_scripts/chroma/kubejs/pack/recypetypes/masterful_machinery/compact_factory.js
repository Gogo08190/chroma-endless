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
          ticks: 150,
          id: 'compactmachines:machine_tiny'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_small', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:wall', count: 16 } },
              { type: 'masterfulmachinery:items', data: { item: 'elementalcraft:drenched_iron_block', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_ingot', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_tiny', count: 1 } },
              { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 750 } }
          ],
          ticks: 150,
          id: 'compactmachines:machine_small'
      },

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'compact_factory';
        recipe.controllerId = 'compactfactory';
        event.custom(recipe).id(recipe.id);
    });
});
