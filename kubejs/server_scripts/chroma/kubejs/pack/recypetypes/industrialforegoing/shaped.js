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
      {
          output: 'industrialforegoing:fluid_collector',
          pattern: ['PSP', 'AMH', 'CRC'],
          key: {
              P:'#forge:plastic',
              S:'pneumaticcraft:small_tank',
              A:'refinedpipes:advanced_fluid_pipe',
              M:'industrialforegoing:machine_frame_pity',
              H:'create:hose_pulley',
              C:'pneumaticcraft:compressed_iron_gear',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:fluid_collector'
      },
      {
          output: 'industrialforegoing:fluid_placer',
          pattern: ['PSP', 'AMH', 'CRC'],
          key: {
              P:'#forge:plastic',
              S:'pneumaticcraft:small_tank',
              A:'refinedpipes:advanced_fluid_pipe',
              M:'industrialforegoing:machine_frame_pity',
              H:'create:spout',
              C:'pneumaticcraft:compressed_iron_gear',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:fluid_placer'
      },
      {
          output: 'industrialforegoing:mob_slaughter_factory',
          pattern: ['PTP', 'SMA', 'VRV'],
          key: {
              P:'#forge:plastic',
              T:'pneumaticcraft:medium_tank',
              S:Item.of('botania:terra_sword', '{Damage:0}').weakNBT(),
              M:'industrialforegoing:machine_frame_pity',
              A:Item.of('botania:terra_axe', '{Damage:0}').weakNBT(),
              V:'enderioalloys:item_material_gear_vibrant',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:mob_slaughter_factory'
      },
      {
          output: 'industrialforegoing:dye_mixer',
          pattern: ['PHP', 'HMH', 'GRG'],
          key: {
              P:'#forge:plastic',
              H:'resourcefulbees:rgbee_honeycomb',
              M:'industrialforegoing:machine_frame_pity',
              G:'enderioalloys:item_material_gear_darksteel',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:dye_mixer'
      },
      {
          output: 'industrialforegoing:pitiful_generator',
          pattern: ['SIS', 'BMB', 'SRS'],
          key: {
              S:'pneumaticcraft:reinforced_stone',
              I:'#forge:ingots/brass',
              B:'create:blaze_burner',
              M:'industrialforegoing:machine_frame_pity',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:pitiful_generator'
      },
      {
          output: 'industrialforegoing:sewer',
          pattern: ['PGP', 'BMB', 'BRB'],
          key: {
              P:'#forge:plastic',
              G:'tardis:steam_grate',
              B:'environmental:mud_bricks',
              M:'industrialforegoing:machine_frame_pity',
              R:'thermal:rf_coil'
          },
          id: 'industrialforegoing:sewer'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
