onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/shaped/';
    const recipes = [

        {
            output: Item.of('powah:dielectric_rod', 8),
            pattern: ['DRD', 'DRD', 'DRD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'mekanism:hdpe_rod'
            },
            id: 'powah:crafting/dielectric_rod'
        },
        {
            output: Item.of('powah:dielectric_rod_horizontal', 8),
            pattern: ['DDD', 'RRR', 'DDD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'mekanism:hdpe_rod'
            },
            id: 'powah:crafting/dielectric_rod_h'
        },
        {
            output: 'powah:dielectric_casing',
            pattern: ['DRD', 'RCR', 'DRD'],
            key: {
                D: 'enderioalloys:item_alloy_ingot_dark_steel',
                R: 'powah:dielectric_rod_horizontal',
                C: 'envirocore:pladium_interconnect'
            },
            id: 'powah:crafting/dielectric_casing'
        },
        {
            output: 'powah:photoelectric_pane',
            pattern: ['DUD', 'UCU', 'DUD'],
            key: {
                D: 'powah:dielectric_paste',
                U: 'pneumaticcraft:upgrade_matrix',
                C: 'undergarden:sediment_glass_pane'
            },
            id: 'powah:crafting/photoelectric_pane'
        },
        {
            output: 'powah:wrench',
            pattern: [' OD', ' DO', 'D  '],
            key: {
                D: 'powah:dielectric_paste',
                O: '#forge:ingots/refined_obsidian'
            },
            id: 'powah:crafting/wrench'
        },
        {
            output: 'powah:battery_basic',
            pattern: ['RCR', 'BAB', 'RLR'],
            key: {
                R: 'powah:dielectric_rod',
                C: 'enderioalloys:item_alloy_ingot_electrical_steel',
                B: 'powah:capacitor_basic_large',
                A: 'enderioalloys:block_alloy_redstone_alloy',
                L: Item.of('thermal:flux_capacitor').ignoreNBT()
            },
            id: 'powah:crafting/battery_basic'
        },
        {
            output: 'powah:solar_panel_basic',
            pattern: ['SSS', 'BCB', 'EEE'],
            key: {
                S: 'powah:photoelectric_pane',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                E: 'enderioalloys:item_alloy_ingot_electrical_steel'
            },
            id: 'powah:crafting/solar_panel_basic'
        },
        {
            output: 'powah:energy_cell_basic',
            pattern: ['FBF', 'BCB', 'FBF'],
            key: {
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                F: 'fluxnetworks:flux_core'
            },
            id: 'powah:crafting/energy_cell_basic'
        },
        {
            output: 'powah:ender_cell_basic',
            pattern: ['FCF', 'CAC', 'FCF'],
            key: {
                F: 'fluxnetworks:flux_block',
                C: 'powah:capacitor_basic_large',
                A: 'powah:ender_core'
            },
            id: 'powah:crafting/ender_cell_basic'
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: [' Q ', 'CAC', 'DED'],
            key: {
                C: 'powah:capacitor_basic_large',
                A: 'powah:dielectric_casing',
                Q: 'refinedstorage:quartz_enriched_iron_block',
                D: 'enderioalloys:item_alloy_ingot_dark_steel',
                E: 'mekanism:energy_tablet'
            },
            id: 'powah:crafting/energizing_rod_basic'
        }
     ];

     powahTiers.forEach(function (tier, index) {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier,
            cable = 'powah:energy_cable_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let lower_tiers = lowerTiers(powahTiers, tier);

        recipes.push(
            {
                output: `powah:battery_${tier}`,
                pattern: ['RCR', 'BAB', 'RLR'],
                key: {
                    R: 'powah:dielectric_rod',
                    C: crystal,
                    B: capacitor,
                    A: 'enderioalloys:block_alloy_redstone_alloy',
                    L: Ingredient.of(lower_tiers.map((item) => `powah:battery_${item}`))
                },
                id: `powah:crafting/battery_${tier}`
            },
            {
                output: Item.of(`powah:energy_cell_${tier}`),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:energy_cell_${item}`))
                },
                id: `powah:crafting/energy_cell_${tier}`
            },
            {
                output: Item.of(`powah:solar_panel_${tier}`),
                pattern: ['BCB', 'AAA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:solar_panel_${item}`))
                },
                id: `powah:crafting/solar_panel_${tier}`
            },
            {
                output: Item.of(`powah:ender_cell_${tier}`),
                pattern: ['FCF', 'CAC', 'FCF'],
                key: {
                    F: 'fluxnetworks:flux_block',
                    C: capacitor,
                    A: 'powah:ender_core'
                },
                id: `powah:crafting/ender_cell_${tier}`
            },
            {
                output: Item.of(`powah:ender_cell_${tier}`),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:ender_cell_${item}`))
                },
                id: `${id_prefix}ender_cell_${tier}`
            },
            {
                output: `powah:energizing_rod_${tier}`,
                pattern: [' Q ', 'CAC', 'DED'],
                key: {
                    C: capacitor,
                    A: 'powah:dielectric_casing',
                    Q: 'refinedstorage:quartz_enriched_iron_block',
                    D: crystal,
                    E: 'mekanism:energy_tablet'
                },
                id: `${id_prefix}energizing_rod_${tier}`
            }
        );

        let previousTierRod, previousTierTransmitter;
        if (index > 1) {
            previousTierRod = `powah:energizing_rod_${powahTiers[index - 1]}`;
            previousTierTransmitter = `powah:player_transmitter_${powahTiers[index - 1]}`;

            recipes.push(
                {
                    output: `powah:player_transmitter_${tier}`,
                    pattern: ['BCB', 'BDB'],
                    key: {
                        B: capacitor,
                        C: previousTierTransmitter,
                        D: 'powah:dielectric_casing'
                    },
                    id: `powah:crafting/player_tranmitter_${tier}`
                },
                {
                    output: `powah:energizing_rod_${tier}`,
                    pattern: [' A ', 'BCB', 'BDB'],
                    key: {
                        A: 'refinedstorage:quartz_enriched_iron_block',
                        B: crystal,
                        C: previousTierRod,
                        D: 'mekanism:energy_tablet'
                    },
                    id: `powah:crafting/energizing_rod_${tier}`
                }
            );
        }
     });


    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
