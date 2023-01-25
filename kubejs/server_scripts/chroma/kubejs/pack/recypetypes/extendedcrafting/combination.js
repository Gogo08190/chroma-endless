onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/combination/'
    const recipes = [
      {
          inputs: [
              { item: 'extendedcrafting:basic_component' },
              { item: 'extendedcrafting:basic_component' },
              { item: 'create:mechanical_crafter' },
              { tag: 'forge:storage_blocks/iron' },
              { item: 'extendedcrafting:basic_component' },
              { item: 'extendedcrafting:basic_component' },
              { tag: 'forge:storage_blocks/iron' },
              { item: 'create:mechanical_crafter' }
          ],
          catalyst: { item: 'extendedcrafting:basic_catalyst' },
          powerCost: 10000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:basic_table' },
          id: 'extendedcrafting:basic_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:advanced_component' },
              { item: 'extendedcrafting:advanced_component' },
              { item: 'extendedcrafting:basic_table' },
              { tag: 'forge:storage_blocks/gold' },
              { item: 'extendedcrafting:advanced_component' },
              { item: 'extendedcrafting:advanced_component' },
              { tag: 'forge:storage_blocks/gold' },
              { item: 'extendedcrafting:basic_table' }
          ],
          catalyst: { item: 'extendedcrafting:advanced_catalyst' },
          powerCost: 20000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:advanced_table' },
          id: 'extendedcrafting:advanced_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:elite_component' },
              { item: 'extendedcrafting:elite_component' },
              { item: 'extendedcrafting:advanced_table' },
              { tag: 'forge:storage_blocks/diamond' },
              { item: 'extendedcrafting:elite_component' },
              { item: 'extendedcrafting:elite_component' },
              { tag: 'forge:storage_blocks/diamond' },
              { item: 'extendedcrafting:advanced_table' }
          ],
          catalyst: { item: 'extendedcrafting:elite_catalyst' },
          powerCost: 30000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:elite_table' },
          id: 'extendedcrafting:elite_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:ultimate_component' },
              { item: 'extendedcrafting:ultimate_component' },
              { item: 'extendedcrafting:elite_table' },
              { tag: 'forge:storage_blocks/emerald' },
              { item: 'extendedcrafting:ultimate_component' },
              { item: 'extendedcrafting:ultimate_component' },
              { tag: 'forge:storage_blocks/emerald' },
              { item: 'extendedcrafting:elite_table' }
          ],
          catalyst: { item: 'extendedcrafting:ultimate_catalyst' },
          powerCost: 40000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:ultimate_table' },
          id: 'extendedcrafting:ultimate_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' }
          ],
          catalyst: { item: 'extendedcrafting:basic_table'},
          powerCost: 50000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:basic_auto_table' },
          id: 'extendedcrafting:basic_auto_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' }
          ],
          catalyst: { item: 'extendedcrafting:advanced_table'},
          powerCost: 60000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:advanced_auto_table' },
          id: 'extendedcrafting:advanced_auto_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' }
          ],
          catalyst: { item: 'extendedcrafting:elite_table'},
          powerCost: 70000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:elite_auto_table' },
          id: 'extendedcrafting:elite_auto_table'
      },
      {
          inputs: [
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:redstone_component' },
              { item: 'extendedcrafting:black_iron_ingot' },
              { item: 'extendedcrafting:crystaltine_component' }
          ],
          catalyst: { item: 'extendedcrafting:ultimate_table'},
          powerCost: 80000,
          powerRate: 1000,
          result: { item: 'extendedcrafting:ultimate_auto_table' },
          id: 'extendedcrafting:ultimate_auto_table'
      },
      {
          inputs: [
              { item: 'envirocore:kyronite_interconnect' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'bigreactors:ludicrite_ingot' },
              { item: 'mekanism:ingot_refined_obsidian' },
              { item: 'pipez:ultimate_upgrade' },
              { item: 'allthemodium:unobtainium_ingot' },
              { item: 'envirocore:kyronite_interconnect' },
              { item: 'mekanism:alloy_atomic' },
              { item: 'bigreactors:ludicrite_ingot' },
              { item: 'mekanism:ingot_refined_obsidian' },
              { item: 'pipez:ultimate_upgrade' },
              { item: 'allthemodium:unobtainium_ingot' }
          ],
          catalyst: { item: 'enderioalloys:item_material_skull_ender_resonator'},
          powerCost: 500000,
          powerRate: 10000,
          result: { item: 'pipez:infinity_upgrade' },
          id: `${id_prefix}infinity_upgrade`
      },
      {
          inputs: [
              { item: 'mekanism:hdpe_elytra' },
              { item: 'miniutilities:the_final_opinium_core' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'ars_elemental:air_focus' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'miniutilities:the_final_opinium_core' },
              { item: 'tconstruct:slime_chestplate' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'allthemodium:unobtainium_vibranium_alloy_ingot' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'miniutilities:the_final_opinium_core' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'envirocore:electrostatic_modifier' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'miniutilities:the_final_opinium_core' },
              { item: 'powah:blazing_crystal_block' },
              { item: 'allthemodium:unobtainium_vibranium_alloy_ingot' },
              { item: 'powah:blazing_crystal_block' }
          ],
          catalyst: { item: 'botania:flight_tiara'},
          powerCost: 1000000,
          powerRate: 10000,
          result: { item: 'miniutilities:angel_ring' },
          id: 'miniutilities:angel_ring_crafting'
      },
      {
          inputs: [
              { item: 'extendedcrafting:the_ultimate_ingot' },
              { item: 'extendedcrafting:the_ultimate_ingot' },
              { item: 'envirocore:xerothium_interconnect' },
              { item: 'envirocore:xerothium_interconnect' },
              { item: 'envirocore:xerothium_interconnect' },
              { item: 'envirocore:xerothium_interconnect' },
              { item: 'extrastorage:neural_processor' },
              { item: 'extrastorage:neural_processor' }

          ],
          catalyst: { item: 'extendedcrafting:luminessence'},
          powerCost: 500000,
          powerRate: 10000,
          result: { item: 'kubejs:thetaneck' },
          id: `${id_prefix}thetaneck`
      },
      {
          inputs: [
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'allthemodium:allthemodium_block' },
              { item: 'enderioalloys:item_alloy_ingot_vivid_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_vivid_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_vivid_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_vivid_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_stellar_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_stellar_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_stellar_alloy' },
              { item: 'enderioalloys:item_alloy_ingot_stellar_alloy' }

          ],
          catalyst: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:soul_lava_bee' }).weakNBT().toJson(),
          powerCost: 500000,
          powerRate: 10000,
          result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:allthemodium_bee' }).toJson(),
          id: `${id_prefix}allthemodium_bee`
      }
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });
        event
            .custom({
                type: 'extendedcrafting:combination',
                powerCost: recipe.powerCost,
                powerRate: recipe.powerRate,
                input: recipe.catalyst,
                ingredients: ingredient,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
