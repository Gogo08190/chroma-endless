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
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:netherite_chest', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:obsidian_chest', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}netherite_chest`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:old_netherite_chest', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:old_obsidian_chest', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}old_netherite_chest`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:gold_to_netherite_conversion_kit', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:gold_to_obsidian_conversion_kit', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}gold_to_netherite_conversion_kit`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:obsidian_to_netherite_conversion_kit', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:obsidian', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}obsidian_to_netherite_conversion_kit`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:wood_to_netherite_conversion_kit', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:wood_to_obsidian_conversion_kit', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}wood_to_netherite_conversion_kit`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:iron_to_netherite_conversion_kit', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:iron_to_obsidian_conversion_kit', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}iron_to_netherite_conversion_kit`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'expandedstorage:diamond_to_netherite_conversion_kit', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'expandedstorage:diamond_to_obsidian_conversion_kit', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}diamond_to_netherite_conversion_kit`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'supplementaries:netherite_door', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'supplementaries:gold_door', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}netherite_door`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'cagedmobs:dnasamplernetherite', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'cagedmobs:dnasamplerdiamond', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'cagedmobs:star_infused_netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}dnasamplernetherite`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'supplementaries:netherite_trapdoor', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'supplementaries:gold_trapdoor', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}netherite_trapdoor`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'miniutilities:netherite_spikes', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'miniutilities:diamond_spikes', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 50 }, perTick: true }
          ],
          ticks: 10,
          id: `${id_prefix}netherite_spikes`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_smithing';
        recipe.controllerId = 'autosmithing';
        event.custom(recipe).id(recipe.id);
    });
});
