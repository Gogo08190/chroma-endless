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
              type: 'masterfulmachinery:energy', data: { amount: 400000000 }
            }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:items', data: { item: 'draconicevolution:large_chaos_frag', count: 1 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:light', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:fluids', data: { fluid: 'bigreactors:rossinite', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 1100 }
              },
          ],
          ticks: 200,
          id: `${id_prefix}low_energy_generation`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'endless_reactor';
        recipe.controllerId = 'endlessreactor';
        event.custom(recipe).id(recipe.id);
    });
});
