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
              { item: 'ironjetpacks:terrasteel_thruster' },
              { item: 'ironjetpacks:terrasteel_thruster' },
              { item: 'ars_nouveau:sylph_shards' },
              { item: 'ironjetpacks:terrasteel_capacitor' },
              { item: 'ironjetpacks:advanced_coil' },
              { item: 'ironjetpacks:advanced_coil' },
              Item.of('tconstruct:tough_handle', '{Material:"materialis:terrasteel"}'),
              Item.of('tconstruct:tough_handle', '{Material:"materialis:terrasteel"}'),
              { item: 'elementalcraft:pristine_earth_gem' }
          ],
          output: Item.of('ironjetpacks:terrasteel_jetpack').toJson(),
          mana: 2500000,
          id: `${id_prefix}terrasteel_jetpack`
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
