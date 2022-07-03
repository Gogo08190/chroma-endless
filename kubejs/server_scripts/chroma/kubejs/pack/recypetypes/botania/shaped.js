onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
      {
          output: 'botania:mana_pylon',
          pattern: [' A ', 'BCB', ' A '],
          key: {
              A:'arsarsenal:source_steel_ingot',
              B:'botania:manasteel_block',
              C:'botania:mana_diamond_block'
          },
          id: 'botania:mana_pylon'
      },

      {
          output: 'botania:mana_spreader',
          pattern: ['AAA', 'BC ', 'AAA'],
          key: {
              A:'botania:livingwood',
              B:'arsarsenal:source_steel_ingot',
              C:'#botania:petals'
          },
          id: 'botania:mana_spreader'
      },

      {
          output: 'botania:mana_pool',
          pattern: ['   ', 'ABA', 'AAA'],
          key: {
              A:'botania:livingrock',
              B:'botania:mana_tablet'
          },
          id: 'botania:mana_pool'
      },

      {
          output: 'botania:apothecary_default',
          pattern: ['SCS', 'POP', 'OOO'],
          key: {
              S:'occultism:otherstone_slab',
              C:Item.of('thermal:fluid_cell').ignoreNBT(),
              P:'botania:white_petal',
              O:'occultism:otherstone'

          },
          id: 'botania:apothecary_default'
      },

      {
          output: 'botania:manasteel_helmet',
          pattern: ['MMM', 'MSM', '   '],
          key: {
            M:'botania:manasteel_ingot',
            S:Item.of('immersiveengineering:armor_steel_head', '{Damage:0}').weakNBT()

          },
          id: 'botania:manasteel_helmet'
      },

      {
          output: 'botania:manasteel_chestplate',
          pattern: ['MSM', 'MMM', 'MMM'],
          key: {
            M:'botania:manasteel_ingot',
            S:Item.of('immersiveengineering:armor_steel_chest', '{Damage:0}').weakNBT()

          },
          id: 'botania:manasteel_chestplate'
      },

      {
          output: 'botania:manasteel_leggings',
          pattern: ['MMM', 'MSM', 'M M'],
          key: {
            M:'botania:manasteel_ingot',
            S:Item.of('immersiveengineering:armor_steel_legs', '{Damage:0}').weakNBT()

          },
          id: 'botania:manasteel_leggings'
      },

      {
          output: 'botania:manasteel_boots',
          pattern: ['MSM', 'M M', '   '],
          key: {
            M:'botania:manasteel_ingot',
            S:Item.of('immersiveengineering:armor_steel_feet', '{Damage:0}').weakNBT()

          },
          id: 'botania:manasteel_boots'
      },
      {
          output: 'botania:alchemy_catalyst',
          pattern: ['LPL', 'AMA', 'LPL'],
          key: {
              M:'botania:mana_pearl',
              A:'ars_nouveau:alchemical_sourcelink',
              P:'emendatusenigmatica:gold_plate',
              L:'botania:livingrock'
          },
          id: 'botania:alchemy_catalyst'
      },
      {
          output: 'botania:conjuration_catalyst',
          pattern: ['LDL', 'EAE', 'LEL'],
          key: {
              D:'botania:pixie_dust',
              A:'botania:alchemy_catalyst',
              E:'botania:elementium_block',
              L:'botania:livingrock'
          },
          id: 'botania:conjuration_catalyst'
      },
      {
          output: 'botania:mana_distributor',
          pattern: ['LLL', 'MRM', 'LLL'],
          key: {
              R:'ars_nouveau:arcane_relay_splitter',
              M:'botania:manasteel_block',
              L:'botania:livingrock'
          },
          id: 'botania:mana_distributor'
      },
      {
          output: 'botania:brewery',
          pattern: ['LBL', 'DRD', 'LML'],
          key: {
              B:'minecraft:brewing_stand',
              M:'botania:manasteel_block',
              L:'botania:livingrock',
              R:'botania:rune_mana',
              D:'botania:mana_diamond'
          },
          id: 'botania:brewery'
      },
      {
          output: 'botania:crafting_halo',
          pattern: [' B ', 'DCD', ' M '],
          key: {
              B:'botania:mana_pearl',
              D:'botania:mana_diamond',
              M:'botania:manasteel_ingot',
              C:'engineersdecor:metal_crafting_table'
          },
          id: 'botania:crafting_halo'
      },
      {
          output: 'botania:auto_crafting_halo',
          pattern: ['CBD'],
          key: {
              B:Item.of('botania:crafting_halo').weakNBT(),
              D:'botania:mana_diamond',
              C:'engineersdecor:metal_crafting_table'
          },
          id: 'botania:auto_crafting_halo'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
