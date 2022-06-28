onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/auto_infuser/';
    const recipes = [
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:basic_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:advanced_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:elite_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:ultimate_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:redstone_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:ender_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:enhanced_ender_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:crystaltine_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_component', count: 4 } },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:the_ultimate_catalyst'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_fusioner';
        recipe.controllerId = 'fusioner';
        event.custom(recipe).id(recipe.id);
    });
});
