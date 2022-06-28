onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
    const recipes = [

        //Enrichment Chamber
        {
          output: 'mekanism:enrichment_chamber',
          pattern: ['IMI','CSC','IEI'],
          key: {
            E: 'kubejs:extreme_circuit_board',
            I: 'pneumaticcraft:ingot_iron_compressed',
            C: 'pneumaticcraft:capacitor',
            S: 'mekanism:steel_casing',
            M: 'mekanism:metallurgic_infuser'
          },
          id: 'mekanism:enrichment_chamber'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
