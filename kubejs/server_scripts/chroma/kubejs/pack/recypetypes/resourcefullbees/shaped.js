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
          output: Item.of('minecraft:oak_log', 16),
          pattern: ['WHW', 'HSH', 'WHW'],
          key: {
              W: 'resourcefulbees:wax',
              H: 'resourcefulbees:forest_honeycomb',
              S: 'minecraft:oak_sapling'
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
