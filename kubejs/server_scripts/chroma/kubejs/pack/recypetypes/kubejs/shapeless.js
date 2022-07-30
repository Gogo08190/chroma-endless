onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'kubejs:spirit_attuned_block',
            inputs: [
                '9x occultism:spirit_attuned_gem'
            ],
            id: 'chroma:block_from_ingot/spirit_attuned_block'
        },
        {
            output: Item.of('occultism:spirit_attuned_gem', 9),
            inputs: [
                'kubejs:spirit_attuned_block'
            ],
            id: 'chroma:ingot_from_block/spirit_attuned_gem'
        },
        {
            output: 'kubejs:energized_uranium_block',
            inputs: [
                '9x kubejs:energized_uranium'
            ],
            id: 'chroma:block_from_ingot/energized_uranium_block'
        },
        {
            output: Item.of('kubejs:energized_uranium', 9),
            inputs: [
                'kubejs:energized_uranium_block'
            ],
            id: 'chroma:ingot_from_block/energized_uranium'
        },
        {
            output: 'kubejs:gaia_spirit_block',
            inputs: [
                '9x botania:gaia_ingot'
            ],
            id: 'chroma:block_from_ingot/gaia_spirit_block'
        },
        {
            output: Item.of('botania:gaia_ingot', 9),
            inputs: [
                'kubejs:gaia_spirit_block'
            ],
            id: 'chroma:ingot_from_block/gaia_spirit_ingot'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
