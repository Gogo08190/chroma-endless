onEvent('recipes', (event) => {

    const recipes = [

      //Ingot Uranium
      {
        input: { ingredient: { item: 'emendatusenigmatica:uranium_ingot' } },
        output: { amount: 10, infuse_type: 'kubejs:uranium' }
      },

      //Block Uranium
      {
        input: { ingredient: { item: 'emendatusenigmatica:uranium_block' } },
        output: { amount: 90, infuse_type: 'kubejs:uranium' }
      },

      //Enriched Uranium WIP
      {
        input: { ingredient: { item: 'kubejs:enriched_terrasteel' } },
        output: { amount: 80, infuse_type: 'kubejs:uranium' }
      },
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        });
    });
});
