onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/crushing/';
    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(recipe.id);
    });
});
