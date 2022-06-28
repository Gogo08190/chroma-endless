onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/betterendforge/infusion/';
    var data = {
        recipes: [
            {
                input: 'rftoolsutility:crafter3',
                output: 'extendedcrafting:ender_crafter',
                catalysts: [
                    { index: 0, item: 'rftoolsbase:infused_enderpearl' },
                    { index: 1, item: 'betterendforge:aeternium_ingot' },
                    { index: 2, item: 'betterendforge:eternal_crystal' },
                    { index: 3, item: 'extendedcrafting:ender_ingot' },
                    { index: 4, item: 'emendatusenigmatica:enderium_gear' },
                    { index: 5, item: 'extendedcrafting:ender_ingot' },
                    { index: 6, item: 'betterendforge:eternal_crystal' },
                    { index: 7, item: 'betterendforge:aeternium_ingot' }
                ],
                time: 250,
                id: 'extendedcrafting:ender_crafter'
            },
            {
                input: 'occultism:otherstone_pedestal',
                output: 'extendedcrafting:ender_alternator',
                catalysts: [
                    { index: 0, item: 'betterendforge:eternal_crystal' },
                    { index: 2, item: 'extendedcrafting:ender_ingot' },
                    { index: 3, item: 'extendedcrafting:ender_ingot' },
                    { index: 4, item: 'emendatusenigmatica:enderium_gear' },
                    { index: 5, item: 'extendedcrafting:ender_ingot' },
                    { index: 6, item: 'extendedcrafting:ender_ingot' },
                ],
                time: 250,
                id: 'extendedcrafting:ender_alternator'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:infusion',
                input: Ingredient.of(recipe.input).toJson(),
                output: recipe.output,
                time: recipe.time,
                catalysts: recipe.catalysts
            })
            .id(recipe.id);
    });
});
