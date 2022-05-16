onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:

    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: ['powah:charged_snowball', 'thermal:lightning_charge'],
            text: [Text.of('Calls down a lightning bolt on impact.').gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator'],
            text: [Text.of('Recipe disabled for Chroma Endless').gold()]
        },
        {
            items: ['tconstruct:crafting_station', 'tconstruct:part_builder', 'tconstruct:tinker_station'],
            text: [Text.of('Craftable with any wood.').gold()]
        },
        {
            items: ['tconstruct:scorched_anvil', 'tconstruct:tinkers_anvil'],
            text: [Text.of('Craftable with any alloy blocks.').gold()]
        },
        {
            items: [
                'engineersdecor:rebar_concrete_tile_stairs',
                'engineersdecor:rebar_concrete_tile_slab',
                'engineersdecor:rebar_concrete_tile',
                'engineersdecor:rebar_concrete_wall',
                'engineersdecor:rebar_concrete_stairs',
                'engineersdecor:rebar_concrete_slab',
                'engineersdecor:rebar_concrete',
                'thermal:enderium_glass',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass',
                'engineersdecor:panzerglass_block'
            ],
            text: [Text.of('Immune to the Wither').color('#4F0D75')]
        },
        {
            items: ['modularrouters:blast_upgrade'],
            text: [Text.of('Renders routers immune to the Wither').color('#4F0D75')]
        },
        {
            items: [
                'rftoolsbuilder:shield_block4',
                'rftoolsbuilder:shield_block3',
                'rftoolsbuilder:shield_block2',
                'rftoolsbuilder:shield_block1'
            ],
            text: [Text.of('Shield Projections are immune to the Wither').color('#4F0D75')]
        },
        {
            items: ['#chroma:burning_hot'],
            text: [Text.of('Extremely hot!').darkRed()]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [
                Text.of(`Tiered Beehives have been depreciated.`).red(),
                Text.of(`Use the Hive Upgrade items on nests found in the world instead.`).red(),
                Text.of(`Tiered Beehives can be converted to Hive Upgrades in a crafting grid.`).red()
            ]
        },
        {
            items: ['clockout:clockout_block'],
            text: [Text.of(`Outputs redstone when the player is online.`).aqua()]
        }
    ];

    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: ['refinedstorage:' + item],
            text: ['Can be dyed through crafting or by right clicking it with dye in-world.']
        });
    });

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
