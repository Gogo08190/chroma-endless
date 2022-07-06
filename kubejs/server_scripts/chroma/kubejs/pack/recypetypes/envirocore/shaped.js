onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/envirocore/shaped/';
    const recipes = [
      {
          output: 'envirocore:litherite_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:litherite_crystal',
              P: 'envirocore:litherite_powder'
          },
          id: 'envirocore:items/boules/_1litherite'
      },
      {
          output: 'envirocore:cpu',
          pattern: ['ELE', 'LCL', 'ELE'],
          key: {
              E: '#forge:ingots/electrum',
              L: 'envirocore:litherite_crystal',
              C: 'rftoolscontrol:cpu_core_500'
          },
          id: 'envirocore:items/ct_cpu'
      },
      {
          output: 'envirocore:volatile_memory',
          pattern: ['SLS', 'SES', 'SLS'],
          key: {
              S: '#forge:ingots/steel',
              L: 'envirocore:litherite_crystal',
              E: 'enderioalloys:item_material_skull_zombie_electrode'
          },
          id: 'envirocore:items/ct_volatile_memory'
      },
      {
          output: 'envirocore:flash_memory',
          pattern: ['DRD', 'EFE', 'DRD'],
          key: {
              D: 'enderioalloys:item_alloy_ingot_dark_steel',
              R: 'enderioalloys:item_alloy_ingot_redstone_alloy',
              E: 'enderioalloys:item_material_skull_ender_resonator',
              F: 'envirocore:volatile_memory'
          },
          id: 'envirocore:items/ct_flash_memory'
      },
      {
          output: 'envirocore:assembler',
          pattern: ['MCM', 'ESE', 'OOO'],
          key: {
              M: 'envirocore:volatile_memory',
              C: 'envirocore:cpu',
              E: 'kubejs:advanced_extreme_circuit_board',
              S: '#envirocore:structure/panels',
              O: 'envirocore:obsidian_plate'
          },
          id: 'envirocore:blocks/machines/assembler'
      },
      {
          output: 'envirocore:memory_programmer',
          pattern: ['MCM', 'OSO', 'OEO'],
          key: {
              M: 'envirocore:volatile_memory',
              C: 'envirocore:cpu',
              E: 'kubejs:advanced_extreme_circuit_board',
              S: '#envirocore:structure/panels',
              O: 'envirocore:obsidian_plate'
          },
          id: 'envirocore:blocks/machines/memory_programmer'
      },
      {
          output: 'envirocore:laser_diode',
          pattern: ['GGG', 'GRG', 'EEE'],
          key: {
              G: 'thermal:lumium_glass',
              R: 'enderioalloys:item_alloy_ingot_redstone_alloy',
              E: '#forge:ingots/electrum'
          },
          id: 'envirocore:items/ct_diode'
      },
      {
          output: 'envirocore:rgb_controller',
          pattern: ['ODO', 'RCR', 'OFO'],
          key: {
              O: 'envirocore:obsidian_plate',
              D: 'envirocore:laser_diode',
              R: 'resourcefulbees:rgbee_honeycomb',
              C: 'envirocore:cpu',
              F: 'envirocore:flash_memory'
          },
          id: 'envirocore:items/ct_rgb_controller'
      },
      {
          output: 'envirocore:laser_core',
          pattern: ['OSO', 'S S', 'OSO'],
          key: {
              O: 'envirocore:obsidian_plate',
              S: 'enderioalloys:item_alloy_ingot_electrical_steel'
          },
          id: 'envirocore:blocks/components/laser_core'
      },
      {
          output: 'envirocore:laser_lens_holder',
          pattern: [' L ', 'S S', ' L '],
          key: {
              L: 'envirocore:laser_core',
              S: 'enderioalloys:item_alloy_ingot_electrical_steel'
          },
          id: 'envirocore:blocks/components/laser_lens_holder'
      },
      {
          output: 'envirocore:structure_panel',
          pattern: ['UOU', 'OMO', 'UOU'],
          key: {
              U: '#forge:nuggets/utherium',
              O: 'envirocore:obsidian_plate',
              M: 'botania:quartz_mana'
          },
          id: 'envirocore:blocks/components/structure_panel'
      },
      {
          output: 'kubejs:litherite_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:litherite_wafer',
              C: 'envirocore:litherite_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}litherite_photovoltaic_panel`
      },
      {
          output: 'enviroenergy:lightning_rod',
          pattern: ['ELE', 'ELE', 'ELE'],
          key: {
              E: 'enderioalloys:item_alloy_ingot_end_steel',
              L: 'envirocore:litherite_crystal'
          },
          id: 'enviroenergy:block/lightning/ct_rod'
      },
      {
          output: 'enviroenergy:insulated_lightning_rod',
          pattern: ['FGF', 'GRG', 'FGF'],
          key: {
              F: 'thermal:hazmat_fabric',
              G: 'immersiveengineering:insulating_glass',
              R: 'enviroenergy:lightning_rod'
          },
          id: 'enviroenergy:block/lightning/ct_insulated_rod'
      },
      {
        output: 'envirocore:erodium_boule',
         pattern: ['P', 'C', 'C'],
         key: {
            C: 'envirocore:erodium_crystal',
            P: 'envirocore:erodium_powder'
              },
         id: 'envirocore:items/boules/_2erodium'
      },
      {
          output: 'kubejs:erodium_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:erodium_wafer',
              C: 'envirocore:erodium_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}erodium_photovoltaic_panel`
      },
      {
          output: 'envirocore:kyronite_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:kyronite_crystal',
              P: 'envirocore:kyronite_powder'
          },
          id: 'envirocore:items/boules/_3kyronite'
      },
      {
          output: 'kubejs:kyronite_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:kyronite_wafer',
              C: 'envirocore:kyronite_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}kyronite_photovoltaic_panel`
      },
      {
          output: 'envirocore:pladium_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:pladium_crystal',
              P: 'envirocore:pladium_powder'
          },
          id: 'envirocore:items/boules/_4pladium'
      },
      {
          output: 'kubejs:pladium_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:pladium_wafer',
              C: 'envirocore:pladium_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}pladium_photovoltaic_panel`
      },
      {
          output: 'envirocore:ionite_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:ionite_crystal',
              P: 'envirocore:ionite_powder'
          },
          id: 'envirocore:items/boules/_5ionite'
      },
      {
          output: 'kubejs:ionite_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:ionite_wafer',
              C: 'envirocore:ionite_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}ionite_photovoltaic_panel`
      },
      {
          output: 'envirocore:aethium_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:aethium_crystal',
              P: 'envirocore:aethium_powder'
          },
          id: 'envirocore:items/boules/_6aethium'
      },
      {
          output: 'kubejs:aethium_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:aethium_wafer',
              C: 'envirocore:aethium_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}aethium_photovoltaic_panel`
      },
      {
          output: 'envirocore:nanorite_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:nanorite_crystal',
              P: 'envirocore:nanorite_powder'
          },
          id: 'envirocore:items/boules/_7nanorite'
      },
      {
          output: 'kubejs:nanorite_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:nanorite_wafer',
              C: 'envirocore:nanorite_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}nanorite_photovoltaic_panel`
      },
      {
          output: 'envirocore:xerothium_boule',
          pattern: ['P', 'C', 'C'],
          key: {
              C: 'envirocore:xerothium_crystal',
              P: 'envirocore:xerothium_powder'
          },
          id: 'envirocore:items/boules/_8xerothium'
      },
      {
          output: 'kubejs:xerothium_photovoltaic_panel',
          pattern: ['GGG', 'BBB', 'CSC'],
          key: {
              G: 'thermal:lumium_glass',
              B: 'envirocore:xerothium_wafer',
              C: 'envirocore:xerothium_interconnect',
              S: '#envirocore:structure/panels'
          },
          id: `${id_prefix}xerothium_photovoltaic_panel`
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
