onEvent('recipes', (event) => {

    const recipes = [
      {
        input: { ingredient: { item: 'botania:terrasteel_ingot' } },
        output: { amount: 10, infuse_type: 'kubejs:terrasteel_infuse_type' }
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
