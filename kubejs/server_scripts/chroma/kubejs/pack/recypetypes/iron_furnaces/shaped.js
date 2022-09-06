onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/iron_furnace/shaped/';

    const recipes = [
      {
          output: 'ironfurnaces:copper_furnace',
          pattern: ['CCC', 'CFC', 'CCC'],
          key: {
              C: 'create:copper_casing',
              F: 'minecraft:furnace'
          },
          id: 'ironfurnaces:copper_furnace'
      },
      {
          output: 'ironfurnaces:iron_furnace',
          pattern: ['SSS', 'GFG', 'SSS'],
          key: {
              S: '#forge:ingots/steel',
              F: 'ironfurnaces:copper_furnace',
              G: '#forge:glass'
          },
          id: 'ironfurnaces:iron_furnace'
      },
      {
          output: 'ironfurnaces:silver_furnace',
          pattern: ['GSG', 'SFS', 'GSG'],
          key: {
              S: 'occultism:spirit_attuned_gem',
              F: 'ironfurnaces:iron_furnace',
              G: '#forge:glass'
          },
          id: 'ironfurnaces:silver_furnace'
      },
      {
          output: 'ironfurnaces:gold_furnace',
          pattern: ['GGG', 'GFG', 'ESE'],
          key: {
              S: '#forge:storage_blocks/enderium',
              F: 'ironfurnaces:silver_furnace',
              G: '#forge:glass',
              E: 'thermal:enderium_glass'
          },
          id: 'ironfurnaces:gold_furnace'
      },
      {
          output: 'ironfurnaces:diamond_furnace',
          pattern: ['SSS', 'GFG', 'SSS'],
          key: {
              S: '#forge:gems/mana_diamond',
              F: 'ironfurnaces:gold_furnace',
              G: 'botania:mana_glass'
          },
          id: 'ironfurnaces:diamond_furnace'
      },
      {
          output: 'ironfurnaces:emerald_furnace',
          pattern: ['SSS', 'SFS', 'SSS'],
          key: {
              S: '#forge:ingots/fireite',
              F: 'ironfurnaces:diamond_furnace'
          },
          id: 'ironfurnaces:emerald_furnace'
      },
      {
          output: 'ironfurnaces:obsidian_furnace',
          pattern: ['SBS', 'BFB', 'SBS'],
          key: {
              S: '#forge:ingots/utherium',
              F: 'ironfurnaces:emerald_furnace',
              B: '#forge:rods/blaze'
          },
          id: 'ironfurnaces:obsidian_furnace'
      },
      {
          output: 'ironfurnaces:netherite_furnace',
          pattern: ['SCS', 'LFL', 'SGS'],
          key: {
              S: '#forge:ingots/compressed_iron',
              C: 'pneumaticcraft:transistor',
              F: 'ironfurnaces:obsidian_furnace',
              L: 'pneumaticcraft:logistics_core',
              G: '#forge:gears/compressed_iron'
          },
          id: 'ironfurnaces:netherite_furnace'
      },
      {
          output: 'ironfurnaces:heater',
          pattern: ['SES', 'SRS', 'SFS'],
          key: {
              S: '#forge:ingots/steel',
              E: 'immersiveengineering:furnace_heater',
              R: Item.of('thermal:energy_cell').ignoreNBT(),
              F: 'thermal:rf_coil'
          },
          id: 'ironfurnaces:heater'
      },
      {
          output: 'ironfurnaces:item_heater',
          pattern: ['SRS', 'RFR', 'SRS'],
          key: {
              S: '#forge:ingots/steel',
              F: 'thermal:rf_coil',
              R: 'thermal:redstone_servo'
          },
          id: 'ironfurnaces:item_heater'
      },
      {
          output: 'ironfurnaces:item_copy',
          pattern: [' A ', 'ARA', ' A '],
          key: {
              A: '#forge:ingots/andesite_alloy',
              R: 'thermal:redstone_servo'
          },
          id: 'ironfurnaces:item_copy'
      },
      {
          output: 'ironfurnaces:augment_blasting',
          pattern: ['ARA', 'PFP', 'ARA'],
          key: {
              A: '#forge:ingots/andesite_alloy',
              R: 'extendedcrafting:redstone_ingot',
              P: '#forge:plates/iron',
              F: 'minecraft:blast_furnace'
          },
          id: 'ironfurnaces:augment_blasting'
      },
      {
          output: 'ironfurnaces:augment_speed',
          pattern: ['ARA', 'PFP', 'ARA'],
          key: {
              A: '#forge:ingots/andesite_alloy',
              R: 'extendedcrafting:redstone_ingot',
              P: '#forge:plates/iron',
              F: 'supplementaries:hourglass'
          },
          id: 'ironfurnaces:augment_speed'
      },
      {
          output: 'ironfurnaces:augment_fuel',
          pattern: ['ARA', 'PFP', 'ARA'],
          key: {
              A: '#forge:ingots/andesite_alloy',
              R: 'extendedcrafting:redstone_ingot',
              P: '#forge:plates/iron',
              F: '#forge:gems/coal_coke'
          },
          id: 'ironfurnaces:augment_fuel'
      },
      {
          output: 'ironfurnaces:augment_smoking',
          pattern: ['ARA', 'PFP', 'ARA'],
          key: {
              A: '#forge:ingots/andesite_alloy',
              R: 'extendedcrafting:redstone_ingot',
              P: '#forge:plates/iron',
              F: 'minecraft:smoker'
          },
          id: 'ironfurnaces:augment_smoking'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
