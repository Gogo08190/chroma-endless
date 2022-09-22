onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/nuclear_waste_plant/';
    const recipes = [
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:hydrogen', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:spent_nuclear_waste', amount: 250 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:fluids', data: { fluid: 'mekanism:heavy_water', amount: 250 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:energy', data: { amount: 2500 }
              }
          ],
          ticks: 512,
          id: `${id_prefix}waste_recycling`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'nuclear_waste';
        recipe.controllerId = 'nuclearwaste';
        event.custom(recipe).id(recipe.id);
    });
});
