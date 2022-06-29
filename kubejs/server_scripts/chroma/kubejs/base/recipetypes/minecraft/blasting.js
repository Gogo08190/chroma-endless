onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/minecraft/blasting/';
    const recipes = [
        {
            input: 'architects_palette:rotten_flesh_block',
            output: Item.of('9x occultism:tallow'),
            xp: 0.5,
            id: `${id_prefix}tallow_from_flesh`
        },
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
            xp: 0.5,
            id: `${id_prefix}iron_ingot_from_rusty_iron_ingot`
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_nugget'),
            output: Item.of('#forge:nuggets/iron'),
            xp: 0.5,
            id: `${id_prefix}iron_nugget_from_rusty_iron_nugget`
        },
        {
            input: '#forge:dusts/netherite',
            output: Item.of('#forge:ingots/netherite'),
            xp: 0.5,
            id: `${id_prefix}netherite`
        },
        {
            input: '#forge:dusts/hop_graphite',
            output: 'immersiveengineering:ingot_hop_graphite',
            xp: 0.5,
            id: 'immersiveengineering:ingot_hop_graphite_from_blasting'
        },
        {
            input: ['#forge:slag', 'thermal:rich_slag'],
            output: 'thermal:white_rockwool',
            xp: 0.1,
            id: 'thermal:rockwool/white_rockwool_from_blasting'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.blasting(recipe.output, recipe.input).id(recipe.id);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }
    });
});
