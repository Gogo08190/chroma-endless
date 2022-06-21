onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/metallurgic_infusing/';

    /*{
        output: ',
        input: '',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 10,
        id: ''
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
