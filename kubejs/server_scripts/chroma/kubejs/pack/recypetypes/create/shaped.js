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
          output: '4x create:brass_casing',
          pattern: ['BTB', 'TTT', 'BTB'],
          key: {
              A: 'emendatusenigmatica:brass_plate',
              T: 'immersiveengineering:treated_wood_horizontal'
          },
          id: 'create:brass_casing'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
