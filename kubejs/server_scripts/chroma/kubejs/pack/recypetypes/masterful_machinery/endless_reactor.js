onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/endless_reactor/';
    const recipes = [
      {
          outputs: [
            {
              perTick: true,
              type: 'masterfulmachinery:create_rotation', data: { speed: 128 }
            }
          ],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:litherite_boule', count: 1 } },
          ],
          ticks: 512,
          id: 'chroma:test'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'endless_reactor';
        recipe.controllerId = 'endlessreactor';
        event.custom(recipe).id(recipe.id);
    });
});
