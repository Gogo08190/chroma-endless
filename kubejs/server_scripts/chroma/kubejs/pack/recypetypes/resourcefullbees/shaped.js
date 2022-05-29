onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
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
          output: '',
          pattern: ['', '', ''],
          key: {
              A: ''
          },
          id: `${id_prefex}oak_woody_bee`
      },
      {
          output: '',
          pattern: ['', '', ''],
          key: {
              A: ''
          },
          id: `${id_prefex}spruce_woody_bee`
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
