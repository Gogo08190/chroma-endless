onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/immersiveengineering/cutting/';
    const recipes = [
        {
            input: '#minecraft:planks',
            output: Item.of('minecraft:stick', 6),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: `${id_prefix}sticks_from_planks`
        },
        {
            input: '#minecraft:wooden_slabs',
            output: Item.of('minecraft:stick', 3),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.125),
            id: `${id_prefix}sticks_from_wooden_slabs`
        },
        {
            input: '#minecraft:wooden_stairs',
            output: Item.of('minecraft:stick', 9),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.375),
            id: `${id_prefix}sticks_from_wooden_stairs`
        },
        {
            input: 'botania:livingwood',
            output: Item.of('6x botania:livingwood_planks'),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: `${id_prefix}livingwood_planks_from_livingwood`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .sawmill(recipe.output, recipe.input, [{ stripping: false, output: recipe.extraOutput }])
            .id(recipe.id);
    });
});
