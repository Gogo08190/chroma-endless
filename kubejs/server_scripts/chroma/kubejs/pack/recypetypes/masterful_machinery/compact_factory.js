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
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_normal', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:wall', count: 32 } },
              { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:gold_plate', count: 8 } },
              { type: 'masterfulmachinery:items', data: { item: 'sophisticatedbackpacks:advanced_compacting_upgrade', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_small', count: 1 } },
              { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 1000 } }
          ],
          ticks: 150,
          id: 'compactmachines:machine_normal'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_large', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:wall', count: 48 } },
              { type: 'masterfulmachinery:items', data: { item: 'thermal:upgrade_augment_1', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'prefab:block_compressed_obsidian', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_normal', count: 1 } },
              { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 1250 } }
          ],
          ticks: 150,
          id: 'compactmachines:machine_large'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_giant', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:wall', count: 64 } },
              { type: 'masterfulmachinery:items', data: { item: 'thermal:upgrade_augment_2', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'botania:mana_diamond_block', count: 1 } },
              { type: 'masterfulmachinery:items', data: { item: 'compactmachines:machine_large', count: 1 } },
              { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 1500 } }
          ],
          ticks: 150,
          id: 'compactmachines:machine_giant'
      },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'compact_factory';
        recipe.controllerId = 'compactfactory';
        event.custom(recipe).id(recipe.id);
    });
});
