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
          output: 'tconstruct:netherite_item_frame',
          pattern: [' A ', 'ABA', ' A '],
          key: {
              A:'#forge:ingots/netherite',
              B:'tconstruct:obsidian_pane'
          },
          id: 'tconstruct:gadgets/frame/netherite'
      }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
