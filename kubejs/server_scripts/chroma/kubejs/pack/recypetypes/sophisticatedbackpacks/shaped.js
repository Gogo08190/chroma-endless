onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'sophisticatedbackpacks:iron_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/iron',
              B: 'sophisticatedbackpacks:backpack'
          },
          id: 'sophisticatedbackpacks:iron_backpack'
      },
      {
          output: 'sophisticatedbackpacks:gold_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/gold',
              B: 'sophisticatedbackpacks:iron_backpack'
          },
          id: 'sophisticatedbackpacks:gold_backpack'
      },
      {
          output: 'sophisticatedbackpacks:diamond_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/diamond',
              B: 'sophisticatedbackpacks:gold_backpack'
          },
          id: 'sophisticatedbackpacks:diamond_backpack'
      },
      {
          output: 'sophisticatedbackpacks:netherite_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/netherite',
              B: 'sophisticatedbackpacks:diamond_backpack'
          },
          id: 'sophisticatedbackpacks:netherite_backpack'
      },
      {
          output: 'sophisticatedbackpacks:upgrade_base',
          pattern: ['SPS', 'PLP', 'SPS'],
          key: {
              P: '#forge:plates/iron',
              S: '#forge:string',
              L: '#forge:leather'
          },
          id: 'sophisticatedbackpacks:upgrade_base'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
