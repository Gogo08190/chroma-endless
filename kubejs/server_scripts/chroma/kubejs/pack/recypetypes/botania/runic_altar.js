onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/runic_altar/';

    /*{
        inputs: [
            '',
            ''
        ],
        mana: 16000,
        output: '',
        count: 2,
        id: ''
    }*/

    const recipes = [
      {
        inputs: [
          'betterendforge:amber_gem',
          'betterendforge:amber_gem',
          'arsarsenal:source_steel_ingot',
          'arsarsenal:source_steel_ingot',
          'arsarsenal:source_steel_ingot',
          'minecraft:dragon_breath',
          'botania:dragonstone',
          'botania:dragonstone',
          'create:cuckoo_clock'
        ],
        mana: 20000,
        output: 'tiab:timeinabottle',
        count: 1,
        id:'tiab:timeinabottle'
      },

      {
        inputs: [
          'minecraft:ender_eye',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:mana_pylon'
        ],
        mana: 20000,
        output: 'botania:natura_pylon',
        count: 1,
        id: 'botania:natura_pylon'
      },

      {
        inputs: [
          'botania:pixie_dust',
          'botania:pixie_dust',
          'botania:elementium_block',
          'botania:elementium_block',
          'botania:natura_pylon'
        ],
        mana: 20000,
        output: 'botania:gaia_pylon',
        count: 1,
        id: 'botania:gaia_pylon'
      },

      {
        inputs: [
          'elementalcraft:water_shard',
          'elementalcraft:water_shard',
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'minecraft:bone_block',
          'quark:sugar_cane_block',
          Item.of('minecraft:fishing_rod', '{Damage:0}').weakNBT()
        ],
        mana: 10000,
        output: 'botania:rune_water',
        count: 2,
        id: 'botania:runic_altar/water'
      },

      {
        inputs: [
          'elementalcraft:fire_shard',
          'elementalcraft:fire_shard',
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'minecraft:fire_charge',
          'minecraft:nether_wart',
          'minecraft:nether_brick'
        ],
        mana: 10000,
        output: 'botania:rune_fire',
        count: 2,
        id: 'botania:runic_altar/fire'
      },

      {
        inputs: [
          'minecraft:granite',
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'minecraft:brown_mushroom',
          'elementalcraft:earth_shard',
          'elementalcraft:earth_shard',
          'emendatusenigmatica:coke_block'
        ],
        mana: 10000,
        output: 'botania:rune_earth',
        count: 2,
        id: 'botania:runic_altar/earth'
      },

      {
        inputs: [
          'elementalcraft:air_shard',
          'elementalcraft:air_shard',
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'minecraft:white_wool',
          'supplementaries:feather_block'
        ],
        mana: 10000,
        output: 'botania:rune_air',
        count: 2,
        id: 'botania:runic_altar/air'
      },

      {
        inputs: [
          '#minecraft:saplings',
          '#minecraft:saplings',
          '#minecraft:saplings',
          'minecraft:hay_block',
          'elementalcraft:water_shard',
          'elementalcraft:fire_shard',
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'botania:rune_fire',
          'botania:rune_water'
        ],
        mana: 12000,
        output: 'botania:rune_spring',
        count: 1,
        id: 'botania:runic_altar/spring'
      },

      {
        inputs: [
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'botania:rune_air',
          'botania:rune_earth',
          'elementalcraft:air_shard',
          'elementalcraft:earth_shard',
          'tconstruct:earth_congealed_slime',
          'minecraft:melon'
        ],
        mana: 12000,
        output: 'botania:rune_summer',
        count: 1,
        id: 'botania:runic_altar/summer'
      },

      {
        inputs: [
          'botania:manasteel_ingot',
          'botania:mana_powder',
          '#minecraft:leaves',
          '#minecraft:leaves',
          '#minecraft:leaves',
          'botania:rune_air',
          'botania:rune_fire',
          'elementalcraft:fire_shard',
          'elementalcraft:air_shard',
          'meetyourfight:fossil_bait'
        ],
        mana: 12000,
        output: 'botania:rune_autumn',
        count: 1,
        id: 'botania:runic_altar/autumn'
      },

      {
        inputs: [
          'botania:manasteel_ingot',
          'botania:mana_powder',
          'minecraft:snow_block',
          'minecraft:snow_block',
          'minecraft:white_wool',
          'minecraft:cake',
          'elementalcraft:earth_shard',
          'elementalcraft:water_shard',
          'botania:rune_water',
          'botania:rune_earth'
        ],
        mana: 12000,
        output: 'botania:rune_winter',
        count: 1,
        id: 'botania:runic_altar/winter'
      },

      {
        inputs: [
          'botania:mana_pearl',
          'botania:manasteel_ingot',
          'botania:manasteel_ingot',
          'botania:manasteel_ingot',
          'botania:manasteel_block',
          'botania:manasteel_block',
          'botania:manasteel_block'
        ],
        mana: 15000,
        output: 'botania:rune_mana',
        count: 1,
        id: 'botania:runic_altar/mana'
      },

      {
        inputs: [
          'botania:manasteel_helmet',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:rune_spring',
          'botania:livingwood_twig',
          'botania:livingwood_twig'
        ],
        mana: 20000,
        output: 'botania:terrasteel_helmet',
        count: 1,
        id: 'botania:terrasteel_helmet'
      },

      {
        inputs: [
          'botania:terrasteel_chestplate',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:rune_summer',
          'botania:livingwood_twig',
          'botania:livingwood_twig'
        ],
        mana: 20000,
        output: 'botania:terrasteel_chestplate',
        count: 1,
        id: 'botania:terrasteel_chestplate'
      },

      {
        inputs: [
          'botania:manasteel_leggings',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:rune_autumn',
          'botania:livingwood_twig',
          'botania:livingwood_twig'
        ],
        mana: 20000,
        output: 'botania:terrasteel_leggings',
        count: 1,
        id: 'botania:terrasteel_leggings'
      },

      {
        inputs: [
          'botania:manasteel_boots',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:rune_winter',
          'botania:livingwood_twig',
          'botania:livingwood_twig'
        ],
        mana: 20000,
        output: 'botania:terrasteel_boots',
        count: 1,
        id: 'botania:terrasteel_boots'
      },

      {
        inputs: [
          'botania:livingwood',
          'botania:livingwood',
          'botania:livingwood',
          'botania:livingwood',
          'botania:livingwood',
          'botania:livingwood',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot'
        ],
        mana: 20000,
        output: 'botania:alfheim_portal',
        count: 1,
        id: 'botania:alfheim_portal'
      },

      {
        inputs: [
          'minecraft:glowstone_dust',
          'minecraft:glowstone_dust',
          'minecraft:glowstone_dust',
          'minecraft:glowstone_dust',
          'botania:livingwood'
        ],
        mana: 20000,
        output: 'botania:glimmering_livingwood',
        count: 1,
        id: 'botania:glimmering_livingwood'
      },

      {
        inputs: [
          'botania:gaia_ingot',
          'botania:rune_earth',
          'botania:rune_earth',
          'botania:rune_earth',
          'botania:rune_earth',
          'minecraft:honeycomb_block',
          'minecraft:honeycomb_block',
          'minecraft:honeycomb_block',
          'minecraft:honeycomb_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:t2_beehive'
        ],
        mana: 30000,
        output: 'resourcefulbees:t3_beehive',
        count: 1,
        id: 'resourcefulbees:t3_beehive_nests'
      },

      {
        inputs: [
          'botania:gaia_ingot',
          'botania:rune_earth',
          'botania:rune_earth',
          'botania:rune_earth',
          'botania:rune_earth',
          'minecraft:honeycomb_block',
          'minecraft:honeycomb_block',
          'minecraft:honeycomb_block',
          'minecraft:honeycomb_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:wax_block',
          'resourcefulbees:t2_hive_upgrade'
        ],
        mana: 30000,
        output: 'resourcefulbees:t3_hive_upgrade',
        count: 1,
        id: 'resourcefulbees:t3_hive_upgrade'
      },
      {
        inputs: [
          'botania:living_root',
          'minecraft:redstone'
        ],
        mana: 300,
        output: 'botania:redstone_root',
        count: 1,
        id: 'botania:redstone_root'
      },
      {
        inputs: [
          'minecraft:blaze_rod',
          'minecraft:blaze_rod',
          'minecraft:blaze_rod',
          'minecraft:blaze_rod',
          'botania:ender_hand',
          'botania:ender_hand',
          'expandedstorage:iron_chest',
          'botania:mana_pearl',
          '#forge:wool'
        ],
        mana: 3000,
        output: 'enderstorage:ender_chest',
        count: 1,
        id: 'enderstorage:ender_chest'
      },
      {
        inputs: [
          'minecraft:blaze_rod',
          'minecraft:blaze_rod',
          'minecraft:blaze_rod',
          'minecraft:blaze_rod',
          'botania:ender_hand',
          'botania:ender_hand',
          'metalbarrels:iron_barrel',
          'botania:mana_pearl',
          '#forge:wool'
        ],
        mana: 3000,
        output: 'enderstorage:ender_tank',
        count: 1,
        id: 'enderstorage:ender_tank'
      }

    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
