onEvent('recipes', (event) => {
    /*
        ,
        {
            output: ,
            pattern: ['', '', ''],
            key: {
                A:
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
      },
      {
          output: 'industrialforegoing:block_placer',
          pattern: ['AEA', 'CDC', 'ABA'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'thermal:rf_coil',
              C: 'engineersdecor:factory_placer',
              D: 'industrialforegoing:machine_frame_pity',
              E: 'create:deployer'
          },
          id: 'industrialforegoing:block_placer'
      },
      {
          output: 'industrialforegoing:animal_feeder',
          pattern: ['ADA', 'BEB', 'CFC'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:meat_feeder',
              C: 'enderioalloys:item_material_gear_darksteel',
              D: 'minecraft:enchanted_golden_apple',
              E: 'industrialforegoing:machine_frame_pity',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:animal_feeder'
      },
      {
          output: 'industrialforegoing:pity_black_hole_unit',
          pattern: ['AAA', 'CDC', 'BEB'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:common_black_hole_unit',
              C: 'rftoolsbase:infused_enderpearl',
              D: 'botania:mana_pearl',
              E: 'industrialforegoing:machine_frame_pity'
          },
          id: 'industrialforegoing:pity_black_hole_unit'
      },
      {
          output: 'industrialforegoing:pity_black_hole_tank',
          pattern: ['AAA', 'CDC', 'BEB'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:common_black_hole_tank',
              C: 'rftoolsbase:infused_enderpearl',
              D: 'botania:mana_pearl',
              E: 'industrialforegoing:machine_frame_pity'
          },
          id: 'industrialforegoing:pity_black_hole_tank'
      },
      {
          output: 'industrialforegoing:resourceful_furnace',
          pattern: ['ACA', 'EBD', 'AFA'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: 'engineersdecor:small_solar_panel',
              D: 'engineersdecor:small_electrical_furnace',
              E: 'pneumaticcraft:small_tank',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:resourceful_furnace'
      },
      {
          output: 'industrialforegoing:sludge_refiner',
          pattern: ['ADA', 'BEB', 'CFC'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'pneumaticcraft:refinery',
              C: 'enderioalloys:item_material_gear_iron',
              D: '#forge:plates/bronze',
              E: 'industrialforegoing:machine_frame_pity',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:sludge_refiner'
      },
      {
          output: 'industrialforegoing:water_condensator',
          pattern: ['ADA', 'BEB', 'CFC'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'create:mechanical_pump',
              C: 'create:fluid_tank',
              D: 'elementalcraft:watercrystal',
              E: 'industrialforegoing:machine_frame_pity',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:water_condensator'
      },
      {
          output: 'industrialforegoing:spores_recreator',
          pattern: ['ACA', 'DBD', 'AEA'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: 'enderioalloys:item_material_gear_darksteel',
              D: '#forge:mushrooms',
              E: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:spores_recreator'
      },
      {
          output: 'industrialforegoing:sewage_composter',
          pattern: ['AFA', 'CBC', 'DED'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: 'enderioalloys:item_material_gear_darksteel',
              D: 'environmental:mud_bricks',
              E: 'thermal:rf_coil',
              F: 'minecraft:composter'
          },
          id: 'industrialforegoing:sewage_composter'
      },
      {
          output: 'industrialforegoing:common_black_hole_unit',
          pattern: ['AAA', 'CBC', 'DED'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'botania:mana_pearl',
              C: 'minecraft:ender_pearl',
              D: 'pneumaticcraft:reinforced_chest',
              E: 'industrialforegoing:machine_frame_pity'
          },
          id: 'industrialforegoing:common_black_hole_unit'
      },
      {
          output: 'industrialforegoing:common_black_hole_tank',
          pattern: ['AAA', 'CBC', 'DED'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'botania:mana_pearl',
              C: 'minecraft:ender_pearl',
              D: 'create:fluid_tank',
              E: 'industrialforegoing:machine_frame_pity'
          },
          id: 'industrialforegoing:common_black_hole_tank'
      },
      {
          output: 'industrialforegoing:block_breaker',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: 'emendatusenigmatica:lumium_gear',
              D: 'pneumaticcraft:drill_bit_compressed_iron',
              E: 'enderioalloys:item_material_gear_darksteel',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:block_breaker'
      },
      {
          output: 'industrialforegoing:plant_gatherer',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: Item.of('aiotbotania:terra_hoe', '{Damage:0}').weakNBT(),
              D: 'thermal:flux_saw',
              E: 'enderioalloys:item_material_gear_darksteel',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:plant_gatherer'
      },
      {
          output: 'industrialforegoing:animal_rancher',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: 'create:fluid_tank',
              D: 'create:deployer',
              E: 'enderioalloys:item_material_gear_iron',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:animal_rancher'
      },
      {
          output: 'industrialforegoing:bioreactor',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: Item.of('occultism:chalk_purple').weakNBT(),
              D: 'pneumaticcraft:glycerol',
              E: 'kubejs:extreme_circuit_board',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:bioreactor'
      },
      {
          output: 'industrialforegoing:biofuel_generator',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: 'immersiveengineering:blastfurnace_preheater',
              D: 'create:mechanical_piston',
              E: 'enderioalloys:item_material_gear_energized',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:biofuel_generator'
      },
      {
          output: 'industrialforegoing:plant_sower',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_pity',
              C: '#botanypots:botany_pots/hopper',
              D: 'create:weighted_ejector',
              E: 'enderioalloys:item_material_gear_vibrant',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:plant_sower'
      },
      {
          output: 'industrialforegoing:simple_black_hole_tank',
          pattern: ['AAA', 'CEC', 'DBD'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'minecraft:ender_eye',
              D: 'create:fluid_tank',
              E: 'industrialforegoing:pity_black_hole_tank'
          },
          id: 'industrialforegoing:simple_black_hole_tank'
      },
      {
          output: 'industrialforegoing:mob_detector',
          pattern: ['ACA', 'EBE', 'FDF'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'minecraft:comparator',
              D: 'thermal:redstone_servo',
              E: 'kubejs:extreme_circuit_board',
              F: 'botania:ender_eye_block'
          },
          id: 'industrialforegoing:mob_detector'
      },
      {
          output: 'industrialforegoing:fermentation_station',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'enderioalloys:item_material_skull_zombie_controller',
              D: 'kubejs:extreme_circuit_board',
              E: 'enderioalloys:item_material_gear_vibrant',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:fermentation_station'
      },
      {
          output: 'industrialforegoing:simple_black_hole_unit',
          pattern: ['AAA', 'DCD', 'EBE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'industrialforegoing:pity_black_hole_unit',
              D: 'minecraft:ender_eye',
              E: 'pneumaticcraft:reinforced_chest'
          },
          id: 'industrialforegoing:simple_black_hole_unit'
      },
      {
          output: 'industrialforegoing:laser_drill',
          pattern: ['ADA', 'CBC', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'kubejs:advanced_extreme_circuit_board',
              D: 'pneumaticcraft:drill_bit_netherite',
              E: 'enderioalloys:item_material_gear_vibrant',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:laser_drill'
      },
      {
          output: 'industrialforegoing:marine_fisher',
          pattern: ['ADA', 'CBC', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'pneumaticcraft:reinforced_chest',
              D: 'apotheosis:fishing_rod_book',
              E: 'enderioalloys:item_material_gear_energized',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:marine_fisher'
      },
      {
          output: 'industrialforegoing:plant_fertilizer',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: 'pneumaticcraft:reinforced_chest',
              D: 'industrialforegoing:fertilizer',
              E: 'enderioalloys:item_material_gear_energized',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:plant_fertilizer'
      },
      {
          output: 'industrialforegoing:hydroponic_bed',
          pattern: ['AEA', 'DBC', 'FGF'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_simple',
              C: '#botanypots:botany_pots/simple',
              D: 'industrialforegoing:common_black_hole_tank',
              E: 'industrialforegoing:fertilizer',
              F: 'enderioalloys:item_material_gear_energized',
              G: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:hydroponic_bed'
      },
      {
          output: 'industrialforegoing:enchantment_extractor',
          pattern: ['ACA', 'EBE', 'DFD'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'create:mechanical_pump',
              D: '#forge:gears/lumium',
              E: 'botania:mana_pylon',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:enchantment_extractor'
      },
      {
          output: 'industrialforegoing:advanced_black_hole_tank',
          pattern: ['AAA', 'ECE', 'DBD'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'industrialforegoing:simple_black_hole_tank',
              D: 'create:fluid_tank',
              E: 'minecraft:ender_eye'
          },
          id: 'industrialforegoing:advanced_black_hole_tank'
      },
      {
          output: 'industrialforegoing:stasis_chamber',
          pattern: ['ACA', 'DBE', 'FGF'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'enderioalloys:item_material_skull_ender_resonator',
              D: 'rftoolsutility:noteleport_module',
              E: 'rftoolsutility:slowness_module',
              F: 'enderioalloys:item_material_gear_vibrant',
              G: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:stasis_chamber'
      },
      {
          output: 'industrialforegoing:material_stonework_factory',
          pattern: ['ACA', 'EBD', 'FGF'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'rftoolsutility:crafter1',
              D: 'industrialforegoing:resourceful_furnace',
              E: 'pneumaticcraft:drill_bit_diamond',
              F: 'enderioalloys:item_material_gear_energized',
              G: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:material_stonework_factory'
      },
      {
          output: 'industrialforegoing:fluid_laser_base',
          pattern: ['AFA', 'CBC', 'DED'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'thermal:enderium_glass',
              D: 'enderioalloys:item_material_skull_zombie_controller',
              E: 'pneumaticcraft:large_tank',
              F: 'enderioalloys:item_material_gear_vibrant'
          },
          id: 'industrialforegoing:fluid_laser_base'
      },
      {
          output: 'industrialforegoing:potion_brewer',
          pattern: ['ACA', 'DBE', 'FGF'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'botania:brewery',
              D: Item.of('thermal:fluid_cell').ignoreNBT(),
              E: 'pneumaticcraft:reinforced_chest',
              F: '#forge:gears/lumium',
              G: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:potion_brewer'
      },
      {
          output: 'industrialforegoing:infinity_charger',
          pattern: ['AAA', 'DCD', 'EBE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'rftoolspower:cell3',
              D: 'refinedpipes:ultimate_energy_pipe',
              E: 'enderioalloys:item_material_gear_vibrant'
          },
          id: 'industrialforegoing:infinity_charger'
      },
      {
          output: 'industrialforegoing:fluid_sieving_machine',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: '#forge:ingots/pink_slime',
              D: 'create:fluid_tank',
              E: 'enderioalloys:item_material_gear_darksteel',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:fluid_sieving_machine'
      },
      {
          output: 'industrialforegoing:supreme_black_hole_tank',
          pattern: ['AAA', 'CEC', 'DBD'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'minecraft:ender_eye',
              D: 'create:fluid_tank',
              E: 'industrialforegoing:advanced_black_hole_tank'
          },
          id: 'industrialforegoing:supreme_black_hole_tank'
      },
      {
          output: 'industrialforegoing:black_hole_controller',
          pattern: ['ACA', 'EDE', 'ABA'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: '#forge:gears/enderium',
              D: 'minecraft:ender_chest',
              E: 'rftoolsbase:infused_enderpearl'
          },
          id: 'industrialforegoing:black_hole_controller'
      },
      {
          output: 'industrialforegoing:supreme_black_hole_unit',
          pattern: ['AAA', 'CEC', 'DBD'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'minecraft:ender_eye',
              D: 'pneumaticcraft:reinforced_chest',
              E: 'industrialforegoing:advanced_black_hole_unit'
          },
          id: 'industrialforegoing:supreme_black_hole_unit'
      },
      {
          output: 'industrialforegoing:wither_builder',
          pattern: ['ACA', 'DBD', 'FEF'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: Item.of('rftoolsutility:syringe', '{mobName:"minecraft:wither",mobId:"minecraft:wither",level:10}'),
              D: 'ars_elemental:necrotic_focus',
              E: 'rftoolsutility:spawner',
              F: 'rftoolsutility:matter_beamer'
          },
          id: 'industrialforegoing:wither_builder'
      },
      {
          output: 'industrialforegoing:advanced_black_hole_unit',
          pattern: ['AAA', 'CDC', 'EBE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'minecraft:ender_eye',
              D: 'industrialforegoing:simple_black_hole_unit',
              E: 'pneumaticcraft:reinforced_chest'
          },
          id: 'industrialforegoing:advanced_black_hole_unit'
      },
      {
          output: 'industrialforegoing:washing_factory',
          pattern: ['ABA', 'DCD', 'EFE'],
          key: {
              A: '#forge:ingots/pink_slime',
              B: 'industrialforegoing:meat_feeder',
              C: 'industrialforegoing:machine_frame_advanced',
              D: 'create:fluid_tank',
              E: 'emendatusenigmatica:enderium_gear',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:washing_factory'
      },
      {
          output: 'industrialforegoing:ore_laser_base',
          pattern: ['AFA', 'CBC', 'EDE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'thermal:enderium_glass',
              D: 'pneumaticcraft:smart_chest',
              E: 'enderioalloys:item_material_skull_zombie_controller',
              F: 'enderioalloys:item_material_gear_vibrant'
          },
          id: 'industrialforegoing:ore_laser_base'
      },
      {
          output: 'industrialforegoing:enchantment_factory',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'botania:rosa_arcana',
              D: 'botania:mana_pylon',
              E: 'botania:enchanted_soil',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:enchantment_factory'
      },
      {
          output: 'industrialforegoing:enchantment_applicator',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'industrialforegoing:pity_black_hole_tank',
              D: 'enderioalloys:item_material_skull_skeletal_contractor',
              E: 'enderioalloys:item_material_gear_vibrant',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:enchantment_applicator'
      },
      {
          output: 'industrialforegoing:enchantment_sorter',
          pattern: ['ACA', 'DBD', 'EFE'],
          key: {
              A: 'industrialforegoing:plastic',
              B: 'industrialforegoing:machine_frame_advanced',
              C: 'kubejs:extreme_circuit_board',
              D: '#forge:storage_blocks/iesnium',
              E: 'enderioalloys:item_material_gear_energized',
              F: 'thermal:rf_coil'
          },
          id: 'industrialforegoing:enchantment_sorter'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
