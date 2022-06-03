onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/ars_nouveau/enchanting_apparatus/';

    /*{
        inputs: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        reagent: '',
        sourceCost: 5000,
        output: '',
        id: ``
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
