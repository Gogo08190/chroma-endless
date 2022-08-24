onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'dankstorage:dock',
      pattern: ['ABA', 'B B', 'ABA'],
      key: {
        A: '#forge:sheetmetals/steel',
        B: '#chroma:stonecuttables/black_concrete'
      },
      id: 'dankstorage:dock'
    },
    {
      output: 'dankstorage:dank_1',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: '#forge:gems/coal_coke',
        B: '#chroma:obsidian_barrel'
      },
      id: 'dankstorage:1'
    },
    {
      output: 'dankstorage:dank_2',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'thermal:hazmat_fabric',
        B: 'extendedcrafting:redstone_ingot_block',
        C: Item.of('dankstorage:dank_1').ignoreNBT()
      },
      id: 'dankstorage:2'
    },
    {
      output: 'dankstorage:dank_3',
      pattern: ['AAA', 'BCB', 'AAA'],
      key: {
        A: '#forge:storage_blocks/electrum',
        B: 'thermal:upgrade_augment_2',
        C: Item.of('dankstorage:dank_2').ignoreNBT()
      },
      id: 'dankstorage:3'
    },
    {
      output: 'dankstorage:dank_4',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'botanicalmachinery:mana_emerald_block',
        B: Item.of('dankstorage:dank_3').ignoreNBT()
      },
      id: 'dankstorage:4'
    },
    {
      output: 'dankstorage:dank_5',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:storage_blocks/drenched_iron',
        B: '#forge:ingots/fireite',
        C: '#forge:storage_blocks/swift_alloy',
        D: Item.of('dankstorage:dank_4').ignoreNBT()
      },
      id: 'dankstorage:5'
    },
    {
      output: 'dankstorage:dank_6',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'bigreactors:reinforced_reactorcasing',
        B: 'bigreactors:fluidizercasing',
        C: Item.of('dankstorage:dank_5').ignoreNBT()
      },
      id: 'dankstorage:6'
    },
    {
      output: 'dankstorage:dank_7',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'extendedcrafting:ender_star',
        B: Item.of('dankstorage:dank_6').ignoreNBT()
      },
      id: 'dankstorage:7'
    },
    {
      output: 'dankstorage:1_to_2',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'thermal:hazmat_fabric',
        B: 'extendedcrafting:redstone_ingot_block',
        C: '#forge:rods/steel'
      },
      id: 'dankstorage:1_to_2'
    },
    {
      output: 'dankstorage:2_to_3',
      pattern: ['AAA', 'BCB', 'AAA'],
      key: {
        A: '#forge:storage_blocks/electrum',
        B: 'thermal:upgrade_augment_2',
        C: '#forge:rods/constantan'
      },
      id: 'dankstorage:2_to_3'
    },
    {
      output: 'dankstorage:3_to_4',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'botanicalmachinery:mana_emerald_block',
        B: '#forge:rods/lumium'
      },
      id: 'dankstorage:3_to_4'
    },
    {
      output: 'dankstorage:4_to_5',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:storage_blocks/drenched_iron',
        B: '#forge:ingots/fireite',
        C: '#forge:storage_blocks/swift_alloy',
        D: '#forge:rods/emerald'
      },
      id: 'dankstorage:4_to_5'
    },
    {
      output: 'dankstorage:5_to_6',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'bigreactors:reinforced_reactorcasing',
        B: 'bigreactors:fluidizercasing',
        C: '#forge:rods/diamond'
      },
      id: 'dankstorage:5_to_6'
    },
    {
      output: 'dankstorage:6_to_7',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'extendedcrafting:ender_star',
        B: '#forge:rods/enderium'
      },
      id: 'dankstorage:6_to_7'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
