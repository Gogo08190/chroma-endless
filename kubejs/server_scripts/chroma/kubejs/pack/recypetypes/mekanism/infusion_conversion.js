onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/infusion_conversion/';
    const recipes = [

      //Ingot Uranium
      {
        input: { ingredient: { item: 'kubejs:energized_uranium' } },
        output: { amount: 10, infuse_type: 'kubejs:uranium' },
        id: `${id_prefix}uranium`
      },

      //Block Uranium
      {
        input: { ingredient: { item: 'emendatusenigmatica:uranium_block' } },
        output: { amount: 90, infuse_type: 'kubejs:uranium' },
        id: `${id_prefix}uranium_from_block`
      },

      //Enriched Uranium WIP
      {
        input: { ingredient: { item: 'kubejs:enriched_terrasteel' } },
        output: { amount: 80, infuse_type: 'kubejs:uranium' },
        id: `${id_prefix}uranium_from_enriched`
      },

      //Kyronite Crystal
      {
        input: { ingredient: { item: 'envirocore:kyronite_powder' } },
        output: { amount: 10, infuse_type: 'kubejs:kyronite' },
        id: `${id_prefix}kyronite`
      }
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        }).id(recipe.id);
    });
});
