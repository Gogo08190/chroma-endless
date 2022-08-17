onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/auto_smithing/';
    const recipes = [
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:netherite_barrel', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:obsidian_barrel', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}netherite_barrel`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_smithing';
        recipe.controllerId = 'autosmithing';
        event.custom(recipe).id(recipe.id);
    });
});
