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
          pattern: ['ETE', 'RMR', 'FFF'],
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
          pattern: ['RFR', 'OSO', 'RFR'],
          key: {
              S: 'rftoolsbuilder:shield_block1',
              R: 'extendedcrafting:redstone_ingot_block',
              F: 'fluxnetworks:flux_block',
              O: 'minecraft:obsidian'
          },
          id: 'rftoolsbuilder:shield_block2'
      },
      {
          output: 'rftoolsbuilder:shield_block3',
          pattern: ['DFD', 'OSO', 'DFD'],
          key: {
              S: 'rftoolsbuilder:shield_block2',
              D: '#forge:gems/dimensional',
              F: 'fluxnetworks:flux_block',
              O: 'minecraft:obsidian'
          },
          id: 'rftoolsbuilder:shield_block3'
      },
      {
          output: 'rftoolsbuilder:shield_block4',
          pattern: ['NFD', 'OSO', 'DFN'],
          key: {
              S: 'rftoolsbuilder:shield_block3',
              D: '#forge:gems/dimensional',
              F: 'fluxnetworks:flux_block',
              N: 'minecraft:nether_star',
              O: 'minecraft:obsidian'
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
          pattern: ['LPL', 'CMC', 'IAI'],
          key: {
              L: '#forge:ingots/allthemodium',
              I: 'rftoolsbase:infused_enderpearl',
              P: 'wormhole:portal_stabilizer',
              A: 'wormhole:advanced_target_cell',
              M: 'rftoolsbase:machine_frame',
              C: 'pneumaticcraft:ingot_iron_compressed'
          },
          id: 'rftoolsutility:dialing_device'
      },
      {
          output: 'rftoolscontrol:craftingstation',
          pattern: ['CUC', 'TMT', 'CBC'],
          key: {
              C: 'create:mechanical_crafter',
              U: 'kubejs:uranium_capacitor',
              T: 'kubejs:netherite_transistor',
              M: 'rftoolsbase:machine_frame',
              B: 'rftoolscontrol:card_base'
          },
          id: 'rftoolscontrol:craftingstation'
      },
      {
          output: 'rftoolsutility:module_template',
          pattern: ['SOS', 'OCO', 'SOS'],
          key: {
              S: '#forge:gems/dimensional',
              O: '#forge:ingots/osmium',
              C: 'kubejs:extreme_circuit_board'
          },
          id: 'rftoolsutility:module_template'
      },
      {
          output: 'rftoolspower:endergenic',
          pattern: ['DPD', 'IMI', 'DPD'],
          key: {
              D: 'rftoolsbase:infused_diamond',
              P: 'botania:mana_pearl',
              I: 'rftoolsbase:infused_enderpearl',
              M: 'rftoolsbase:machine_frame'
          },
          id: 'rftoolspower:endergenic'
      },
      {
          output: 'rftoolspower:pearl_injector',
          pattern: ['PCP', 'RMR', 'GSG'],
          key: {
              P: 'botania:mana_pearl',
              C: 'pneumaticcraft:smart_chest',
              R: 'extendedcrafting:redstone_ingot',
              M: 'rftoolsbase:machine_frame',
              G: '#forge:gears/compressed_iron',
              S: 'create:smart_chute'
          },
          id: 'rftoolspower:pearl_injector'
      },
      {
          output:'rftoolspower:dimensionalcell_simple',
          pattern: ['PDP', 'CMC', 'PDP'],
          key: {
              P: 'rftoolspower:power_core1',
              D: '#forge:gems/dimensional',
              M: 'rftoolsbase:machine_frame',
              C: 'pneumaticcraft:printed_circuit_board'
          },
          id: 'rftoolspower:dimensionalcell_simple'
      },
      {
          output:'rftoolspower:dimensionalcell',
          pattern: ['PDP', 'ICI', 'PDP'],
          key: {
              P: 'rftoolspower:power_core2',
              D: '#forge:gems/dimensional',
              C: 'rftoolspower:dimensionalcell_simple',
              I: 'rftoolsbase:infused_diamond'
          },
          id: 'rftoolspower:dimensionalcell'
      },
      {
          output:'rftoolspower:dimensionalcell_advanced',
          pattern: ['PNP', 'DCD', 'PNP'],
          key: {
              P: 'rftoolspower:power_core3',
              N: 'minecraft:nether_star',
              C: 'rftoolspower:dimensionalcell',
              D: 'botania:mana_diamond'
          },
          id: 'rftoolspower:dimensionalcell_advanced'
      },
      {
          output:'rftoolspower:blazing_agitator',
          pattern: ['BBB', 'GMG', 'CCC'],
          key: {
              B:'botania:blaze_block',
              G:'miniutilities:glowing_glass',
              M:'rftoolsbase:machine_frame',
              C:'#forge:ingots/compressed_iron'
          },
          id: 'rftoolspower:blazing_agitator'
      },
      {
          output:'rftoolsutility:flight_module',
          pattern: ['ISI', 'JMJ', 'DCD'],
          key: {
              I:'rftoolsbase:infused_enderpearl',
              S:Item.of('rftoolsutility:syringe', '{level:10,mobId:"minecraft:ghast"}').weakNBT(),
              J:'pneumaticcraft:jet_boots_upgrade_5',
              M:'rftoolsutility:moduleplus_template',
              D:'rftoolsbase:infused_diamond',
              C:'#forge:ingots/compressed_iron'
          },
          id: 'rftoolsutility:flight_module'
      },
      {
          output:'rftoolspower:ender_monitor',
          pattern: [' P ', 'RMR', 'TRT'],
          key: {
              M:'rftoolsbase:machine_base',
              P:'botania:mana_pearl',
              T:'minecraft:redstone_torch',
              R:'extendedcrafting:redstone_ingot'
          },
          id: 'rftoolspower:ender_monitor'
      },
      {
          output:'rftoolsutility:crafter1',
          pattern: ['IEI', 'CMC', 'RSR'],
          key: {
            R:'extendedcrafting:redstone_ingot',
            S:'pneumaticcraft:smart_chest',
            C:'create:mechanical_crafter',
            M:'rftoolsbase:machine_frame',
            E:'kubejs:extreme_circuit_board',
            I:'#forge:ingots/compressed_iron'
          },
          id: 'rftoolsutility:crafter1'
      },
      {
          output:'rftoolsutility:crafter2',
          pattern: ['IEI', 'CMC', 'RDR'],
          key: {
            R:'extendedcrafting:redstone_ingot',
            D:'rftoolsbase:infused_diamond',
            C:'create:mechanical_crafter',
            M:'rftoolsutility:crafter1',
            E:'kubejs:extreme_circuit_board',
            I:'#forge:ingots/compressed_iron'
          },
          id: 'rftoolsutility:crafter2'
      },
      {
          output:'rftoolsutility:crafter3',
          pattern: ['IEI', 'CMC', 'RDR'],
          key: {
            R:'extendedcrafting:redstone_ingot',
            D:'emendatusenigmatica:enderium_ingot',
            C:'create:mechanical_crafter',
            M:'rftoolsutility:crafter2',
            E:'kubejs:extreme_circuit_board',
            I:'#forge:ingots/compressed_iron'
          },
          id: 'rftoolsutility:crafter3'
      },
      {
          output:'rftoolsbuilder:shape_card_quarry',
          pattern: ['RFR', 'DSD', 'RNR'],
          key: {
            R:'extendedcrafting:redstone_ingot',
            F:'thermal:flux_drill',
            D:'pneumaticcraft:drill_bit_compressed_iron',
            S:'rftoolsbuilder:shape_card_def',
            N:'pneumaticcraft:drill_bit_netherite'
          },
          id: 'rftoolsbuilder:shape_card_quarry'
      },
      {
          output:'rftoolsbuilder:shape_card_pump',
          pattern: ['RFR', 'MSM', 'RPR'],
          key: {
            R:'extendedcrafting:redstone_ingot',
            F:Item.of('thermal:fluid_cell').ignoreNBT(),
            M:'create:mechanical_pump',
            S:'rftoolsbuilder:shape_card_def',
            P:'immersiveengineering:fluid_pump'
          },
          id: 'rftoolsbuilder:shape_card_pump'
      },
      {
          output:Item.of('rftoolsutility:charged_porter', '{Damage:0}'),
          pattern: ['PMP', 'ITI', 'PEP'],
          key: {
            P:'wormhole:portal_frame',
            M:'rftoolsutility:matter_transmitter',
            I:'rftoolsbase:infused_enderpearl',
            T:'rftoolsbase:tablet',
            E:Item.of('thermal:energy_cell').ignoreNBT()
          },
          id: 'rftoolsutility:charged_porter'
      },
      {
          output:Item.of('rftoolsutility:advanced_charged_porter', '{Damage:0}'),
          pattern: ['IDI', 'DCD', 'IEI'],
          key: {
            I:'rftoolsbase:infused_enderpearl',
            D:'rftoolsbase:infused_diamond',
            C:Item.of('rftoolsutility:charged_porter').weakNBT(),
            E:Item.of('thermal:energy_cell').ignoreNBT()
          },
          id: 'rftoolsutility:advanced_charged_porter'
      },
      //CPU core 500
      {
          output:'rftoolscontrol:cpu_core_500',
          pattern: ['RLR', 'UCU', 'RLR'],
          key: {
            L:'emendatusenigmatica:lumium_nugget',
            R:'extendedcrafting:redstone_ingot',
            U:'pneumaticcraft:unassembled_pcb',
            C:'rftoolscontrol:card_base'
          },
          id: 'rftoolscontrol:cpu_core_500'
      },
      //CPU core S1000
      {
        output:'rftoolscontrol:cpu_core_1000',
        pattern: ['RDR','ECE','RDR'],
        key: {
          R:'extendedcrafting:redstone_ingot',
          D:'botania:mana_diamond',
          E:'pneumaticcraft:printed_circuit_board',
          C:'rftoolscontrol:cpu_core_500'
        },
        id:'rftoolscontrol:cpu_core_1000'
      },
      //CPU core EX2000
      {
        output:'rftoolscontrol:cpu_core_2000',
        pattern: ['RUR','ACA','RUR'],
        key: {
          R:'extendedcrafting:redstone_ingot',
          U:'kubejs:uranium_capacitor',
          C:'rftoolscontrol:cpu_core_1000',
          A:'kubejs:extreme_circuit_board'
        },
        id:'rftoolscontrol:cpu_core_2000'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
