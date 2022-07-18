onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ars_nouveau/enchanting_apparatus/';

    /*{
        inputs: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        reagent: '',
        sourceCost: 5000,
        output: '',
        id: ``
    }*/

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

      //Ender gate (basic)

      {
          inputs: [
            'powah:dielectric_paste',
            'powah:dielectric_paste',
            'powah:dielectric_paste',
            'powah:dielectric_paste',
            'powah:capacitor_basic_large',
            'powah:capacitor_basic_large',
            'powah:capacitor_basic_large',
            'powah:capacitor_basic_large',
          ],
          reagent: 'powah:ender_core',
          sourceCost: 5000,
          output: '2x powah:ender_gate_basic',
          id: 'powah:crafting/ender_gate_basic'
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
