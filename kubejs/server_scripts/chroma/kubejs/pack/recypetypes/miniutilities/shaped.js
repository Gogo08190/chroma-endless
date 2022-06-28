onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'miniutilities:stone_drum',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: 'minecraft:smooth_stone',
        B: 'minecraft:smooth_stone_slab',
        C: '#forge:ingots/iron',
        D: 'create:fluid_tank'
      },
      id: 'miniutilities:stone_drum'
    },
    {
      output: 'miniutilities:iron_drum',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: '#forge:sheetmetals/iron',
        B: '#forge:plates/iron',
        C: '#forge:ingots/iron',
        D: 'miniutilities:stone_drum'
      },
      id: 'miniutilities:iron_drum'
    },
    {
      output: 'miniutilities:reinforced_large_drum',
      pattern: ['ABC', 'DED', 'ABA'],
      key: {
        A: '#forge:sheetmetals/iron',
        B: '#forge:plates/gold',
        C: '#forge:ingots/iron',
        D: 'botania:mana_diamond_block',
        E: 'miniutilities:iron_drum'
      },
      id: 'miniutilities:reinforced_large_drum'
    },
    {
      output: 'miniutilities:netherite_reinforced_drum',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: '#forge:storage_blocks/netherite',
        B: '#forge:plates/iron',
        C: '#forge:ingots/iron',
        D: 'miniutilities:reinforced_large_drum'
      },
      id: 'miniutilities:netherite_reinforced_drum'
    },
    {
      output: 'miniutilities:unstable_drum',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: '#forge:storage_blocks/unstable',
        B: '#forge:plates/netherite',
        C: '#forge:ingots/iron',
        D: 'miniutilities:netherite_reinforced_drum'
      },
      id: 'miniutilities:unstable_drum'
    },
    {
      output: 'miniutilities:wooden_spikes',
      pattern: [' A ', 'ABA', 'BCB'],
      key: {
        A: Item.of('aiotbotania:livingwood_sword', '{Damage:0}').weakNBT(),
        B: 'botania:livingwood',
        C: 'supplementaries:bamboo_spikes'
      },
      id: 'miniutilities:wooden_spikes'
    },
    {
      output: 'miniutilities:iron_spikes',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: Item.of('immersiveengineering:sword_steel', '{Damage:0}').weakNBT(),
        B: 'minecraft:iron_block',
        C: 'miniutilities:wooden_spikes'
      },
      id: 'miniutilities:iron_spikes'
    },
    {
      output: 'miniutilities:gold_spikes',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: Item.of('minecraft:golden_sword', '{Damage:0}').weakNBT(),
        B: '#forge:sheetmetals/gold',
        C: 'miniutilities:iron_spikes'
      },
      id: 'miniutilities:gold_spikes'
    },
    {
      output: 'miniutilities:diamond_spikes',
      pattern: ['ABC', 'ADA', 'ABA'],
      key: {
        A: Item.of('minecraft:diamond_sword', '{Damage:0}').weakNBT(),
        B: 'botania:mana_diamond_block',
        C: 'miniutilities:gold_spikes'
      },
      id: 'miniutilities:diamond_spikes'
    },
    {
      output: 'miniutilities:mechanical_miner',
      pattern: ['ABA', 'CDC', 'ACA'],
      key: {
        A: '#forge:storage_blocks/iron',
        B: 'miniutilities:destruction_pickaxe',
        C: '#forge:sheetmetals/gold',
        D: 'extendedcrafting:redstone_ingot_block'
      },
      id: 'miniutilities:mechanical_miner'
    },
    {
      output: 'miniutilities:mechanical_placer',
      pattern: ['ABA', 'CDC', 'ACA'],
      key: {
        A: '#forge:sheetmetals/gold',
        B: 'minecraft:dispenser',
        C: 'botania:mana_diamond_block',
        D: 'extendedcrafting:redstone_ingot_block'
      },
      id: 'miniutilities:mechanical_placer'
    },
    {
      output: 'miniutilities:quantum_quarry',
      pattern: ['ABA', 'CDC', 'EFE'],
      key: {
        A: 'miniutilities:emerald_opinium_core',
        B: Item.of('mekanismtools:refined_obsidian_paxel', '{Damage:0}').weakNBT(),
        C: '#forge:storage_blocks/triple_compressed_stone',
        D: 'miniutilities:mechanical_miner',
        E: 'miniutilities:ender_pearl_block',
        F: 'extendedcrafting:redstone_ingot_block'
      },
      id: 'miniutilities:quantum_quarry'
    },
    {
      output: Item.of('miniutilities:solar_panel', 2),
      pattern: ['AAA', 'BCB', 'DED'],
      key: {
        A: 'miniutilities:ender_tile',
        B: 'tconstruct:rose_gold_block',
        C: 'pipez:energy_pipe',
        D: '#forge:storage_blocks/steel',
        E: '#chroma:stonecuttables/shroomlight'
      },
      id: 'miniutilities:solar_panel'
    },
    {
      output: Item.of('miniutilities:lunar_panel', 2),
      pattern: ['AAA', 'BCB', 'DED'],
      key: {
        A: 'miniutilities:chorus_tile',
        B: 'tconstruct:rose_gold_block',
        C: 'pipez:energy_pipe',
        D: '#forge:storage_blocks/steel',
        E: '#forge:rods/lapis'
      },
      id: 'miniutilities:lunar_panel'
    },
    {
      output: 'miniutilities:solar_panel_controller',
      pattern: ['ABA', 'CDC', 'CCC'],
      key: {
        A: 'miniutilities:netherite_opinium_core',
        B: 'miniutilities:solar_panel',
        C: '#forge:sheetmetals/iron',
        D: 'extendedcrafting:redstone_ingot_block'
      },
      id: 'miniutilities:solar_panel_controller'
    },
    {
      output: Item.of('miniutilities:chorus_tile', 8),
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'tconstruct:clear_glass_pane',
        B: 'minecraft:chorus_flower'
      },
      id: 'miniutilities:chorus_tile'
    },
    {
      output: 'miniutilities:laser_hub',
      pattern: ['ABA', 'BCB', 'DDD'],
      key: {
        A: Item.of('miniutilities:unstable_ingot', '{Damage:0}').weakNBT(),
        B: 'miniutilities:experience_opinium_core',
        C: 'minecraft:beacon',
        D: '#forge:storage_blocks/netherite'
      },
      id: 'miniutilities:laser_hub'
    },
    {
      output: 'miniutilities:laser_port',
      pattern: [' A ', 'BCB', 'AAA'],
      key: {
        A: 'extendedcrafting:redstone_ingot',
        B: 'miniutilities:diamond_opinium_core',
        C: '#forge:sheetmetals/gold'
      },
      id: 'miniutilities:laser_port'
    },
    {
      output: Item.of('miniutilities:dark_glass', 8),
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'tconstruct:black_clear_stained_glass',
        B: 'botania:black_petal'
      },
      id: 'miniutilities:dark_glass'
    },
    {
      output: Item.of('miniutilities:dark_ethereal_glass', 8),
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'miniutilities:ethereal_glass',
        B: 'botania:black_petal'
      },
      id:
    },
    {
      output: Item.of('miniutilities:dark_reverse_ethereal_glass', 8),
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'miniutilities:reverse_ethereal_glass',
        B: 'botania:black_petal'
      },
      id:
    },
    {
      output: 'miniutilities:lapis_lamp',
      pattern: [' A ', 'ABA', ' A '],
      key: {
        A: '#forge:plates/lapis',
        B: '#chroma:stonecuttables/redstone_lamp'
      },
      id:
    },
    {
      output: 'miniutilities:redstone_clock',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'occultism:otherstone',
        B: 'extendedcrafting:redstone_ingot',
        C: 'botania:cosmetic_clock_eye'
      },
      id: 'miniutilities:redstone_clock'
    },
    {
      output: 'miniutilities:angel_block',
      pattern: [' A ', 'BCB', ' D '],
      key: {
        A: '#forge:plates/gold',
        B: '#forge:feathers',
        C: '#forge:storage_blocks/compressed_obsidian',
        D: 'botania:ender_air_bottle'
      },
      id: 'miniutilities:angel_block'
    },
    {
      output: 'miniutilities:kikoku',
      pattern: ['A', 'A', 'B'],
      key: {
        A: 'miniutilities:the_final_opinium_core',
        B: Item.of('aiotbotania:livingrock_sword', '{Damage:0}').weakNBT()
      },
      id: 'miniutilities:kikoku'
    },
    {
      output: 'miniutilities:speed_upgrade',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: '#forge:sheetmetals/gold',
        B: '#forge:sheetmetals/gold',
        C: 'minecraft:sugar'
      },
      id: 'miniutilities:speed_upgrade'
    },
    {
      output: Item.of('miniutilities:unstable_ingot', '{Damage:0}').weakNBT(),
      pattern: ['A', 'B', 'C'],
      key: {
        A: '#forge:ingots/ludicrite',
        B: '#forge:rods/treated_wood',
        C: '#forge:gems/mana_diamond'
      },
      id:
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
