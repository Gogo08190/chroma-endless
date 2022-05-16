onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                item: 'placebo_code_pool_15',
                rolls: {
                    min: 1.0,
                    max: 1.0,
                    type: 'minecraft:uniform'
                },
                entries: [
                    {
                        type: 'placebo:stack_entry',
                        weight: 10,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:rare_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:epic_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:mythic_tome', count: 1 }
                    },
                    {
                        type: 'apotheosis:affix_entry',
                        min: 1,
                        max: 4,
                        weight: 100,
                        quality: 100,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ]
                    }
                ]
            }
        ]
    };

    event.addJson(`undergarden:loot_tables/chests/catacombs.json`, loot_table);
});

onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            // Incense oddities.
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:bloodthirst"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:regen"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:strength"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:resistance"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:soul_cross"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:emptiness"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:allure"}'),
                    weight: 50
                }
            ]
        },
        {
            // Magic oddities.
            rolls: { min: 6, max: 9 },
            entries: [
                {
                    item: 'botania:blacker_lotus',
                    count: [2, 4],
                    weight: 50
                },
                {
                    item: 'archers_paradox:lightning_arrow',
                    weight: 100,
                    count: [2, 7]
                },
                {
                    item: 'botania:mana_diamond',
                    weight: 50
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"undergarden:forgotten_guardian"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:mana_ring', '{mana:250000}'),
                    weight: 10
                },
                {
                    item: Item.of('botania:mana_ring_greater', '{mana:1000000}'),
                    weight: 2
                },
                {
                    item: 'undergarden:music_disc_mammoth',
                    weight: 20
                },
                {
                    item: 'undergarden:music_disc_relict',
                    weight: 20
                }
            ]
        }
    ];

    event.modify('undergarden:chests/catacombs', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                pool.entries.forEach((entry) => {
                    let count = entry.count ? entry.count : 1,
                        weight = entry.weight ? entry.weight : 1;

                    newPool.addItem(entry.item, weight, count);
                });
            });
        });
    });
});
