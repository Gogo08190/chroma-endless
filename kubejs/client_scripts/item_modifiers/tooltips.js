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
            items: ['clockout:clockout_block'],
            text: [Text.of(`Outputs redstone when the player is online.`).aqua()]
        },
        {
            items: ['kubejs:creative_catalyst'],
            text: [Text.of(`Obtained in the Void ore miner (Black Hole Harvester card) from Tier 8 in The End.`).gold()]
        },
        {
            items: ['projecte:high_covalence_dust'],
            text: [
              Text.of(`Obtained in the Void ore miner (Black Hole Harvester card) from Tier 5 in The End.`).gold(),
              Text.of(`More drop with Blue Lens`).blue()
            ]
        },
        {
            items: ['projecte:low_covalence_dust'],
            text: [
              Text.of(`Obtained in the Void ore miner (Black Hole Harvester card) from Tier 5 in The End.`).gold(),
              Text.of(`More drop with Lime Lens`).green()
            ]
        },
        {
            items: ['projecte:medium_covalence_dust'],
            text: [
              Text.of(`Obtained in the Void ore miner (Black Hole Harvester card) from Tier 5 in The End.`).gold(),
              Text.of(`More drop with Cyan Lens`).aqua()
            ]
        },
        {
            items: ['ironjetpacks:nitro_cell'],
            text: [
              Text.of(`Obtained in the Void ore miner (Black Hole Harvester card) from Tier 3 in The End.`).gold(),
              Text.of(`More drop with Red Lens`).red()
            ]
        },
        {
            items: ['ironjetpacks:nitro_thruster'],
            text: [
              Text.of(`Obtained in the Void ore miner (Black Hole Harvester card) from Tier 3 in The End.`).gold(),
              Text.of(`More drop with Red Lens`).red()
            ]
        },
        {
            items: ['create:andesite_alloy'],
            text: [
              Text.of(`You can also get it in the Void ore miner (Black Hole Harvester card) from Tier 1.`).gold(),
              Text.of(`More drop with Gray Lens`).gray()
            ]
        },
        {
            items: ['emendatusenigmatica:coke_gem'],
            text: [
              Text.of(`You can also get it in the Void ore miner (Black Hole Harvester card) from Tier 4.`).gold(),
              Text.of(`More drop with Black Lens`).black()
            ]
        },
        {
            items: ['powah:dielectric_paste'],
            text: [
              Text.of(`You can also get it in the Void ore miner (Black Hole Harvester card) from Tier 7.`).gold(),
              Text.of(`More drop with Black Lens`).black()
            ]
        },
        {
            items: ['occultism:otherstone'],
            text: [
              Text.of(`You can also get it in the Void ore miner (Black Hole Harvester card) from Tier 1.`).gold(),
              Text.of(`More drop with Black Lens`).black()
            ]
        },
        {
            items: ['occultism:otherworld_log'],
            text: [
              Text.of(`You can also get it in the Void ore miner (Black Hole Harvester card) from Tier 1.`).gold(),
              Text.of(`More drop with Purple Lens`).darkPurple()
            ]
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
