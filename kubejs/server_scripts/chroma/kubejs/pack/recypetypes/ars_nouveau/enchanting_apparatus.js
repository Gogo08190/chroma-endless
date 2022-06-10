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
