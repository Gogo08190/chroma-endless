onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/centrifuge/';
    const recipes = [
      //Red Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:red', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:black', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:brine', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:phenolsulfonephtaleine', amount: 500 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}red_gas`
      },
      //Phénolsulfonephtaléine = PSP
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:phenolsulfonephtaleine', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:oxygen', amount: 1500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:fissile_fuel', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:hydrogen', amount: 1500 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}phenolsulfonephtaleine`
      },
      //Orange Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:orange', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:red', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:chlorine', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:lithium', amount: 1000}
              },
          ],
          ticks: 512,
          id: `${id_prefix}orange_gas`
      },
      //Purple Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:purple', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:orange', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:hydrogen_chloride', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:sulfur_trioxide' , amount: 1000 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}purple_gas`
      },
      //Pink Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:pink', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:purple', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:ethene', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:sulfur_trioxide', amount: 1000 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}pink_gas`
      },
      //Blue Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:blue', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:pink', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:oxygen', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:hydrogen_chloride', amount: 250 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}blue_gas`
      },
      //Green Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:green', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:blue', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:chlorine', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:lime_hexasulfuric', amount: 250 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}green_gas`
      },
      //Lime hexasulfuric
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:lime_hexasulfuric', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:sulfuric_acid', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:uranium_hexafluoride', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:chlorine', amount: 1000 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}lime_hexasulfuric`
      },
      //Light Gas
      {
          outputs: [
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:light', amount: 250 } }
          ],
          inputs: [
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'kubejs:green', amount: 500 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:hydrogen', amount: 1000 }
              },
              {
                consumeInstantly: true,
                type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanism:hydrofluoric_acid', amount: 250 }
              },
          ],
          ticks: 512,
          id: `${id_prefix}light_gas`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'centrifuge_str';
        recipe.controllerId = 'centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
