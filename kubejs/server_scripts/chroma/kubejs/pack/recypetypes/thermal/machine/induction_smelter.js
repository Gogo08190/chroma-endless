onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
