onEvent('recipes', (event) => {

    const recipes = [
      {
        input: { ingredient: { item: 'botania:terrasteel_ingot' } },
        output: { amount: 10, infuse_type: 'kubejs:terrasteel_infuse_type' }
      },

      //Block Terrasteel
      {
        input: { ingredient: { item: 'botania:terrasteel_block' } },
        output: { amount: 90, infuse_type: 'kubejs:terrasteel_infuse_type' }
      },

      //Enriched Terrasteel
      {
        input: { ingredient: { item: 'kubejs:enriched_terrasteel' } },
        output: { amount: 80, infuse_type: 'kubejs:terrasteel_infuse_type' }
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
