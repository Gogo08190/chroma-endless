onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ars_nouveau/enchanting_apparatus/';

    const recipes = [

      // Pedestal Upgrade Base
      {
          inputs: [
              'emendatusenigmatica:lumium_plate',
              'emendatusenigmatica:lumium_plate',
              'emendatusenigmatica:lumium_plate',
              'emendatusenigmatica:lumium_plate'
          ],
          reagent: 'emendatusenigmatica:lumium_plate',
          sourceCost: 5000,
          output: 'pedestals:coin/default',
          id: 'pedestals:upgrades/itempedestalupgradedefault'
      },

      // Pedestal Upgrade Base
      {
          inputs: [
              Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}').weakNBT(),
              Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}').weakNBT()
          ],
          reagent: 'pedestals:coin/default',
          sourceCost: 5000,
          output: 'pedestals:coin/cobble',
          id: 'pedestals:upgrades/cobblegen'
      },

      // Pedestal
      {
          inputs: [
            'occultism:otherstone_slab',
            'pedestals:linkingtool',
            'occultism:otherstone_slab',
            'occultism:otherstone',
            'occultism:otherstone',
            'occultism:otherstone'
          ],
          reagent: 'occultism:otherstone',
          sourceCost: 5000,
          output: 'pedestals:pedestal/stone333',
          id: 'pedestals:pedestal'
      },

      //BeeHive T4
      {
          inputs: [
            '#resourcefulbees:resourceful_honey_block',
            '#resourcefulbees:resourceful_honey_block',
            '#resourcefulbees:resourceful_honey_block',
            '#resourcefulbees:resourceful_honey_block',
            'undergarden:utherium_block',
            'extendedcrafting:nether_star_block',
            'extendedcrafting:nether_star_block',
            'resourcefulbees:wax_block'
          ],
          reagent: 'resourcefulbees:t3_beehive',
          sourceCost: 10000,
          output: 'resourcefulbees:t4_beehive',
          id: 'resourcefulbees:t4_beehive_nests'
      },

      //Tier 4 Hive Upgrade
      {
          inputs: [
            '#resourcefulbees:resourceful_honey_block',
            '#resourcefulbees:resourceful_honey_block',
            '#resourcefulbees:resourceful_honey_block',
            '#resourcefulbees:resourceful_honey_block',
            'undergarden:utherium_block',
            'extendedcrafting:nether_star_block',
            'extendedcrafting:nether_star_block',
            'resourcefulbees:wax_block'
          ],
          reagent: 'resourcefulbees:t3_hive_upgrade',
          sourceCost: 10000,
          output: 'resourcefulbees:t4_hive_upgrade',
          id: 'resourcefulbees:t4_hive_upgrade'
      },

      //Sourcesteel bee
      {
          inputs: [
            'arsarsenal:source_steel_ingot',
            '#forge:storage_blocks/arcane',
            'arsarsenal:source_steel_ingot',
            '#forge:storage_blocks/arcane',
            '#forge:storage_blocks/arcane',
            'arsarsenal:source_steel_ingot',
            '#forge:storage_blocks/netherite',
            'arsarsenal:source_steel_ingot'
          ],
          reagent: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:steel_bee' }).weakNBT().toJson(),
          sourceCost: 10000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:source_steel_bee' }).toJson(),
          id: `${id_prefix}source_steel_bee`
      },
      //Automatic Compound Infuser Fluid input port
      {
          inputs: [
            'create:copper_casing',
            'mob_grinding_utils:jumbo_tank',
            'create:copper_casing',
            '#forge:ingots/shadow_steel',
            '#forge:ingots/shadow_steel',
            'create:copper_casing',
            'refinedpipes:ultimate_fluid_pipe',
            'create:copper_casing'
          ],
          reagent: 'create:spout',
          sourceCost: 7500,
          output: 'masterfulmachinery:autoinfuser_compound_fluid_port_fluids_input',
          id: `${id_prefix}autoinfuser_compound_fluid_port_fluids_input`
      },
      //Automatic Compound Infuser Item input port
      {
          inputs: [
            'occultism:otherstone',
            'refinedpipes:advanced_item_pipe',
            'occultism:otherstone',
            '#forge:ingots/shadow_steel',
            '#forge:ingots/shadow_steel',
            'occultism:otherstone',
            'expandedstorage:netherite_chest',
            'occultism:otherstone'
          ],
          reagent: 'create:depot',
          sourceCost: 7500,
          output: 'masterfulmachinery:autoinfuser_compound_item_port_items_input',
          id: `${id_prefix}autoinfuser_compound_item_port_items_input`
      },
      //Automatic Compound Infuser Item output port
      {
          inputs: [
            'occultism:otherstone',
            'refinedpipes:advanced_item_pipe',
            'occultism:otherstone',
            '#forge:ingots/shadow_steel',
            '#forge:ingots/shadow_steel',
            'occultism:otherstone',
            'expandedstorage:netherite_chest',
            'occultism:otherstone'
          ],
          reagent: 'create:brass_hand',
          sourceCost: 7500,
          output: 'masterfulmachinery:autoinfuser_compound_item_port_items_output',
          id: `${id_prefix}autoinfuser_compound_item_port_items_output`
      },
      {
          inputs: [
            'miniutilities:experience_opinium_core',
            'miniutilities:experience_opinium_core',
            'miniutilities:experience_pearl_4x',
            'miniutilities:experience_pearl_4x',
            'minecraft:experience_bottle',
            'minecraft:experience_bottle'

          ],
          reagent: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:diamond_bee' }).weakNBT().toJson(),
          sourceCost: 10000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:experience_bee' }).toJson(),
          id: `${id_prefix}experience_bee`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
