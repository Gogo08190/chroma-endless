onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/occultism/miners/ores/';
    const recipes = [
        {
            output: 'emendatusenigmatica:aluminum_chunk',
            weight: 1200,
            id: `${id_prefix}aluminum_chunk`
        },
        {
            output: 'emendatusenigmatica:apatite_chunk',
            weight: 700,
            id: `${id_prefix}apatite_chunk`
        },
        {
            output: 'emendatusenigmatica:bitumen_chunk',
            weight: 1000,
            id: `${id_prefix}bitumen_chunk`
        },
        {
            output: 'emendatusenigmatica:cinnabar_chunk',
            weight: 500,
            id: `${id_prefix}cinnabar_chunk`
        },
        {
            output: 'emendatusenigmatica:coal_chunk',
            weight: 2500,
            id: `${id_prefix}coal_chunk`
        },
        {
            output: 'emendatusenigmatica:copper_chunk',
            weight: 2000,
            id: `${id_prefix}copper_chunk`
        },
        {
            output: 'emendatusenigmatica:diamond_chunk',
            weight: 400,
            id: `${id_prefix}diamond_chunk`
        },
        {
            output: 'emendatusenigmatica:dimensional_chunk',
            weight: 200,
            id: `${id_prefix}dimensional_chunk`
        },
        {
            output: 'emendatusenigmatica:emerald_chunk',
            weight: 350,
            id: `${id_prefix}emerald_chunk`
        },
        {
            output: 'emendatusenigmatica:fluorite_chunk',
            weight: 450,
            id: `${id_prefix}fluorite_chunk`
        },
        {
            output: 'emendatusenigmatica:gold_chunk',
            weight: 550,
            id: `${id_prefix}gold_chunk`
        },
        {
            output: 'emendatusenigmatica:iron_chunk',
            weight: 2000,
            id: `${id_prefix}iron_chunk`
        },
        {
            output: 'emendatusenigmatica:lapis_chunk',
            weight: 500,
            id: `${id_prefix}lapis_chunk`
        },
        {
            output: 'emendatusenigmatica:lead_chunk',
            weight: 1500,
            id: `${id_prefix}lead_chunk`
        },
        {
            output: 'emendatusenigmatica:nickel_chunk',
            weight: 1000,
            id: `${id_prefix}nickel_chunk`
        },
        {
            output: 'emendatusenigmatica:osmium_chunk',
            weight: 1500,
            id: `${id_prefix}osmium_chunk`
        },
        {
            output: 'emendatusenigmatica:potassium_nitrate_chunk',
            weight: 400,
            id: `${id_prefix}potassium_nitrate_chunk`
        },
        {
            output: 'emendatusenigmatica:redstone_chunk',
            weight: 700,
            id: `${id_prefix}redstone_chunk`
        },
        {
            output: 'emendatusenigmatica:silver_chunk',
            weight: 1000,
            id: `${id_prefix}silver_chunk`
        },
        {
            output: 'emendatusenigmatica:sulfur_chunk',
            weight: 2000,
            id: `${id_prefix}sulfur_chunk`
        },
        {
            output: 'emendatusenigmatica:tin_chunk',
            weight: 1800,
            id: `${id_prefix}tin_chunk`
        },
        {
            output: 'emendatusenigmatica:uranium_chunk',
            weight: 500,
            id: `${id_prefix}uranium_chunk`
        },
        {
            output: 'emendatusenigmatica:zinc_chunk',
            weight: 1000,
            id: `${id_prefix}zinc_chunk`
        },
        {
            output: 'occultism:iesnium_ore',
            weight: 100,
            id: `${id_prefix}iesnium_ore`
        },
        {
            output: 'minecraft:glowstone',
            weight: 100,
            id: `${id_prefix}glowstone`
        },
        {
            output: 'emendatusenigmatica:quartz_chunk',
            weight: 400,
            id: `${id_prefix}quartz_chunk`
        },
        {
            output: 'minecraft:ancient_debris',
            weight: 80,
            id: `${id_prefix}ancient_debris`
        },
        {
            output: 'emendatusenigmatica:cobalt_chunk',
            weight: 100,
            id: `${id_prefix}cobalt_chunk`
        },
        {
            output: 'betterendforge:amber_ore',
            weight: 100,
            id: `${id_prefix}amber_ore`
        },
        {
            output: 'betterendforge:ender_ore',
            weight: 100,
            id: `${id_prefix}ender_ore`
        },
        {
            output: 'allthemodium:allthemodium_nugget',
            weight: 120,
            id: `${id_prefix}allthemodium_nugget`
        },
        {
            output: 'allthemodium:vibranium_nugget',
            weight: 100,
            id: `${id_prefix}vibranium_nugget`
        },
        {
            output: 'allthemodium:unobtainium_nugget',
            weight: 100,
            id: `${id_prefix}unobtainium_nugget`
        },
        {
            output: 'elementalcraft:crystalore',
            weight: 250,
            id: `${id_prefix}crystalore`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/ores' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
