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
