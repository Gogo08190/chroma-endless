onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/cutting_machine/';
    const recipes = [
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:litherite_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:litherite_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_1litherite'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'cutting_machine';
        recipe.controllerId = 'cuttingmachine';
        event.custom(recipe).id(recipe.id);
    });
});
