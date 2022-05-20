onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/mekanism/sawing/';
    const recipes = [
        {
            input: '#minecraft:planks',
            output: Item.of('minecraft:stick', 6),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: 'mekanism:sawing/planks'
        },
        {
            input: '#minecraft:wooden_slabs',
            output: Item.of('minecraft:stick', 3),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.125),
            id: 'mekanism:sawing/slabs'
        },
        {
            input: '#minecraft:wooden_stairs',
            output: Item.of('minecraft:stick', 9),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.375),
            id: 'mekanism:sawing/stairs'
        },
        {
            input: ['botania:livingwood'],
            output: Item.of('6x botania:livingwood_planks'),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: `${id_prefix}livingwood_planks_from_livingwood`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput).id(recipe.id);
    });
});
