onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/bottler/';

    /*{
        input: '',
        fluid: Fluid.of('', mb),
        output: '',
        energy: 12000,
        id: `${id_prefix}item`
    }*/

    const recipes = [

    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
