onEvent('recipes', (event) => {
    /*
        ,
        {
            output: ,
            pattern: ['', '', ''],
            key: {
                A:
            },
            id: ''
        }
    */
    const id_prefix = 'chroma:base/ironjetpacks/shaped/';
    const recipes = [
      {
          output: 'ironjetpacks:mechanical_cell' ,
          pattern: ['SES', 'SFS', 'SES'],
          key: {
              S:'create:shaft',
              E:'create:electron_tube',
              F:'create:flywheel'
          },
          id: `${id_prefix}mechanical_cell`
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
