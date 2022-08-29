onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/endless_reactor/';
    const recipes = [
      {
          outputs: [
            {
              perTick: true,
              type: 'masterfulmachinery:create_rotation', data: { speed: 10 }
            },
            { type: 'masterfulmachinery:items', data: { item: 'kubejs:chroma_matter', count: 1 } },
            {
              perTick: true,
              type: 'masterfulmachinery:energy', data: { amount: 5000 }
            }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:items', data: { item: 'envirocore:litherite_boule', count: 1 } },
          ],
          ticks: 512,
          id: `${id_prefix}low_energy_generation`
      },
      {
          outputs: [
            { type: 'masterfulmachinery:items', data: { item: 'powah:crystal_nitro', count: 1 } },
            {
              perTick: true,
              type: 'masterfulmachinery:energy', data: { amount: 60000 }
            }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:items', data: { item: "ironjetpacks:nitro_cell", count: 1 } }
          ],
          ticks: 512,
          id: `${id_prefix}nitro_cell_recycling`
      },
      {
          outputs: [
            { type: 'masterfulmachinery:items', data: { item: 'powah:crystal_nitro', count: 1 } },
            {
              perTick: true,
              type: 'masterfulmachinery:energy', data: { amount: 60000 }
            }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:items', data: { item: "ironjetpacks:nitro_thruster", count: 1 } }
          ],
          ticks: 512,
          id: `${id_prefix}nitro_thruster_recycling`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'endless_reactor';
        recipe.controllerId = 'endlessreactor';
        event.custom(recipe).id(recipe.id);
    });
});
