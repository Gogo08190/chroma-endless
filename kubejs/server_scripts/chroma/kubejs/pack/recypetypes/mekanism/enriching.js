onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/enriching/';

    /*{
        input: '',
        output: '',
        id: ''
    }*/

    const recipes = [

    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
