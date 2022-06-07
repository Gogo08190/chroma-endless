onEvent('recipes', (event) => {

    const recipes = [
        // Linking tool
        {
          output: 'pedestals:linkingtool',
          pattern: [' RG',' SB','M  '],
          key: {
              R: 'minecraft:red_dye',
              G: 'minecraft:green_dye',
              S: 'betterendforge:leather_wrapped_stick',
              B: 'minecraft:blue_dye',
              M: 'botania:mana_diamond'
          },
          id: 'pedestals:linkingtool'
        },
        // Upgrade tool
        {
          output: 'pedestals:upgradetool',
          pattern: [' RG',' SB','L  '],
          key: {
              R: 'minecraft:red_dye',
              G: 'minecraft:green_dye',
              S: 'betterendforge:leather_wrapped_stick',
              B: 'minecraft:blue_dye',
              L: 'emendatusenigmatica:lumium_plate'
          },
          id: 'pedestals:upgradetool'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
