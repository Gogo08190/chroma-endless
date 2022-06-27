onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/filling/';
    const recipes = [
        {
            input: 'minecraft:stone',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            id: `${id_prefix}reinforced_stone`
        },
        {
            input: 'minecraft:iron_ingot',
            fluid: Fluid.of('thermal:redstone', 288),
            output: 'extendedcrafting:ender_ingot',
            id: 'extendedcrafting:ender_ingot'
        },
        {
            input: 'minecraft:iron_ingot',
            fluid: Fluid.of('tconstruct:molten_ender', 288),
            output: 'extendedcrafting:redstone_ingot',
            id: 'extendedcrafting:redstone_ingot'
        },
        {
            input: 'botania:mana_powder',
            fluid: Fluid.of('thermal:glowstone', 1000),
            output: 'extendedcrafting:luminessence',
            id: 'extendedcrafting:luminessence'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
