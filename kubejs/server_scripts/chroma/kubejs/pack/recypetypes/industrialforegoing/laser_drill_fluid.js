onEvent('recipes', (event) => {
    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"kubejs:silicon_oil",Amount:50}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 100,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens4'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });
});
