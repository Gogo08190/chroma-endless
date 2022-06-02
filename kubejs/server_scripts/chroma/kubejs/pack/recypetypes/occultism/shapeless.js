onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'kubejs:spirit_attuned_block',
            inputs: [
                '9x occultism:spirit_attuned_gem'
            ],
            id: 'chroma:block_from_ingot/spirit_attuned_block'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
