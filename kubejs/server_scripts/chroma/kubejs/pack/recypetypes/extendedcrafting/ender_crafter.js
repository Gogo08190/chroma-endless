onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/ender_crafter/';
    const recipes = [
       /* {
          pattern: [' A ', 'BAB', ' A '],
          key: {
            A: 'ItemA',
            B: 'ItemB'
          },
          result: {
            {item: 'extendedcrafting:enhanced_ender_ingot', count: 1}
          },
          id: `${id_prefix}blabla`
      } */
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'extendedcrafting:shaped_ender_crafter',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
