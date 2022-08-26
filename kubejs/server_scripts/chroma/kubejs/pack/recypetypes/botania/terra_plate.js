onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/terra_plate/';

    /*{
        inputs: [
            { tag: ''#forge:ingots/iron'' }, <-- Si item de type tag
            { item: 'botania:mana_pearl' } <-- Si item de type item
        ],
        output: { item: '' },
        mana: 300000,
        id: ''
    }*/

    const recipes = [
      {
          inputs: [
              { item: 'botania:mana_pearl' },
              { item: 'botania:mana_pearl' },
              { item: 'botania:mana_pearl' },
              { item: 'botania:mana_pearl' }
          ],
          output: { item: 'minecraft:stone' },
          mana: 300000,
          id: `${id_prefix}stone`
      },


      {
          inputs: [
              Item.of('resourcefulbees:bee_jar', {
                  Entity: 'resourcefulbees:manasteel_bee'
              })
                  .weakNBT()
                  .toJson(),
              { item: 'botania:mana_pearl' },
              { item: 'botania:mana_diamond' },
              { item: 'botania:terrasteel_block' },
              { item: 'botania:terrasteel_block' }
          ],
          output: Item.of('resourcefulbees:bee_jar', {
              Entity: 'resourcefulbees:terrasteel_bee'
          }).toJson(),
          mana: 2000000,
          id: `${id_prefix}terrasteel_bee_jar`
      },
      {
          inputs: [
              Item.of('ironjetpacks:otherworldian_jetpack').weakNBT().toJson(),
              Item.of('tconstruct:tough_handle', '{Material:"materialis:terrasteel"}'),
              { item: 'ars_nouveau:sylph_shards' },
              { item: 'ironjetpacks:advanced_coil' },
              { item: 'ironjetpacks:terrasteel_thruster' },
              { item: 'ironjetpacks:terrasteel_capacitor' },
              { item: 'ironjetpacks:terrasteel_thruster' },
              { item: 'elementalcraft:pristine_earth_gem' },
              { item: 'ironjetpacks:advanced_coil' },
              Item.of('tconstruct:tough_handle', '{Material:"materialis:terrasteel"}')
          ],
          output: Item.of('ironjetpacks:terrasteel_jetpack').toJson(),
          mana: 2500000,
          id: `${id_prefix}terrasteel_jetpack`
      },
      {
          inputs: [
              { item: 'botania:manasteel_ingot' },
              { item: 'botania:mana_pearl' },
              { item: 'ironjetpacks:otherworldian_cell' },
              { item: 'botania:mana_diamond' }
          ],
          output: { item: 'ironjetpacks:terrasteel_cell' },
          mana: 2500000,
          id: `${id_prefix}terrastell_cell`
      },
      {
          inputs: [
              Item.of('botania:terra_sword', '{Damage:0}').weakNBT(),
              { item: 'extendedcrafting:nether_star_block' },
              { item: 'minecraft:blaze_rod' },
              { item: 'minecraft:blaze_rod' },
              { item: 'minecraft:blaze_rod' },
              { item: 'minecraft:blaze_rod' },
              { item: 'minecraft:blaze_rod' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' }
          ],
          output: { item: 'wstweaks:blaze_blade' },
          mana: 125000,
          id: 'wstweaks:blaze_blade'
      },
      {
          inputs: [
              Item.of('botania:terra_sword', '{Damage:0}').weakNBT(),
              { item: 'extendedcrafting:nether_star_block' },
              { item: 'minecraft:lava_bucket' },
              { item: 'minecraft:lava_bucket' },
              { item: 'minecraft:lava_bucket' },
              { item: 'minecraft:lava_bucket' },
              { item: 'minecraft:lava_bucket' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' },
              { item: 'minecraft:wither_skeleton_skull' }
          ],
          output: { item: 'wstweaks:lava_blade' },
          mana: 125000,
          id: 'wstweaks:lava_blade'
      },
      {
          inputs: [
              { item: 'empty_creative_pool' },
              { item: 'botania:blacker_lotus' },
              { item: 'botania:blacker_lotus' },
              { item: 'botania:blacker_lotus' },
              { item: 'kubejs:gaia_spirit_block' },
              { item: 'kubejs:gaia_spirit_block' },
              { item: 'kubejs:gaia_spirit_block' }
          ],
          output: { item: 'botania:creative_pool' },
          mana: 5000000,
          id: `${id_prefix}creative_pool`
      }

    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
