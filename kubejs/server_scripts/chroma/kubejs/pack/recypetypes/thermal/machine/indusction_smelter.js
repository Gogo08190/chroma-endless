onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [
        {
            inputs: [Item.of('#forge:ingots/iron', 1), 'minecraft:andesite'],
            outputs: [Item.of('create:andesite_alloy', 9)],
            id: `${id_prefix}andesite_alloy`
        },
        {
            inputs: [Item.of('#forge:ingots/zinc', 1), 'minecraft:andesite'],
            outputs: [Item.of('create:andesite_alloy', 9)],
            id: `${id_prefix}andesite_alloy`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
