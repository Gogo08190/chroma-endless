onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/auto_infuser/';
    const recipes = [
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:basic_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:advanced_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:elite_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:ultimate_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:redstone_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_catalyst', count: 1 }, consumeInstantly: true }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:ender_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:enhanced_ender_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:crystaltine_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_catalyst', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_component', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_ingot', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: 'extendedcrafting:the_ultimate_catalyst'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:inert_luminessence', count: 4 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'botania:pixie_dust', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'occultism:iesnium_dust', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'botania:mana_powder', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'occultism:afrit_essence', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 5000 } }
          ],
          ticks: 240,
          id: `${id_prefix}inert_luminessence`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:draconium_core_part', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'botania:mana_diamond', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'draconicevolution:draconium_ingot', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:gold_ingot', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
          ],
          ticks: 240,
          id: `${id_prefix}draconium_core_part`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:wyvern_core_part', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'draconicevolution:draconium_core', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'draconicevolution:draconium_ingot', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_star', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 5000 } }
          ],
          ticks: 240,
          id: `${id_prefix}wyvern_core_part`
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'draconicmachinery:redstone_core', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'draconicevolution:draconium_ingot', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'envirocore:kyronite_interconnect', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'enderioalloys:block_alloy_redstone_alloy', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'thermal:redstone_servo', count: 2 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 1500 } }
          ],
          ticks: 240,
          id: 'draconicmachinery:redstone_core_rcp'
      },
      {
          outputs: [{ type: 'masterfulmachinery:items', data: { item: 'draconicevolution:module_core', count: 1 } }],
          inputs: [
              { type: 'masterfulmachinery:items', data: { item: 'enderioalloys:item_alloy_ingot_dark_steel', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'mekanism:hdpe_sheet', count: 4 }, consumeInstantly: true },
              { type: 'masterfulmachinery:items', data: { item: 'draconicevolution:draconium_core', count: 1 }, consumeInstantly: true },
              { type: 'masterfulmachinery:energy', data: { amount: 1500 } }
          ],
          ticks: 240,
          id: 'draconicevolution:modules/module_core'
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_fusioner';
        recipe.controllerId = 'fusioner';
        event.custom(recipe).id(recipe.id);
    });
});
