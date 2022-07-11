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
