onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/minecraft/smelting/';
    const recipes = [
        {
            input: '#forge:ores/ender',
            output: Item.of('#forge:shards/ender'),
            xp: 0.5,
            id: `${id_prefix}ender_shard`
        },
        {
            input: '#forge:ores/amber',
            output: Item.of('#forge:shards/amber'),
            xp: 0.5,
            id: `${id_prefix}amber_shard`
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('minecraft:netherite_scrap'),
            xp: 2.0,
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: '#forge:ores/thallasium',
            output: Item.of('#forge:ingots/thallasium'),
            xp: 0.7,
            id: `${id_prefix}thallasium`
        },
        {
            input: '#forge:ores/elementium',
            output: Item.of('#forge:ingots/elementium'),
            xp: 1.0,
            id: `${id_prefix}elementium`
        },
        {
            input: 'farmersdelight:iron_knife',
            output: Item.of('#forge:nuggets/iron'),
            xp: 0.1,
            id: `${id_prefix}iron_nugget_from_iron_knife`
        },
        {
            input: 'farmersdelight:golden_knife',
            output: Item.of('#forge:nuggets/gold'),
            xp: 0.1,
            id: `${id_prefix}gold_nugget_from_gold_knife`
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_ingot'),
            output: Item.of('#forge:ingots/iron'),
            xp: 0.1,
            id: `${id_prefix}iron_nugget_from_iron_knife`
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_nugget'),
            output: Item.of('#forge:nuggets/iron'),
            xp: 0.1,
            id: `${id_prefix}iron_nugget_from_rusty_iron_nugget`
        },
        {
            input: '#forge:dusts/netherite',
            output: Item.of('#forge:ingots/netherite'),
            xp: 0.1,
            id: `${id_prefix}iron_ingot_from_rusty_iron_ingot`
        },
        {
            input: '#forge:ores/aquamarine',
            output: Item.of('#forge:gems/aquamarine'),
            xp: 1.0,
            id: `${id_prefix}aquamarine`
        },
        {
            input: '#forge:dusts/hop_graphite',
            output: 'immersiveengineering:ingot_hop_graphite',
            xp: 0.5,
            id: 'immersiveengineering:ingot_hop_graphite'
        }
    ];

    var stones = [
        'granite',
        'diorite',
        'andesite',
        'limestone',
        'weathered_limestone',
        'dolomite',
        'gabbro',
        'scoria',
        'dark_scoria'
    ];

    stones.forEach((cobblestone) => {
        var stone = `create:${cobblestone}`;
        if (!Item.exists(stone)) {
            stone = `minecraft:${cobblestone}`;
        }
        recipes.push({
            input: `create:${cobblestone}_cobblestone`,
            output: stone,
            id: `${id_prefix}${cobblestone}_from_${cobblestone}_cobblestone`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.smelting(recipe.output, recipe.input).id(recipe.id);
        if (recipe.xp) {
            re.xp(recipe.xp);
        }
    });
});
