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
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_fusioner';
        recipe.controllerId = 'fusioner';
        event.custom(recipe).id(recipe.id);
    });
});
