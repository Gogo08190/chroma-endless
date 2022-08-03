onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/elementalcraft/pureinfusion/';

    /*{
        inputs: [
            { item: 'middle' },
            { item: 'water' },
            { item: 'fire' },
            { item: 'earth' },
            { item: 'wind' }
        ],
        element_amount: 100000,
        output: { item: '' },
        id: `${id_prefix}item`
    }*/

    const recipes = [
      // Wormhole Portal Stabilizer
      {
          inputs: [
              { item: 'botania:mana_pearl' },
              { item: 'thermal:redstone_servo' },
              { item: 'wormhole:portal_frame' },
              { item: 'wormhole:portal_frame' },
              { item: 'thermal:redstone_servo' }
          ],
          element_amount: 500,
          output: { item: 'wormhole:portal_stabilizer' },
          id: 'wormhole:portal_stabilizer'
      },

      // Undergarden Catalyst
      {
          inputs: [
              { item: 'ars_elemental:earth_focus' },
              { item: 'botania:dragonstone' },
              { item: 'botania:gaia_ingot' },
              { item: 'botania:gaia_ingot' },
              { item: 'botania:dragonstone' }
          ],
          element_amount: 10000,
          output: { item: 'undergarden:catalyst' },
          id: 'undergarden:catalyst'
      },

      // Cloggrum Bee
      {
          inputs: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
              { item: 'undergarden:cloggrum_block' },
              { item: 'undergarden:cloggrum_block' },
              { item: 'undergarden:cloggrum_block' },
              { item: 'undergarden:cloggrum_block' }
          ],
          element_amount: 15000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:cloggrum_bee' }).toJson(),
          id: `${id_prefix}cloggrum_bee`
      },

      // Froststeel Bee
      {
          inputs: [
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:steel_bee' }).weakNBT().toJson(),
              { item: 'minecraft:blue_ice' },
              { item: 'minecraft:blue_ice' },
              { item: 'minecraft:blue_ice' },
              { item: 'minecraft:blue_ice' }
          ],
          element_amount: 15000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:froststeel_bee' }).toJson(),
          id: `${id_prefix}froststeel_bee`
      },

      // Utherium Bee
      {
          inputs: [
              Item.of('rftoolsutility:syringe', '{mobName:"undergarden:rotwalker",mobId:"undergarden:rotwalker",level:10}').weakNBT().toJson(),
              { item: 'undergarden:utherium_block' },
              { item: 'undergarden:utherium_block' },
              { item: 'undergarden:utherium_block' },
              { item: 'undergarden:utherium_block' }
          ],
          element_amount: 15000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:utherium_bee' }).toJson(),
          id: `${id_prefix}utherium_bee`
      },

      // Regalium Bee
      {
          inputs: [
              { item: 'undergarden:ditchbulb' },
              { item: 'undergarden:regalium_block' },
              { item: 'undergarden:regalium_block' },
              { item: 'undergarden:regalium_block' },
              { item: 'undergarden:regalium_block' }
          ],
          element_amount: 15000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:regalium_bee' }).toJson(),
          id: `${id_prefix}regalium_bee`
      },

      // Forgotten Bee
      {
          inputs: [
              Item.of('rftoolsutility:syringe', '{mobName:"undergarden:forgotten_guardian",mobId:"undergarden:forgotten_guardian",level:10}').weakNBT().toJson(),
              { item: 'undergarden:forgotten_block' },
              { item: 'undergarden:forgotten_block' },
              { item: 'undergarden:forgotten_block' },
              { item: 'undergarden:forgotten_block' }
          ],
          element_amount: 15000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:forgotten_bee' }).toJson(),
          id: `${id_prefix}forgotten_bee`
      },

      // Afrit Essence 
      {
            inputs: [
                { item: 'thermal:xp_crystal' },
                { item: 'occultism:iesnium_ingot' },
                { item: 'elementalcraft:powerful_fire_shard' },
                { item: 'emendatusenigmatica:arcane_gem' },
                { item: 'botania:pixie_dust' }
            ],
            element_amount: 10000,
            output: 'occultism:afrit_essence',
          id: `${id_prefix}afrit_essence`
        }
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });

        event
            .custom({
                type: 'elementalcraft:pureinfusion',
                ingredients: ingredient,
                element_amount: recipe.element_amount,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
