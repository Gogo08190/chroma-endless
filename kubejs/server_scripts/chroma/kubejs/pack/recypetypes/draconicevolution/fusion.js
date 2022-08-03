onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/draconicevolution/fusion/';

    const recipes = [
      {
          inputs: [
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'powah:energy_cell_nitro' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'extendedcrafting:crystaltine_catalyst' },
              { item: 'extendedcrafting:crystaltine_catalyst' },
              { item: 'mekanism:personal_chest' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'ctiers:centrifuge_controller_tier_4' },
          total_energy: 50000000,
          result: { item: 'ctiers:centrifuge_controller_tier_5' },
          id: 'centrifuge_controller_tier_5'
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'powah:nitro_crystal_block' },
              { item: 'extendedcrafting:crystaltine_catalyst' },
              { item: 'extendedcrafting:crystaltine_catalyst' },
              { item: 'extendedcrafting:crystaltine_catalyst' },
              { item: 'extendedcrafting:crystaltine_catalyst' }
          ],
          tier: "WYVERN",
          catalyst: {
              count: 3,
              items: [{ item: "ctiers:centrifuge_casing_tier_4" }],
              type: "draconicevolution:ingredient_stack"
          },
          total_energy: 20000000,
          result: { item: 'ctiers:centrifuge_casing_tier_5', count: 3 },
          id: 'centrifuge_casing_tier_5'
      },

      {
          inputs: [
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'enviroenergy:nanorite_solar_cell' },
              { item: 'enviroenergy:nanorite_solar_cell' },
              { item: 'enviroenergy:nanorite_solar_cell' },
              { item: 'enviroenergy:nanorite_solar_cell' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'enviroenergy:aethium_solar_ccu' },
          total_energy: 20000000,
          result: { item: 'enviroenergy:nanorite_solar_ccu' },
          id: 'enviroenergy:block/solar/nanorite'
      },

      {
          inputs: [
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'envirocore:nanorite_frame' },
              { item: 'envirocore:nanorite_frame' },
              { item: 'envirocore:nanorite_frame' },
              { item: 'enviroenergy:insulated_lightning_rod' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'enviroenergy:aethium_lightning_ccu' },
          total_energy: 20000000,
          result: { item: 'enviroenergy:nanorite_lightning_ccu' },
          id: 'enviroenergy:block/lightning/ct_nanorite'
      },

      {
          inputs: [
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'envirocore:nanorite_frame' },
              { item: 'envirocore:nanorite_frame' },
              { item: 'envirocore:laser_diode' },
              { item: 'envirocore:laser_diode' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'envirotech:aethium_void_miner_ccu' },
          total_energy: 20000000,
          result: { item: 'envirotech:nanorite_void_miner_ccu' },
          id: 'envirotech:block/void_miner/ct_nanorite'
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'enviroenergy:xerothium_solar_cell' },
              { item: 'enviroenergy:xerothium_solar_cell' },
              { item: 'enviroenergy:xerothium_solar_cell' },
              { item: 'enviroenergy:xerothium_solar_cell' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'enviroenergy:nanorite_solar_ccu' },
          total_energy: 200000000,
          result: { item: 'enviroenergy:xerothium_solar_ccu' },
          id: 'enviroenergy:block/solar/xerothium'
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'envirocore:xerothium_frame' },
              { item: 'envirocore:xerothium_frame' },
              { item: 'envirocore:xerothium_frame' },
              { item: 'enviroenergy:insulated_lightning_rod' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'enviroenergy:nanorite_lightning_ccu' },
          total_energy: 200000000,
          result: { item: 'enviroenergy:xerothium_lightning_ccu' },
          id: 'enviroenergy:block/lightning/ct_xerothium'
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'envirocore:xerothium_frame' },
              { item: 'envirocore:xerothium_frame' },
              { item: 'envirocore:laser_diode' },
              { item: 'envirocore:laser_diode' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'envirotech:nanorite_void_miner_ccu' },
          total_energy: 200000000,
          result: { item: 'envirotech:xerothium_void_miner_ccu' },
          id: 'enviroenergy:block/lightning/ct_xerothium'
      },

      {
          inputs: [
              { item: 'betterendforge:aeternium_block' },
              { item: 'betterendforge:aeternium_block' },
              { item: 'betterendforge:aeternium_block' },
              { item: 'betterendforge:aeternium_block' },
              { item: 'minecraft:shulker_shell' },
              { item: 'minecraft:dragon_head' },
              { item: 'minecraft:end_rod' },
              { item: 'minecraft:dragon_egg' },
              { item: 'minecraft:elytra' }
          ],
          tier: "DRACONIUM",
          catalyst: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:ender_bee' }).weakNBT().toJson(),
          total_energy: 100000,
          result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:dragon_bee' }).toJson(),
          id: `${id_prefix}dragon_bee`
      },

      {
          inputs: [
              { item: 'draconicevolution:draconium_block' },
              { item: 'draconicevolution:draconium_block' },
              { item: 'draconicevolution:draconium_block' },
              { item: 'draconicevolution:draconium_block' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:draconium_core' }
          ],
          tier: "WYVERN",
          catalyst: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:dragon_bee' }).weakNBT().toJson(),
          total_energy: 1000000,
          result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:draconium_bee' }).toJson(),
          id: `${id_prefix}draconium_bee`
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_draconium_block' },
              { item: 'draconicevolution:awakened_draconium_block' },
              { item: 'draconicevolution:awakened_draconium_block' },
              { item: 'draconicevolution:awakened_draconium_block' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:dragon_heart' }
          ],
          tier: "DRACONIC",
          catalyst: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:draconium_bee' }).weakNBT().toJson(),
          total_energy: 10000000,
          result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:awakened_bee' }).toJson(),
          id: `${id_prefix}awakened_bee`
      },

      {
          inputs: [
              { item: 'draconicevolution:infused_obsidian' },
              { item: 'draconicevolution:infused_obsidian' },
              { item: 'draconicevolution:infused_obsidian' },
              { item: 'draconicevolution:infused_obsidian' },
              { item: 'draconicevolution:chaotic_core' },
              { item: 'draconicevolution:chaotic_core' },
              { item: 'draconicevolution:chaotic_core' },
              { item: 'draconicevolution:chaotic_core' },
              { item: 'draconicmachinery:chaos_heart' }
          ],
          tier: "CHAOTIC",
          catalyst: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:awakened_bee' }).weakNBT().toJson(),
          total_energy: 100000000,
          result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:chaotic_bee' }).toJson(),
          id: `${id_prefix}chaotic_bee`
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:wyvern_energy_core' },
              { item: 'draconicevolution:wyvern_energy_core' },
              { item: 'draconicevolution:wyvern_energy_core' },
              { item: 'draconicevolution:wyvern_energy_core' },
              { item: 'draconicevolution:wyvern_core' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'envirocore:pladium_interconnect' },
          total_energy: 300000,
          result: { item: 'draconicevolution:draconic_energy_core' },
          id: 'draconicevolution:components/draconic_energy_core'
      },

      {
          inputs: [
              { item: 'draconicevolution:medium_chaos_frag' },
              { item: 'draconicevolution:medium_chaos_frag' },
              { item: 'draconicevolution:medium_chaos_frag' },
              { item: 'draconicevolution:medium_chaos_frag' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'draconicevolution:awakened_core' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'envirocore:ionite_interconnect' },
          total_energy: 600000,
          result: { item: 'draconicevolution:chaotic_energy_core' },
          id: 'draconicevolution:components/chaotic_energy_core'
      },

      {
          inputs: [
              { item: 'draconicevolution:draconium_core' },
              { item: 'draconicevolution:draconium_core' },
              { item: 'envirocore:kyronite_interconnect' },
              { item: 'envirocore:kyronite_interconnect' },
              { item: 'mekanism:alloy_reinforced' },
              { item: 'mekanism:alloy_reinforced' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:draconium_block' },
              { item: 'mekanism:energy_tablet' }
          ],
          tier: "DRACONIUM",
          catalyst: { item: 'draconicevolution:basic_crafting_injector' },
          total_energy: 64000,
          result: { item: 'draconicevolution:wyvern_crafting_injector' },
          id: 'draconicevolution:wyvern_crafting_injector'
      },

      {
          inputs: [
              { item: 'draconicevolution:wyvern_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'envirocore:ionite_interconnect' },
              { item: 'envirocore:ionite_interconnect' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_draconium_block' },
              { item: 'mekanism:energy_tablet' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'draconicevolution:wyvern_crafting_injector' },
          total_energy: 512000,
          result: { item: 'draconicevolution:awakened_crafting_injector' },
          id: 'draconicevolution:awakened_crafting_injector'
      },

      {
          inputs: [
              { item: 'draconicevolution:large_chaos_frag' },
              { item: 'draconicevolution:large_chaos_frag' },
              { item: 'draconicevolution:large_chaos_frag' },
              { item: 'draconicevolution:large_chaos_frag' },
              { item: 'envirocore:aethium_interconnect' },
              { item: 'envirocore:aethium_interconnect' },
              { item: 'envirocore:aethium_interconnect' },
              { item: 'minecraft:dragon_egg' },
              { item: 'mekanism:basic_induction_cell' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'draconicevolution:awakened_crafting_injector' },
          total_energy: 10000000,
          result: { item: 'draconicevolution:chaotic_crafting_injector' },
          id: 'draconicevolution:chaotic_crafting_injector'
      },

      {
          inputs: [
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'draconicevolution:draconium_ingot' },
              { item: 'rftoolsbase:infused_enderpearl' },
              { item: 'rftoolsbase:infused_enderpearl' },
              { item: 'rftoolsbase:infused_enderpearl' },
              { item: 'rftoolsbase:infused_enderpearl' },
              { item: 'draconicevolution:wyvern_core' }
          ],
          tier: "WYVERN",
          catalyst: { item: 'draconicevolution:dislocator' },
          total_energy: 1000000,
          result: { item: 'draconicevolution:advanced_dislocator' },
          id: 'draconicevolution:advanced_dislocator'
      },

      {
          inputs: [
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_draconium_ingot' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:awakened_core' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'draconicevolution:draconic_energy_core' },
              { item: 'draconicevolution:wyvern_core' },
              { item: 'envirocore:nanorite_interconnect' },
              { item: 'mekanism:ultimate_induction_cell' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'draconicevolution:generator' },
          total_energy: 10000000,
          result: { item: 'draconicmachinery:enhanced_generator' },
          id: 'draconicmachinery:enhanced_generator_rcp'
      },

      {
          inputs: [
              { item: 'powah:solar_panel_nitro' },
              { item: 'powah:solar_panel_nitro' },
              { item: 'powah:solar_panel_nitro' },
              { item: 'draconicevolution:basic_relay_crystal' },
              { item: 'draconicevolution:wyvern_energy_core' },
              { item: 'draconicevolution:wyvern_energy_core' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'draconicevolution:wyvern_core' }
          ],
          tier: "DRACONIC",
          catalyst: { item: 'kubejs:solar_cell_base' },
          total_energy: 1000000,
          result: { item: 'draconicmachinery:draconic_solar_panel' },
          id: 'draconicmachinery:drac_solar_panel_rcp'
      }
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });

        event
            .custom({
                type: 'draconicevolution:fusion_crafting',
                tier: recipe.tier,
                catalyst: recipe.catalyst,
                total_energy: recipe.total_energy,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
