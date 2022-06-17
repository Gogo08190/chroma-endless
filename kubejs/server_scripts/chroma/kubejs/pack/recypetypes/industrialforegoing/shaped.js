onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
      {
          output: 'industrialforegoing:animal_baby_separator',
          pattern: ['PGP', 'WMW', 'DRD'],
          key: {
              P: '#forge:plastic',
              G:'minecraft:golden_carrot',
              W:'create:weighted_ejector',
              M:'industrialforegoing:machine_frame_pity',
              D:'enderioalloys:item_material_gear_darksteel',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:animal_baby_separator'
      },
      {
          output: 'industrialforegoing:latex_processing_unit',
          pattern: ['PEP', 'BMB', 'VRV'],
          key: {
              P: 'refinedpipes:elite_fluid_pipe',
              E:'kubejs:extreme_circuit_board',
              B:'industrialforegoing:common_black_hole_tank',
              M:'industrialforegoing:machine_frame_pity',
              V:'enderioalloys:item_material_gear_vibrant',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:latex_processing_unit'
      },
      {
          output: 'industrialforegoing:fluid_extractor',
          pattern: ['ELE', 'TMD', 'ERE'],
          key: {
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              R:'thermal:rf_coil',
              L:'pneumaticcraft:logistics_core',
              T:'pneumaticcraft:large_tank',
              M:'industrialforegoing:machine_frame_pity',
              D: 'create:mechanical_drill'
          },
          id: 'industrialforegoing:fluid_extractor'
      },
      {
          output: 'industrialforegoing:machine_frame_pity',
          pattern: ['BUB', 'NVN', 'BUB'],
          key: {
              B:'create:brass_casing',
              N:'kubejs:netherite_transistor',
              U:'kubejs:uranium_capacitor',
              V:'enderioalloys:item_material_gear_vibrant'
          },
          id: 'industrialforegoing:machine_frame_pity'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
