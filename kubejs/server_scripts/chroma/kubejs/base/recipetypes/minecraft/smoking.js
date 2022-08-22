onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/minecraft/smoking/';
    const recipes = [
        {
            input: 'kubejs:larve',
            output: Item.of('kubejs:cooked_larva'),
            xp: 0.1,
            id: `${id_prefix}cooked_larva_smoking`
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.smoking(recipe.output, recipe.input).id(recipe.id);
        if (recipe.xp) {
            re.xp(recipe.xp);
        }
    });
});
