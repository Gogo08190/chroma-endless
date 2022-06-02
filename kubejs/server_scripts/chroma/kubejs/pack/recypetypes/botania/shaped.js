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
          output: 'botania:mana_pylon',
          pattern: [' A ', 'BCB', ' A '],
          key: {
              A:'arsarsenal:source_steel_ingot',
              B:'botania:manasteel_block',
              C:'botania:mana_diamond_block'
          },
          id: 'botania:mana_pylon'
      },
      {
          output: 'botania:mana_spreader',
          pattern: ['AAA', 'BC ', 'AAA'],
          key: {
              A:'botania:livingwood',
              B:'arsarsenal:source_steel_ingot',
              C:'#botania:petals'
          },
          id: 'botania:mana_spreader'
      },
      {
          output: 'botania:mana_pool',
          pattern: ['   ', 'ABA ', 'AAA'],
          key: {
              A:'botania:livingrock',
              B:'botania:mana_tablet'
          },
          id: 'botania:mana_pool'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
