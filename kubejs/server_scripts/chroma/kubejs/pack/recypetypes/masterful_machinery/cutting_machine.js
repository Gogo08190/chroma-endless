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
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:erodium_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:erodium_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_2erodium'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:kyronite_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:kyronite_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_3kyronite'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:pladium_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:pladium_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_4pladium'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:ionite_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:ionite_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_5ionite'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:aethium_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:aethium_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_6aethium'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:nanorite_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:nanorite_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_7nanorite'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'envirocore:xerothium_wafer', count: 3 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:xerothium_boule', count: 1 } },
              { type: 'masterfulmachinery:create_rotation', data: { speed: 32 } }
          ],
          ticks: 120,
          id: 'envirocore:items/wafers/_8xerothium'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'cutting_machine';
        recipe.controllerId = 'cuttingmachine';
        event.custom(recipe).id(recipe.id);
    });
});
