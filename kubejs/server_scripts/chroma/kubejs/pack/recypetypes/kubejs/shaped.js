onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/kubejs/shaped/';
    const recipes = [
      {
          output: 'kubejs:central_windmill',
          pattern: [' T ', 'TST', ' T '],
          key: {
              T: 'immersiveengineering:treated_wood_horizontal',
              S: 'immersiveengineering:stick_treated'
          },
          id: `${id_prefix}central_windmill`
      },
      {
          output: 'kubejs:xnet_machine_frame',
          pattern: ['SCS', 'GFG', 'SHS'],
          key: {
              S: '#forge:plates/steel',
              F: 'thermal:energy_cell_frame',
              G: '#forge:gears/enderium',
              H: 'thermal:enderium_glass',
              C: 'thermal:rf_coil'
          },
          id: `${id_prefix}xnet_machine_frame`
      },
      /// Unassembled 256k fluid storage part
      {
          output: 'kubejs:unassembled_256k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'refinedstorage:quartz_enriched_iron',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_infused',
              G: 'thermal:obsidian_glass'
          },
          id: `${id_prefix}unassembled_256k_fluid_storage_part`
      },
      /// Unassembled 1024k fluid storage part
      {
          output: 'kubejs:unassembled_1024k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'refinedstorage:basic_processor',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_infused',
              G: 'kubejs:unassembled_256k_fluid_storage_part'
          },
          id: `${id_prefix}unassembled_1024k_fluid_storage_part`
      },
      ///Unassembled 4096k fluid storage part
      {
          output: 'kubejs:unassembled_4096k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'refinedstorage:improved_processor',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_infused',
              G: 'kubejs:unassembled_1024k_fluid_storage_part'
          },
          id: `${id_prefix}unassembled_4096k_fluid__storage_part`
      },
      ///Unassembled 16384k fluid storage part
      {
          output: 'kubejs:unassembled_16384k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'refinedstorage:improved_processor',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_reinforced',
              G: 'kubejs:unassembled_4096k_fluid_storage_part'
          },
          id: `${id_prefix}unassembled_16384k_fluid_storage_part`
      },
      ///Unassembled 65536k fluid storage part
      {
          output: 'kubejs:unassembled_65536k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'refinedstorage:improved_processor',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_reinforced',
              G: 'kubejs:unassembled_16384k_fluid_storage_part'
          },
          id: `${id_prefix}unassembled_65536k_fluid_storage_part`
      },
      ///Unassembled 262144k fluid storage part
      {
          output: 'kubejs:unassembled_262144k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'refinedstorage:advanced_processor',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_atomic',
              G: 'kubejs:unassembled_65536k_fluid_storage_part'
          },
          id: `${id_prefix}unassembled_262144k_fluid_storage_part`
      },
      ///Unassembled 1048576k fluid storage part
      {
          output: 'kubejs:unassembled_1048576k_fluid_storage_part',
          pattern: ['QSQ', 'GCG', 'QGQ'],
          key: {
              Q: 'extrastorage:neural_processor',
              S: '#forge:gems/silicon',
              C: 'mekanism:alloy_atomic',
              G: 'kubejs:unassembled_262144k_fluid_storage_part'
          },
          id: `${id_prefix}unassembled_1048576k_fluid_storage_part`
      },

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
