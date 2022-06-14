onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'rftoolsbase:smartwrench',
          pattern: ['  G', ' P ', 'P  '],
          key: {
              G: '#forge:gears/invar',
              P: 'pneumaticcraft:plastic_brick_light_blue'
          },
          id: 'rftoolsbase:smartwrench'
      },
      {
          output: 'rftoolspower:cell1',
          pattern: ['PFP', 'EME', 'PEP'],
          key: {
              P: 'rftoolspower:power_core1',
              E: 'pipez:energy_pipe',
              M: 'rftoolsbase:machine_frame',
              F: 'thermal:rf_coil'
          },
          id: 'rftoolspower:cell1'
      },
      {
          output: 'rftoolspower:cell2',
          pattern: ['RPR', 'PMP', 'RPR'],
          key: {
              P: 'rftoolspower:power_core2',
              R: 'extendedcrafting:redstone_ingot',
              M: 'rftoolspower:cell1'
          },
          id: 'rftoolspower:cell2'
      },
      {
          output: 'rftoolspower:cell3',
          pattern: ['RPR', 'PMP', 'RPR'],
          key: {
              P: 'rftoolspower:power_core3',
              R: 'extendedcrafting:redstone_ingot',
              M: 'rftoolspower:cell2'
          },
          id: 'rftoolspower:cell3'
      },
      {
          output: 'rftoolsbase:machine_infuser',
          pattern: ['ERE', 'DMD', 'ERE'],
          key: {
              E: 'emendatusenigmatica:enderium_gear',
              R: 'extendedcrafting:redstone_ingot',
              D:'rftoolsbase:infused_diamond',
              M: 'rftoolsbase:machine_frame'
          },
          id: 'rftoolsbase:machine_infuser'
      },
      {
          output: 'rftoolsbase:tablet',
          pattern: ['III', 'ARG', 'RMR'],
          key: {
              I: 'rftoolsbase:information_screen',
              R: 'extendedcrafting:redstone_ingot',
              A:'rftoolscontrol:advanced_network_card',
              M: 'rftoolsbase:machine_base',
              G:'rftoolscontrol:graphics_card'
          },
          id: 'rftoolsbase:tablet'
      },
      {
          output: 'rftoolsbuilder:builder',
          pattern: ['RFR', 'CMC', 'RTR'],
          key: {
              F: 'thermal:flux_drill',
              R: 'pneumaticcraft:reinforced_bricks',
              C: 'kubejs:extreme_circuit_board',
              M: 'rftoolsbase:machine_frame',
              T: 'thermal:rf_coil'
          },
          id: 'rftoolsbuilder:builder'
      },
      {
          output: 'rftoolsbuilder:shield_block1',
          pattern: ['ETE', 'RMR', 'RFR'],
          key: {
              E: '#forge:ingots/electrum',
              R: 'extendedcrafting:redstone_ingot',
              F: 'fluxnetworks:flux_block',
              M: 'rftoolsbase:machine_frame',
              T: 'immersiveengineering:tesla_coil'
          },
          id: 'rftoolsbuilder:shield_block1'
      },
      {
          output: 'rftoolsbuilder:shield_block2',
          pattern: ['RFR', 'FSF', 'RFR'],
          key: {
              S: 'rftoolsbuilder:shield_block1',
              R: 'extendedcrafting:redstone_ingot_block',
              F: 'fluxnetworks:flux_block'
          },
          id: 'rftoolsbuilder:shield_block2'
      },
      {
          output: 'rftoolsbuilder:shield_block3',
          pattern: ['DFD', 'FSF', 'DFD'],
          key: {
              S: 'rftoolsbuilder:shield_block2',
              D: '#forge:gems/dimensional',
              F: 'fluxnetworks:flux_block'
          },
          id: 'rftoolsbuilder:shield_block3'
      },
      {
          output: 'rftoolsbuilder:shield_block4',
          pattern: ['NFD', 'FSF', 'DFN'],
          key: {
              S: 'rftoolsbuilder:shield_block3',
              D: '#forge:gems/dimensional',
              F: 'fluxnetworks:flux_block',
              N: 'minecraft:nether_star'
          },
          id: 'rftoolsbuilder:shield_block4'
      },
      {
          output: 'rftoolscontrol:processor',
          pattern: ['RLR', 'SMS', 'RCR'],
          key: {
              R: 'extendedcrafting:redstone_ingot',
              L: 'immersiveengineering:logic_unit',
              S: 'pneumaticcraft:smart_chest',
              M: 'rftoolsbase:machine_frame',
              C: 'thermal:rf_coil'
          },
          id: 'rftoolscontrol:processor'
      },
      {
          output: 'rftoolscontrol:card_base',
          pattern: ['RRR', 'GGG', 'EEE'],
          key: {
              G: '#forge:dyes/green',
              R: 'extendedcrafting:redstone_ingot',
              E: '#forge:nuggets/electrum'
          },
          id: 'rftoolscontrol:card_base'
      },
      {
          output: 'rftoolscontrol:network_card',
          pattern: ['E  ', 'SBR', 'CCC'],
          key: {
              C: '#forge:nuggets/copper',
              B: 'rftoolscontrol:card_base',
              E: 'minecraft:ender_pearl',
              R: 'extendedcrafting:redstone_ingot',
              S: '#forge:rods/steel'
          },
          id: 'rftoolscontrol:network_card'
      },
      {
          output: 'rftoolscontrol:advanced_network_card',
          pattern: ['RPR', 'ENE', 'RPR'],
          key: {
              N: 'rftoolscontrol:network_card',
              E: '#forge:gems/emerald',
              P: 'minecraft:ender_pearl',
              R: 'extendedcrafting:redstone_ingot'
          },
          id: 'rftoolscontrol:advanced_network_card'
      },
      {
          output: 'rftoolscontrol:graphics_card',
          pattern: ['SRR', 'SCR', 'LLL'],
          key: {
              S: '#forge:rods/steel',
              R: 'create:rose_quartz',
              C: 'rftoolscontrol:card_base',
              L: '#forge:nuggets/lumium'
          },
          id: 'rftoolscontrol:graphics_card'
      },
      {
          output: 'rftoolsutility:screen_controller',
          pattern: ['SRS', 'OMO', 'SOS'],
          key: {
              M: 'rftoolsbase:machine_frame',
              O: 'thermal:obsidian_glass',
              R: 'thermal:rf_coil',
              S: '#forge:ingots/signalum'
          },
          id: 'rftoolsutility:screen_controller'
      },
      {
          output: 'rftoolsutility:matter_transmitter',
          pattern: ['EPE', 'PMP', 'CPC'],
          key: {
              E: '#forge:ingots/enderium',
              P: 'wormhole:portal_stabilizer',
              M: 'rftoolsbase:machine_frame',
              C: 'pneumaticcraft:ingot_iron_compressed'
          },
          id: 'rftoolsutility:matter_transmitter'
      },
      {
          output: 'rftoolsutility:matter_receiver',
          pattern: ['LPL', 'PMP', 'CPC'],
          key: {
              L: '#forge:ingots/lumium',
              P: 'wormhole:portal_stabilizer',
              M: 'rftoolsbase:machine_frame',
              C: 'pneumaticcraft:ingot_iron_compressed'
          },
          id: 'rftoolsutility:matter_receiver'
      },
      {
          output: 'rftoolsutility:dialing_device',
          pattern: ['EPL', 'CMC', 'IAI'],
          key: {
              L: '#forge:ingots/lumium',
              E: '#forge:ingots/enderium',
              I: 'rftoolsbase:infused_enderpearl',
              P: 'wormhole:portal_stabilizer',
              A: 'wormhole:advanced_target_cell',
              M: 'rftoolsbase:machine_frame',
              C: 'pneumaticcraft:ingot_iron_compressed'
          },
          id: 'rftoolsutility:dialing_device'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
