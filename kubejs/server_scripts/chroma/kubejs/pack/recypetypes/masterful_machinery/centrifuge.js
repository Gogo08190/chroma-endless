onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/centrifuge/';
    const recipes = [
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:black', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:spent_nuclear_waste', amount: 250 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:spent_nuclear_waste', amount: 250 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:spent_nuclear_waste', amount: 250 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}black_gas`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'nuclear_waste';
        recipe.controllerId = 'nuclearwaste';
        event.custom(recipe).id(recipe.id);
    });
});
