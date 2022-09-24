onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/';
    const recipes = [
        { output: 'botania:enchanted_soil', inputs: ['minecraft:grass_block', 'botania:overgrowth_seed'] },
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'simplefarming:cornbread', inputs: ['#forge:grain', '#forge:crops/corn', '#forge:grain'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
        { output: Item.of('powah:uraninite', 9), inputs: ['#forge:storage_blocks/uraninite'] },
        { output: Item.of('betterendforge:thallasium_nugget', 9), inputs: ['#forge:ingots/thallasium'] },
        { output: Item.of('betterendforge:terminite_nugget', 9), inputs: ['#forge:ingots/terminite'] },
        {
            output: 'simplefarming:fish_sandwich',
            inputs: [
                '#forge:bread',
                '#forge:crops/tomato',
                '#forge:salad_ingredients'
            ]
        },
        {
            output: 'simplefarming:blt',
            inputs: [
                '#forge:bread',
                '#forge:cooked_bacon',
                '#forge:cooked_bacon',
                '#forge:salad_ingredients',
                '#forge:crops/tomato'
            ],
            id: 'simplefarming:blt'
        },
        {
            output: 'simplefarming:sushi',
            inputs: [
                '#forge:grain',
                'minecraft:dried_kelp'
            ]
        },
        {
            output: 'simplefarming:fish_fillet',
            inputs: ['#forge:grain', '#forge:grain']
        },
        {
            output: Item.of('farmersdelight:milk_bottle', 4),
            inputs: [
                'minecraft:milk_bucket',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        },
        {
            output: 'minecraft:milk_bucket',
            inputs: [
                'minecraft:bucket',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle'
            ]
        },
        {
            output: Item.of('simplefarming:candy', 2),
            inputs: ['#forge:chocolate_bars', 'minecraft:sugar', 'minecraft:sugar']
        },
        { output: 'minecraft:wheat_seeds', inputs: ['minecraft:wheat'] },

        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }),
            inputs: ['minecraft:book', '#forge:dyes/yellow']
        },
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbenches'] },

        {
            output: 'prettypipes:crafting_terminal',
            inputs: ['prettypipes:item_terminal', 'prettypipes:low_crafting_module'],
            id: 'prettypipes:crafting_terminal'
        },
        { output: 'ars_nouveau:mana_gem', inputs: ['emendatusenigmatica:arcane_gem'] },
        { output: 'emendatusenigmatica:arcane_gem', inputs: ['ars_nouveau:mana_gem'] },
        {
            output: 'botania:fertilizer',
            inputs: ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
        },
        { output: 'emendatusenigmatica:dimensional_gem', inputs: ['rftoolsbase:dimensionalshard'] },
        { output: 'rftoolsbase:dimensionalshard', inputs: ['emendatusenigmatica:dimensional_gem'] },

        { output: Item.of('#forge:shards/ender'), inputs: ['#forge:ores/ender', 'thermal:earth_charge'] },
        { output: Item.of('#forge:shards/amber'), inputs: ['#forge:ores/amber', 'thermal:earth_charge'] },

        { output: 'emendatusenigmatica:fluorite_dust', inputs: ['thermal:earth_charge', '#forge:ores/fluorite'] },
        { output: 'emendatusenigmatica:dimensional_dust', inputs: ['thermal:earth_charge', '#forge:ores/dimensional'] },
        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },
        { output: Item.of('occultism:tallow', 9), inputs: ['quark:tallow_block'] },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        { output: Item.of('minecraft:honeycomb', 9), inputs: ['minecraft:honeycomb_block'] },
        { output: Item.of('byg:pollen_dust', 4), inputs: ['byg:pollen_block'] },

        { output: Item.of('betterendforge:lumecorn_seed', 6), inputs: ['betterendforge:lumecorn_rod'] },
        { output: Item.of('betterendforge:bulb_vine_seed', 4), inputs: ['betterendforge:glowing_bulb'] },
        { output: Item.of('betterendforge:end_lily_seed', 1), inputs: ['betterendforge:end_lily_leaf'] },
        { output: Item.of('betterendforge:blue_vine_seed', 4), inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: Item.of('betterendforge:glowing_pillar_seed', 4),
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: Item.of('minecraft:paper', 3),
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        },
        {
            output: 'supplementaries:flax_seeds',
            inputs: ['supplementaries:flax']
        },
        { output: Item.of('byg:quartz_crystal'), inputs: ['minecraft:quartz'] },
        { output: Item.of('minecraft:quartz'), inputs: ['byg:quartz_crystal'] },
        {
            output: 'minecraft:quartz',
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand']
        },
        {
            output: Item.of('botanypots:botany_pot'),
            inputs: ['#botanypots:botany_pots/simple', 'minecraft:water_bucket']
        },
        {
            output: Item.of('botanypots:hopper_botany_pot'),
            inputs: ['#botanypots:botany_pots/hopper', 'minecraft:water_bucket']
        },
        {
            output: Item.of('minecraft:terracotta'),
            inputs: ['#chroma:washables/terracotta', 'minecraft:water_bucket']
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/kenaf', '#forge:crops/kenaf', '#forge:crops/kenaf'],
            id: 'simplefarming:string'
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        },
        {
            output: 'sushigocrafting:soy_seeds',
            inputs: ['sushigocrafting:soy_bean']
        },
        {
            output: Item.of('byg:brimstone', 2),
            inputs: ['minecraft:netherrack', 'byg:sythian_wart_block']
        },
        {
            output: 'minecraft:charcoal',
            inputs: ['#chisel:charcoal'],
            id: `${id_prefix}charcoal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });

    powahTiers.forEach((tier) => {
        if (tier == 'starter') {
            return;
        }
        event.shapeless(`powah:reactor_${tier}`, `powah:reactor_${tier}`);
    });

    colors.forEach(function (color) {
        let otherColors = colors.filter((filterColor) => filterColor !== color);

        let otherSimplePots = otherColors.map((otherColor) => `botanypots:${otherColor}_botany_pot`),
            otherHopperPots = otherColors.map((otherColor) => `botanypots:hopper_${otherColor}_botany_pot`);

        otherSimplePots.push('botanypots:botany_pot');
        otherHopperPots.push('botanypots:hopper_botany_pot');

        event.shapeless(`botanypots:${color}_botany_pot`, [Ingredient.of(otherSimplePots), `#forge:dyes/${color}`]);

        event.shapeless(`botanypots:hopper_${color}_botany_pot`, [
            Ingredient.of(otherHopperPots),
            `#forge:dyes/${color}`
        ]);
    });

    materialsToUnify.forEach((material) => {
        var ore = Item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});
