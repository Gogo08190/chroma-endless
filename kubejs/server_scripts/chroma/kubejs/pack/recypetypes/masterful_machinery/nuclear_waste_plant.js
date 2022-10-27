onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/nuclear_waste_plant/';
    const recipes = [
      //Craft Black Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:black', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:fluids', data: { fluid: 'mekanism:heavy_water', amount: 4000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:items', data: { item: 'ironjetpacks:nitro_thruster', count: 1 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:energy', data: { amount: 250000 }
              }
          ],
          ticks: 512,
          id: `${id_prefix}black_gas`
      },
      //Craft Black Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:black', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:fluids', data: { fluid: 'mekanism:heavy_water', amount: 4000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:items', data: { item: 'ironjetpacks:nitro_cell', count: 1 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:energy', data: { amount: 250000 }
              }
          ],
          ticks: 512,
          id: `${id_prefix}black_gas_bis`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'nuclear_waste';
        recipe.controllerId = 'nuclearwaste';
        event.custom(recipe).id(recipe.id);
    });
});
