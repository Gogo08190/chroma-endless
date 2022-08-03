onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/energizing/';
    const recipes = [
      {
          ingredients: [
              { item: 'enviroenergy:pladium_solar_ccu' },
              { item: 'enviroenergy:ionite_solar_cell' },
              { item: 'enviroenergy:ionite_solar_cell' },
              { item: 'enviroenergy:ionite_solar_cell' },
              { item: 'envirocore:ionite_frame' },
              { item: 'envirocore:ionite_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:ionite_solar_ccu',
              count: 1
          },
          id: 'enviroenergy:block/solar/ionite'
      },
      {
          ingredients: [
              { item: 'create:refined_radiance' },
              { item: 'create:refined_radiance' },
              { item: 'enviroenergy:insulated_lightning_rod' },
              { item: 'enviroenergy:pladium_lightning_ccu' },
              { item: 'envirocore:ionite_frame' },
              { item: 'envirocore:ionite_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:ionite_lightning_ccu',
              count: 1
          },
          id: 'enviroenergy:block/lightning/ct_ionite'
      },
      {
          ingredients: [
              { item: 'envirotech:pladium_void_miner_ccu' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_diode' },
              { item: 'envirocore:ionite_frame' },
              { item: 'envirocore:ionite_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'envirotech:ionite_void_miner_ccu',
              count: 1
          },
          id: 'envirotech:block/void_miner/ct_ionite'
      },
      {
          ingredients: [
              { item: 'enviroenergy:ionite_solar_ccu' },
              { item: 'enviroenergy:aethium_solar_cell' },
              { item: 'enviroenergy:aethium_solar_cell' },
              { item: 'enviroenergy:aethium_solar_cell' },
              { item: 'envirocore:aethium_frame' },
              { item: 'envirocore:aethium_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:aethium_solar_ccu',
              count: 1
          },
          id: 'enviroenergy:block/solar/aethium'
      },
      {
          ingredients: [
              { item: 'create:refined_radiance' },
              { item: 'create:refined_radiance' },
              { item: 'enviroenergy:insulated_lightning_rod' },
              { item: 'enviroenergy:ionite_lightning_ccu' },
              { item: 'envirocore:aethium_frame' },
              { item: 'envirocore:aethium_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'enviroenergy:aethium_lightning_ccu',
              count: 1
          },
          id: 'enviroenergy:block/lightning/ct_aethium'
      },
      {
          ingredients: [
              { item: 'envirotech:ionite_void_miner_ccu' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_core' },
              { item: 'envirocore:laser_diode' },
              { item: 'envirocore:aethium_frame' },
              { item: 'envirocore:aethium_frame' }
          ],
          energy: 1000000,
          result: {
              item: 'envirotech:aethium_void_miner_ccu',
              count: 1
          },
          id: 'envirotech:block/void_miner/ct_aethium'
      },
      //Ultimate Tier Installer
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_tier_installer' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_tier_installer',
              count: 1
          },
          id: 'mekanism:tier_installer/ultimate'
      },
      {
          ingredients: [
              { item: 'ctiers:centrifuge_controller_tier_3' },
              { item: 'powah:niotic_crystal_block' },
              { item: 'powah:niotic_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'extendedcrafting:luminessence_block' },
              { item: 'extendedcrafting:luminessence_block' }
          ],
          energy: 10000000,
          result: {
              item: 'ctiers:centrifuge_controller_tier_4',
              count: 1
          },
          id: `${id_prefix}centrifuge_controller_tier_4`
      },
      {
          ingredients: [
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:niotic_crystal_block' },
              { item: 'powah:niotic_crystal_block' },
              { item: 'ctiers:centrifuge_casing_tier_3' },
              { item: 'ctiers:centrifuge_casing_tier_3' },
              { item: 'ctiers:centrifuge_casing_tier_3' }
          ],
          energy: 10000000,
          result: {
              item: 'ctiers:centrifuge_casing_tier_4',
              count: 3
          },
          id: `${id_prefix}centrifuge_casing_tier_4`
      },
      //Ultimate Smelting Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_smelting_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_smelting_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/smelting'
      },
      //Ultimate Enriching Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_enriching_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_enriching_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/enriching'
      },
      //Ultimate Crushing Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_crushing_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_crushing_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/crushing'
      },
      //Ultimate Compressing Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_compressing_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_compressing_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/compressing'
      },
      //Ultimate Combining Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_combining_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_combining_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/combining'
      },
      //Ultimate Infusing Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_infusing_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_infusing_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/infusing'
      },
      //Ultimate Sawing Factory
      {
          ingredients: [
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'powah:capacitor_nitro' },
              { item: 'mekanism:elite_sawing_factory' }
          ],
          energy: 1000000,
          result: {
              item: 'mekanism:ultimate_sawing_factory',
              count: 1
          },
          id: 'mekanism:factory/ultimate/sawing'
      },
      //Energized Steel
      {
          ingredients: [
              { item: 'emendatusenigmatica:steel_ingot' },
              { item: 'emendatusenigmatica:electrum_ingot' }
          ],
          energy: 10000,
          result: {
              item: 'powah:steel_energized',
              count: 2
          },
          id: 'powah:energizing/energized_steel'
      },
      //Blazing Crystal
      {
          ingredients: [
              { item: 'botania:blaze_block' }
          ],
          energy: 90000,
          result: {
              item: 'powah:crystal_blazing',
              count: 1
          },
          id: 'powah:energizing/blazing_crystal_2'
      },
      {
          ingredients: [
              { item: 'resourcefulbees:blaze_honeycomb' },
              { item: 'resourcefulbees:blaze_honeycomb' },
              { item: 'resourcefulbees:blaze_honeycomb' },
              { item: 'resourcefulbees:blaze_honeycomb' }
          ],
          energy: 120000,
          result: {
              item: 'powah:crystal_blazing',
              count: 1
          },
          id: 'powah:energizing/blazing_crystal'
      },
      //Niotic Crystal
      {
          ingredients: [
              { item: 'botania:mana_diamond' }
          ],
          energy: 300000,
          result: {
              item: 'powah:crystal_niotic',
              count: 1
          },
          id: 'powah:energizing/niotic_crystal'
      },
      //Spirited Crystal
      {
          ingredients: [
              { item: 'botanicalmachinery:mana_emerald' }
          ],
          energy: 1000000,
          result: {
              item: 'powah:crystal_spirited',
              count: 1
          },
          id: 'powah:energizing/spirited_crystal'
      },
      //Nitro Crystal
      {
          ingredients: [
              { item: 'powah:blazing_crystal_block' },
              { item: 'enderioalloys:block_alloy_redstone_alloy' },
              { item: 'enderioalloys:block_alloy_redstone_alloy' },
              { item: 'minecraft:nether_star' }
          ],
          energy: 20000000,
          result: {
              item: 'powah:crystal_nitro',
              count: 16
          },
          id: 'powah:energizing/nitro_crystal'
      },
      //Ender Core
      {
          ingredients: [
              { item: 'emendatusenigmatica:enderium_ingot' },
              { item: 'powah:capacitor_basic_large' },
              { item: 'powah:dielectric_casing' },
              { item: 'rftoolsbase:infused_enderpearl' }
          ],
          energy: 50000,
          result: {
              item: 'powah:ender_core',
              count: 1
          },
          id: 'powah:energizing/ender_core'
      },
      //Uraninite Bee
      {
          ingredients: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:uranium_bee' }).weakNBT().toJson(),
              { item: 'powah:uraninite' },
              { item: 'powah:uraninite' },
              { item: 'powah:uraninite' },
              { item: 'powah:uraninite' },
              { item: 'powah:charged_snowball' }
          ],
          energy: 50000000,
          result: {
              item: 'resourcefulbees:uraninite_bee_spawn_egg',
              count: 1
          },
          id: `${id_prefix}uraninite_bee`
      },
      //Enerigzed Bee
      {
          ingredients: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:steel_bee' }).weakNBT().toJson(),
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:electrum_bee' }).weakNBT().toJson(),
              { item: 'powah:capacitor_hardened' },
              { item: 'powah:capacitor_hardened' },
              { item: 'powah:capacitor_hardened' },
              { item: 'powah:charged_snowball' }
          ],
          energy: 50000000,
          result: {
              item: 'resourcefulbees:energized_bee_spawn_egg',
              count: 1
          },
          id: `${id_prefix}energized_bee`
      },
      //Blazing Bee
      {
          ingredients: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:blaze_bee' }).weakNBT().toJson(),
              { item: 'create:blaze_cake' },
              { item: 'powah:capacitor_blazing' },
              { item: 'powah:capacitor_blazing' },
              { item: 'powah:capacitor_blazing' },
              { item: 'powah:charged_snowball' }
          ],
          energy: 70000000,
          result: {
              item: 'resourcefulbees:blazing_bee_spawn_egg',
              count: 1
          },
          id: `${id_prefix}blazing_bee`
      },
      //Niotic Bee
      {
          ingredients: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:diamond_bee' }).weakNBT().toJson(),
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:manasteel_bee' }).weakNBT().toJson(),
              { item: 'powah:capacitor_niotic' },
              { item: 'powah:capacitor_niotic' },
              { item: 'powah:capacitor_niotic' },
              { item: 'powah:charged_snowball' }
          ],
          energy: 90000000,
          result: {
              item: 'resourcefulbees:niotic_bee_spawn_egg',
              count: 1
          },
          id: `${id_prefix}niotic_bee`
      },
      //Spirited Bee
      {
          ingredients: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:emerald_bee' }).weakNBT().toJson(),
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:terrasteel_bee' }).weakNBT().toJson(),
              { item: 'powah:capacitor_spirited' },
              { item: 'powah:capacitor_spirited' },
              { item: 'powah:capacitor_spirited' },
              { item: 'powah:charged_snowball' }
          ],
          energy: 100000000,
          result: {
              item: 'resourcefulbees:spirited_bee_spawn_egg',
              count: 1
          },
          id: `${id_prefix}spirited_bee`
      },
      //Nitro Bee
      {
          ingredients: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:blazing_bee' }).weakNBT().toJson(),
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:wither_bee' }).weakNBT().toJson(),
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:redstone_bee' }).weakNBT().toJson(),
              { item: 'powah:capacitor_nitro' },
              { item: 'powah:capacitor_nitro' },
              { item: 'powah:capacitor_nitro' }
          ],
          energy: 150000000,
          result: {
              item: 'resourcefulbees:nitro_bee_spawn_egg',
              count: 1
          },
          id: `${id_prefix}nitro_bee`
      },
      //Wyvern Energy Core
      {
          ingredients: [
              { item: 'draconicevolution:draconium_core' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'enderioalloys:block_alloy_redstone_alloy' }
          ],
          energy: 150000,
          result: {
              item: 'draconicevolution:wyvern_energy_core',
              count: 1
          },
          id: 'draconicevolution:components/wyvern_energy_core'
      },
      //Crafting Core
      {
          ingredients: [
              { item: 'draconicevolution:draconium_core' },
              { item: 'envirocore:pladium_interconnect' },
              { item: 'envirocore:pladium_interconnect' },
              { item: 'envirocore:pladium_interconnect' },
              { item: 'envirocore:pladium_interconnect' },
              { item: 'mekanism:alloy_atomic' }
          ],
          energy: 1000000,
          result: {
              item: 'draconicevolution:crafting_core',
              count: 1
          },
          id: 'draconicevolution:crafting_core'
      },
      //Crafting Core
      {
          ingredients: [
              { item: 'draconicevolution:draconium_core' },
              { item: 'extendedcrafting:black_iron_block' },
              { item: 'envirocore:ionite_interconnect' },
              { item: 'envirocore:ionite_interconnect' },
              { item: 'mekanism:ultimate_control_circuit' },
              { item: 'mekanism:energy_tablet' }
          ],
          energy: 500000,
          result: {
              item: 'draconicevolution:basic_crafting_injector',
              count: 1
          },
          id: 'draconicevolution:basic_crafting_injector'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
