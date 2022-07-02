onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'mininggadgets:mininggadget_simple',
      pattern: ['ABC', 'ADE', 'ABB'],
      key: {
        A: '#forge:gems/mana_diamond',
        B: '#forge:ingots/manasteel',
        C: '#forge:ingots/brass',
        D: 'mininggadgets:upgrade_empty',
        E: 'thermal:earth_charge'
      },
      id: 'mininggadgets:mininggadget_simple'
    },
    {
      output: 'mininggadgets:mininggadget_fancy',
      pattern: ['ABA', 'CDC', 'EFE'],
      key: {
        A: 'thermal:earth_charge',
        B: '#forge:ingots/brass',
        C: 'rftoolsbase:infused_diamond',
        D: 'mininggadgets:mininggadget_simple',
        E: '#forge:ingots/elementium',
        F: 'thermal:flux_capacitor'
      },
      id: 'mininggadgets:mininggadget_fancy'
    },
    {
      output: 'mininggadgets:mininggadget',
      pattern: ['ABA', 'CDC', 'EFE'],
      key: {
        A: '#forge:ingots/elementium',
        B: 'thermal:earth_charge',
        C: '#forge:gems/dragonstone',
        D: 'mininggadgets:mininggadget_fancy',
        E: '#forge:ingots/brass',
        F: 'fluxnetworks:flux_core'
      },
      id: 'mininggadgets:mininggadget'
    },
    {
      output: 'mininggadgets:modificationtable',
      pattern: ['AAA', 'BCB', 'ADA'],
      key: {
        A: '#forge:ingots/invar',
        B: 'extendedcrafting:redstone_ingot',
        C: 'mininggadgets:upgrade_empty',
        D: 'thermal:redstone_servo'
      },
      id: 'mininggadgets:modificationtable'
    },
    {
      output: 'mininggadgets:upgrade_empty',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: 'extendedcrafting:redstone_ingot',
        B: '#forge:plates/lapis',
        C: '#forge:plates/diamond',
        D: 'thermal:obsidian_glass'
      },
      id: 'mininggadgets:upgrade_empty'
    },
    {
      output: 'mininggadgets:upgrade_silk',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'tconstruct:silky_cloth',
        B: '#forge:ingots/brass',
        C: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_silk'
    },
    {
      output: 'mininggadgets:upgrade_void_junk',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'trashcans:item_trash_can',
        B: '#forge:ingots/andesite_alloy',
        C: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_void_junk'
    },
    {
      output: 'mininggadgets:upgrade_magnet',
      pattern: ['ABA', 'CDE', 'ABA'],
      key: {
        A: '#forge:ingots/invar',
        B: '#forge:plates/electrum',
        C: 'thermal:rf_coil',
        D: 'mininggadgets:upgrade_empty',
        E: 'thermal:flux_magnet'
      },
      id: 'mininggadgets:upgrade_magnet'
    },
    {
      output: 'mininggadgets:upgrade_three_by_three',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: 'immersiveengineering:insulating_glass',
        B: 'thermal:drill_head',
        C: 'miniutilities:laser_port',
        D: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_three_by_three'
    },
    {
      output: 'mininggadgets:upgrade_light_placer',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/lumium',
        B: '#forge:gears/lumium',
        C: 'thermal:lumium_glass',
        D: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_light_placer'
    },
    {
      output: 'mininggadgets:upgrade_freezing',
      pattern: ['ABC', 'DED', 'CBA'],
      key: {
        A: 'thermal:diving_fabric',
        B: 'cookingforblockheads:preservation_chamber',
        C: 'thermal:hazmat_fabric',
        D: 'thermal:ice_charge',
        E: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_freezing'
    },
    {
      output: 'mininggadgets:upgrade_fortune_1',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'botanicalmachinery:mana_emerald_block',
        B: 'create:polished_rose_quartz',
        C: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_fortune_1'
    },
    {
      output: 'mininggadgets:upgrade_fortune_2',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: '#forge:storage_blocks/gold',
        B: 'create:polished_rose_quartz',
        C: 'mininggadgets:upgrade_fortune_1'
      },
      id: 'mininggadgets:upgrade_fortune_2'
    },
    {
      output: 'mininggadgets:upgrade_fortune_3',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'botania:mana_diamond_block',
        B: 'create:polished_rose_quartz',
        C: 'mininggadgets:upgrade_fortune_2'
      },
      id: 'mininggadgets:upgrade_fortune_3'
    },
    {
      output: 'mininggadgets:upgrade_range_1',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/lapis',
        B: 'thermal:signalum_glass',
        C: '#forge:plates/diamond',
        D: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_range_1'
    },
    {
      output: 'mininggadgets:upgrade_range_2',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/lapis',
        B: 'thermal:lumium_glass',
        C: '#forge:plates/emerald',
        D: 'mininggadgets:upgrade_range_1'
      },
      id: 'mininggadgets:upgrade_range_2'
    },
    {
      output: 'mininggadgets:upgrade_range_3',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/lapis',
        B: 'thermal:enderium_glass',
        C: '#forge:plates/emerald',
        D: 'mininggadgets:upgrade_range_2'
      },
      id: 'mininggadgets:upgrade_range_3'
    },
    {
      output: 'mininggadgets:upgrade_battery_1',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: 'immersiveengineering:insulating_glass',
        B: 'immersiveengineering:capacitor_lv',
        C: 'thermal:rf_coil',
        D: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_battery_1'
    },
    {
      output: 'mininggadgets:upgrade_battery_2',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: 'immersiveengineering:insulating_glass',
        B: 'immersiveengineering:capacitor_mv',
        C: 'thermal:rf_coil',
        D: 'mininggadgets:upgrade_battery_1'
      },
      id: 'mininggadgets:upgrade_battery_2'
    },
    {
      output: 'mininggadgets:upgrade_battery_3',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: 'immersiveengineering:insulating_glass',
        B: 'immersiveengineering:capacitor_hv',
        C: 'thermal:rf_coil',
        D: 'mininggadgets:upgrade_battery_2'
      },
      id: 'mininggadgets:upgrade_battery_3'
    },
    {
      output: 'mininggadgets:upgrade_efficiency_1',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:ingots/steel',
        B: 'thermal:redstone_servo',
        C: 'thermal:machine_efficiency_augment',
        D: 'mininggadgets:upgrade_empty'
      },
      id: 'mininggadgets:upgrade_efficiency_1'
    },
    {
      output: 'mininggadgets:upgrade_efficiency_2',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:ingots/steel',
        B: 'thermal:redstone_servo',
        C: 'thermal:dynamo_output_augment',
        D: 'mininggadgets:upgrade_efficiency_1'
      },
      id: 'mininggadgets:upgrade_efficiency_2'
    },
    {
      output: 'mininggadgets:upgrade_efficiency_3',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:ingots/steel',
        B: 'thermal:redstone_servo',
        C: 'thermal:machine_efficiency_augment',
        D: 'mininggadgets:upgrade_efficiency_2'
      },
      id: 'mininggadgets:upgrade_efficiency_3'
    },
    {
      output: 'mininggadgets:upgrade_efficiency_4',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:ingots/steel',
        B: 'thermal:redstone_servo',
        C: 'thermal:machine_efficiency_augment',
        D: 'mininggadgets:upgrade_efficiency_3'
      },
      id: 'mininggadgets:upgrade_efficiency_4'
    },
    {
      output: 'mininggadgets:upgrade_efficiency_5',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:ingots/steel',
        B: 'thermal:redstone_servo',
        C: 'thermal:machine_efficiency_augment',
        D: 'mininggadgets:upgrade_efficiency_4'
      },
      id: 'mininggadgets:upgrade_efficiency_5'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
