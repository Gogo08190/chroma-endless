onEvent('recipes', (event) => {
    /*{
        inputs: [
            { tag: ''#forge:ingots/iron'' }, <-- Si item de type tag
            { item: 'botania:mana_pearl' } <-- Si item de type item
        ],
        output: {
            item: ''
        },
        id: ''
    }*/
    const recipes = [
      {
        inputs: [
          {tag: 'forge:ingots/brass'},
          {item: 'elementalcraft:inertcrystal'}
        ],
        output: {
            item: 'elementalcraft:containedcrystal'
        },
        id: 'elementalcraft:containedcrystal'
      }

    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
