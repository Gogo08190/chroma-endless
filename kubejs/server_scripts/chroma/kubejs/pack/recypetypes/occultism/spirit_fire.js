onEvent('recipes', (event) => {

    const id_prefix = 'chroma:pack/occultism/spirit_fire/';

    const recipes = [
        {
            input: 'ironjetpacks:mechanical_cell',
            output: 'ironjetpacks:otherworldian_cell',
            id: `${id_prefix}otherworldian_cell`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });
});
