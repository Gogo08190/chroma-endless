onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'pneumaticcraft:air_canister',
          pattern: [' A ', 'BCB', 'BCB'],
          key: {
              A: 'pneumaticcraft:pressure_tube',
              B: 'pneumaticcraft:ingot_iron_compressed',
              C: 'extendedcrafting:redstone_ingot'
          },
          id: 'pneumaticcraft:air_canister'
      },
      {
          output: 'pneumaticcraft:reinforced_air_canister',
          pattern: [' P ', 'CAC', 'CCC'],
          key: {
              P: 'pneumaticcraft:advanced_pressure_tube',
              A: 'pneumaticcraft:air_canister',
              C: 'pneumaticcraft:compressed_iron_block'
          },
          id: 'pneumaticcraft:reinforced_air_canister'
      },
      {
          output: Item.of('pneumaticcraft:pressure_tube', 8),
          pattern: ['CGC'],
          key: {
              G: 'thermal:obsidian_glass',
              C: '#forge:ingots/compressed_iron'
          },
          id: 'pneumaticcraft:pressure_tube'
      },
      {
          output: 'pneumaticcraft:small_tank',
          pattern: ['BCB', 'CGC', 'BCB'],
          key: {
            G: 'thermal:obsidian_glass',
            C: '#forge:ingots/compressed_iron',
            B: 'undergarden:cloggrum_bars'
          },
          id: 'pneumaticcraft:small_tank'
      },
      {
          output: 'pneumaticcraft:heat_sink',
          pattern: ['BBB', 'CGC'],
          key: {
            G: '#forge:ingots/brass',
            C: '#forge:ingots/compressed_iron',
            B: 'undergarden:cloggrum_bars'
          },
          id: 'pneumaticcraft:heat_sink'
      },
      {
          output: 'pneumaticcraft:vortex_tube',
          pattern: ['CTC', 'GTG', 'CCC'],
          key: {
            G: '#forge:ingots/brass',
            C: '#forge:ingots/compressed_iron',
            T: 'pneumaticcraft:pressure_tube'
          },
          id: 'pneumaticcraft:vortex_tube'
      },
      {
          output: 'pneumaticcraft:refinery',
          pattern: ['SSS', 'RTR', 'SSS'],
          key: {
            S: 'pneumaticcraft:reinforced_stone_slab',
            R: 'extendedcrafting:redstone_ingot',
            T: 'pneumaticcraft:small_tank'
          },
          id: 'pneumaticcraft:refinery'
      },
      {
          output: 'pneumaticcraft:refinery_output',
          pattern: ['SSS', 'RTR', 'SSS'],
          key: {
            S: 'pneumaticcraft:reinforced_stone_slab',
            R: 'thermal:obsidian_glass',
            T: '#forge:gems/mana_diamond'
          },
          id: 'pneumaticcraft:refinery_output'
      },
      {
          output: 'pneumaticcraft:thermopneumatic_processing_plant',
          pattern: ['SCS', 'RTR', 'SCS'],
          key: {
            S: 'pneumaticcraft:reinforced_stone_slab',
            R: 'pneumaticcraft:small_tank',
            T: 'pneumaticcraft:pressure_tube',
            C: '#forge:ingots/cloggrum'
          },
          id: 'pneumaticcraft:thermopneumatic_processing_plant'
      },
      {
          output: 'pneumaticcraft:air_compressor',
          pattern: ['UUU', 'SAT', 'SFS'],
          key: {
            S: 'pneumaticcraft:reinforced_bricks',
            F: 'thermal:machine_frame',
            A: 'pneumaticcraft:air_canister',
            T: 'pneumaticcraft:pressure_tube',
            U: '#forge:ingots/utherium'
          },
          id: 'pneumaticcraft:air_compressor'
      },
      {
          output: 'pneumaticcraft:liquid_compressor',
          pattern: ['UUU', 'TAT', 'CPC'],
          key: {
            T: 'pneumaticcraft:pressure_tube',
            U: '#forge:ingots/utherium',
            C: 'thermal:cured_rubber',
            P: 'thermal:machine_frame',
            A: 'pneumaticcraft:small_tank'
          },
          id: 'pneumaticcraft:liquid_compressor'
      },
      {
          output: 'pneumaticcraft:charging_station',
          pattern: ['  T', 'BUB', 'SSS'],
          key: {
            T: 'pneumaticcraft:pressure_tube',
            U: '#forge:ingots/utherium',
            B: '#forge:ingots/brick',
            S: 'pneumaticcraft:reinforced_stone_slab'
          },
          id: 'pneumaticcraft:charging_station'
      },
      {
          output: 'pneumaticcraft:uv_light_box',
          pattern: ['GLG', 'CPT', 'CCC'],
          key: {
            G: 'thermal:signalum_glass',
            L: 'simplylight:illuminant_red_block',
            C: '#forge:ingots/compressed_iron',
            P: 'pneumaticcraft:pcb_blueprint',
            T: 'pneumaticcraft:pressure_tube'
          },
          id: 'pneumaticcraft:uv_light_box'
      },
      {
          output: 'pneumaticcraft:heat_frame',
          pattern: ['CCC', 'CFC', 'BBB'],
          key: {
            C: '#forge:ingots/compressed_iron',
            F: 'minecraft:furnace',
            B: '#forge:storage_blocks/compressed_iron'
          },
          id: 'pneumaticcraft:heat_frame'
      },
      {
          output: 'pneumaticcraft:advanced_air_compressor',
          pattern: ['CAC', 'TGT', 'CRC'],
          key: {
            C: '#forge:ingots/compressed_iron',
            A: 'pneumaticcraft:advanced_pcb',
            T: 'pneumaticcraft:advanced_pressure_tube',
            G: 'pneumaticcraft:air_compressor',
            R: 'thermal:upgrade_augment_3'
          },
          id: 'pneumaticcraft:advanced_air_compressor'
      },
      {
          output: 'pneumaticcraft:advanced_liquid_compressor',
          pattern: ['CAC', 'TGT', 'CRC'],
          key: {
            C: '#forge:ingots/compressed_iron',
            A: 'pneumaticcraft:advanced_pcb',
            T: 'pneumaticcraft:advanced_pressure_tube',
            G: 'pneumaticcraft:liquid_compressor',
            R: 'thermal:upgrade_augment_3'
          },
          id: 'pneumaticcraft:advanced_liquid_compressor'
      },
      {
          output: 'pneumaticcraft:pneumatic_dynamo',
          pattern: [' F ', 'CAC', 'GWG'],
          key: {
            C: '#forge:ingots/compressed_iron',
            A: 'pneumaticcraft:advanced_pcb',
            F: 'thermal:rf_coil',
            G: '#forge:gears/compressed_iron',
            W: 'pneumaticcraft:turbine_rotor'
          },
          id: 'pneumaticcraft:pneumatic_dynamo'
      },
      {
          output: 'pneumaticcraft:thermal_compressor',
          pattern: ['CTC', 'RAR', 'CTC'],
          key: {
            C: '#forge:ingots/compressed_iron',
            T: 'pneumaticcraft:pressure_tube',
            R: 'immersiveengineering:radiator',
            A: 'pneumaticcraft:air_compressor'
          },
          id: 'pneumaticcraft:thermal_compressor'
      },
      {
          output: 'pneumaticcraft:electrostatic_compressor',
          pattern: ['RAR', 'PTP', 'BCB'],
          key: {
            R: '#forge:ingots/regalium',
            A: 'pneumaticcraft:advanced_pcb',
            P: 'pneumaticcraft:plastic',
            T: 'pneumaticcraft:turbine_rotor',
            B: 'pneumaticcraft:advanced_pressure_tube',
            C: 'pneumaticcraft:advanced_air_compressor'
          },
          id: 'pneumaticcraft:electrostatic_compressor'
      },
      {
          output: 'pneumaticcraft:advanced_pcb',
          pattern: ['RPR', 'PCP', 'RPR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            P: 'pneumaticcraft:plastic',
            C: 'pneumaticcraft:printed_circuit_board'
          },
          id: 'pneumaticcraft:advanced_pcb'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
