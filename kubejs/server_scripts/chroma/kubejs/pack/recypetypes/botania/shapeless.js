onEvent('recipes', (event) => {
    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
