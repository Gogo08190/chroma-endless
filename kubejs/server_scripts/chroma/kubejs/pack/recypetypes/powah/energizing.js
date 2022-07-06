onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/energizing/';
    const recipes = [
      {
          ingredients: [
              { item: 'enviroenergy:pladium_solar_ccu' },
              { item: 'enviroenergy:ionite_solar_cell' },
              { item: 'enviroenergy:ionite_solar_cell' },
              { item: 'enviroenergy:ionite_solar_cell' },
              { item: 'envirocore:ionite_frame' },
              { item: 'envirocore:ionite_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:ionite_solar_ccu',
              count: 1
          },
          id: 'enviroenergy:block/solar/ionite'
      },
      {
          ingredients: [
              { item: 'create:refined_radiance' },
              { item: 'create:refined_radiance' },
              { item: 'enviroenergy:insulated_lightning_rod' },
              { item: 'enviroenergy:pladium_lightning_ccu' },
              { item: 'envirocore:ionite_frame' },
              { item: 'envirocore:ionite_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:ionite_lightning_ccu',
              count: 1
          },
          id: 'enviroenergy:block/lightning/ct_ionite'
      },
      {
          ingredients: [
              { item: 'envirotech:pladium_void_miner_ccu' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_diode' },
              { item: 'envirocore:ionite_frame' },
              { item: 'envirocore:ionite_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'envirotech:ionite_void_miner_ccu',
              count: 1
          },
          id: 'envirotech:block/void_miner/ct_ionite'
      },
      {
          ingredients: [
              { item: 'enviroenergy:ionite_solar_ccu' },
              { item: 'enviroenergy:aethium_solar_cell' },
              { item: 'enviroenergy:aethium_solar_cell' },
              { item: 'enviroenergy:aethium_solar_cell' },
              { item: 'envirocore:aethium_frame' },
              { item: 'envirocore:aethium_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:aethium_solar_ccu',
              count: 1
          },
          id: 'enviroenergy:block/solar/aethium'
      },
      {
          ingredients: [
              { item: 'create:refined_radiance' },
              { item: 'create:refined_radiance' },
              { item: 'enviroenergy:insulated_lightning_rod' },
              { item: 'enviroenergy:ionite_lightning_ccu' },
              { item: 'envirocore:aethium_frame' },
              { item: 'envirocore:aethium_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:aethium_lightning_ccu',
              count: 1
          },
          id: 'enviroenergy:block/lightning/ct_aethium'
      },
      {
          ingredients: [
              { item: 'envirotech:ionite_void_miner_ccu' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_diode' },
              { item: 'envirocore:aethium_frame' },
              { item: 'envirocore:aethium_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'envirotech:aethium_void_miner_ccu',
              count: 1
          },
          id: 'envirotech:block/void_miner/ct_aethium'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
