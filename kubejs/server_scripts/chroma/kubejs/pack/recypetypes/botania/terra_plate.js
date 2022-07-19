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
              { item: 'botania:mana_diamond' }
          ],
          output: Item.of('resourcefulbees:bee_jar', {
              Entity: 'resourcefulbees:terrasteel_bee'
          }).toJson(),
          mana: 2000000,
          id: `${id_prefix}terrasteel_bee_jar`
      },

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
