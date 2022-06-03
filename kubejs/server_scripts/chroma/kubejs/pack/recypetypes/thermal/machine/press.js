onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/press/';

    /*{
        inputs: [Item.of('), Ingredient.of('#thermal:crafting/dies/packing_2x2')],
        output: Item.of(''),
        energy: 1000,
        id: ``
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
