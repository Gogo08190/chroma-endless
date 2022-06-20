onEvent('recipes', (event) => {
    /*
    ,
    {
        output: '',
        inputs: [''],
        id: ''
    }
*/

    const recipes = [
        {
            output: '9x enderioalloys:item_alloy_nugget_pulsating_iron',
            inputs: ['enderioalloys:item_alloy_ingot_pulsating_iron'],
            id: 'enderioalloys:item_alloy_nugget_pulsating_iron'
        },
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});