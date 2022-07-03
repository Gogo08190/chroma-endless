onEvent('recipes', (event) => {
  const recipes = [
    {
      output: 'tanknull:dock',
      pattern: ['ABA', 'B B', 'ABA'],
      key: {
        A: '#forge:sheetmetals/iron',
        B: '#chroma:stonecuttables/white_concrete'
      },
      id: 'tanknull:dock'
    },
    {
      output: 'tanknull:tank_1',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: '#forge:gems/coal_coke',
        B: 'minecraft:bucket',
        C: 'create:fluid_tank'
      },
      id: 'tanknull:1'
    },
    {
      output: 'tanknull:tank_2',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'thermal:hazmat_fabric',
        B: 'extendedcrafting:redstone_ingot_block',
        C: Item.of('tanknull:tank_1').ignoreNBT()
      },
      id: 'tanknull:2'
    },
    {
      output: 'tanknull:tank_3',
      pattern: ['AAA', 'BCB', 'AAA'],
      key: {
        A: '#forge:storage_blocks/electrum',
        B: 'thermal:upgrade_augment_2',
        C: Item.of('tanknull:tank_2').ignoreNBT()
      },
      id: 'tanknull:3'
    },
    {
      output: 'tanknull:tank_4',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'botanicalmachinery:mana_emerald_block',
        B: Item.of('tanknull:tank_3').ignoreNBT()
      },
      id: 'tanknull:4'
    },
    {
      output: 'tanknull:tank_5',
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:storage_blocks/drenched_iron',
        B: '#forge:ingots/fireite',
        C: '#forge:storage_blocks/swift_alloy',
        D: Item.of('tanknull:tank_4').ignoreNBT()
      },
      id: 'tanknull:5'
    },
    {
      output: 'tanknull:tank_6',
      pattern: ['ABA', 'BCB', 'ABA'],
      key: {
        A: 'bigreactors:reinforced_reactorcasing',
        B: 'bigreactors:fluidizercasing',
        C: Item.of('tanknull:tank_5').ignoreNBT()
      },
      id: 'tanknull:6'
    },
    {
      output: 'tanknull:tank_7',
      pattern: ['AAA', 'ABA', 'AAA'],
      key: {
        A: 'extendedcrafting:ender_star',
        B: Item.of('tanknull:tank_6').ignoreNBT()
      },
      id: 'tanknull:7'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
