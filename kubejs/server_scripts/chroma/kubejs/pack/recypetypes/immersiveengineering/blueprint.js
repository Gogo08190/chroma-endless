onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { tag: 'forge:glass' },
                { tag: 'forge:plates' },
                { tag: 'forge:wires/copper' },
                { item: 'extendedcrafting:redstone_ingot' }
            ],
            category: 'components',
            output: {
                item: 'immersiveengineering:electron_tube',
                count: 3
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
