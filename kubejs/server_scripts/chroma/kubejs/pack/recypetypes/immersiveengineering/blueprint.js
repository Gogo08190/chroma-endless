onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { tag: 'forge:glass' },
                { tag: 'forge:plates/nickel' },
                { tag: 'forge:wires/copper' },
                { item: 'extendedcrafting:redstone_ingot' }
            ],
            category: 'components',
            output: {
                item: 'immersiveengineering:electron_tube',
                count: 1
            },
            id: 'immersiveengineering:blueprint/electron_tube'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
