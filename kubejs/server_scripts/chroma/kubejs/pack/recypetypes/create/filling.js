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
            fluid: Fluid.of('tconstruct:molten_ender', 300),
            output: 'extendedcrafting:ender_ingot',
            id: 'extendedcrafting:ender_ingot'
        },
        {
            input: 'minecraft:iron_ingot',
            fluid: Fluid.of('thermal:redstone', 250),
            output: 'extendedcrafting:redstone_ingot',
            id: 'extendedcrafting:redstone_ingot'
        },
        {
            input: 'kubejs:inert_luminessence',
            fluid: Fluid.of('thermal:glowstone', 1000),
            output: 'extendedcrafting:luminessence',
            id: 'extendedcrafting:luminessence'
        },
        {
            input: 'create:refined_radiance',
            fluid: Fluid.of('kubejs:mesophase', 1000),
            output: 'extendedcrafting:crystaltine_ingot',
            id: 'extendedcrafting:crystaltine_ingot'
        },
        {
            input: 'minecraft:ender_pearl',
            fluid: Fluid.of('tconstruct:blazing_blood', 250),
            output: 'minecraft:ender_eye',
            id: 'minecraft:ender_eye'
        },
        {
            input: 'elementalcraft:containedcrystal',
            fluid: Fluid.of('kubejs:litherite_fluid', 250),
            output: 'kubejs:contained_litherite_crystal',
            id: `${id_prefix}contained_litherite_crystal`
        },

        //Energize uranium
        {
          input: 'emendatusenigmatica:uranium_ingot',
          fluid: Fluid.of('thermal:glowstone', 500),
          output: 'kubejs:energized_uranium',
          id: 'mekanism:energized_uranium'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
