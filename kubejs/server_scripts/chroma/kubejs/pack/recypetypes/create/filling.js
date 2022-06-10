onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/filling/';
    const recipes = [
        {
            input: 'minecraft:stone',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            id: `${id_prefix}reinforced_stone`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
