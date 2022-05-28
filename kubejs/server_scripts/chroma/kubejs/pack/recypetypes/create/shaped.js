onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
      {
        output: Item.of('create:brass_casing', 4),
        pattern: ['ABA', 'BBB', 'ABA'],
        key: {
            A: '#forge:plates/brass',
            B: 'immersiveengineering:treated_wood_horizontal'
        },
        id: 'create:crafting/materials/brass_casing'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
