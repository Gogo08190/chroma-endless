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
        },
        {
            output: 'powah:player_transmitter_basic',
            pattern: [' T ', 'CAC', 'CEC'],
            key: {
                C: 'powah:capacitor_basic_large',
                A: 'powah:aerial_pearl',
                T: 'immersiveengineering:tesla_coil',
                E: 'powah:aerial_pearl'
            },
            id: 'powah:crafting/player_transmitter_basic'
        },
        {
            output: Item.of('powah:energy_cable_basic', 6),
            pattern: ['CCC', 'SES', 'CCC'],
            key: {
                E: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_rod_horizontal',
                S: 'enderioalloys:item_alloy_ingot_electrical_steel'
            },
            id: 'powah:crafting/cable_basic_2'
        },
        {
            output: 'powah:furnator_basic',
            pattern: ['AAA', 'BCB', 'ADA'],
            key: {
                A: 'enderioalloys:item_alloy_ingot_electrical_steel',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'thermal:dynamo_stirling'
            },
            id: 'powah:crafting/furnator_basic'
        },
        {
            output: 'powah:magmator_basic',
            pattern: ['BAB', 'CDC', 'GFG'],
            key: {
                A: 'pneumaticcraft:small_tank',
                C: 'powah:capacitor_basic_large',
                B: 'enderioalloys:item_alloy_ingot_electrical_steel',
                D: 'powah:dielectric_casing',
                F: 'thermal:dynamo_magmatic',
                G: 'powah:energy_cable_basic'
            },
            id: 'powah:crafting/magmator_basic'
        },
        {
            output: 'powah:thermo_generator_basic',
            pattern: ['EAE', 'BCB', 'DDD'],
            key: {
                A: 'powah:magmator_basic',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'powah:thermoelectric_plate',
                E: 'immersiveengineering:furnace_heater'
            },
            id: 'powah:crafting/thermo_generator_basic'
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
            },
            {
                output: `powah:furnator_${tier}`,
                pattern: ['AAA', 'BCB', 'ADA'],
                key: {
                    A: 'enderioalloys:item_alloy_ingot_electrical_steel',
                    B: capacitor,
                    C: 'powah:dielectric_casing',
                    D: 'thermal:dynamo_stirling'
                },
                id: `powah:crafting/furnator_${tier}`
            },
            {
                output: `powah:magmator_${tier}`,
                pattern: ['BAB', 'CDC', 'GFG'],
                key: {
                    A: 'pneumaticcraft:small_tank',
                    C: capacitor,
                    B: 'enderioalloys:item_alloy_ingot_electrical_steel',
                    D: 'powah:dielectric_casing',
                    F: 'thermal:dynamo_magmatic',
                    G: cable
                },
                id: `powah:crafting/magmator_${tier}`
            },
            {
                output: `powah:thermo_generator_${tier}`,
                pattern: ['EAE', 'BCB', 'DDD'],
                key: {
                    A: `powah:magmator_${tier}`,
                    B: capacitor,
                    C: 'powah:dielectric_casing',
                    D: 'powah:thermoelectric_plate',
                    E: 'immersiveengineering:furnace_heater'
                },
                id: `powah:crafting/thermo_generator_${tier}`
            },
            {
                output: Item.of(`powah:reactor_${tier}`, 2),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    C: 'powah:dielectric_casing',
                    B: capacitor,
                    A: 'kubejs:uranium_capacitor'
                },
                id: `powah:crafting/reactor_${tier}`
            },
        );

        if (tier != 'basic') {
            recipes.push(
              {
                  output: Item.of(`powah:furnator_${tier}`),
                  pattern: ['BCB'],
                  key: {
                      B: capacitor,
                      C: Ingredient.of(lower_tiers.map((item) => `powah:furnator_${item}`))
                  },
                  id: `${id_prefix}furnator_${tier}_upgrade`
              },
              {
                  output: Item.of(`powah:energy_cable_${tier}`, 6),
                  pattern: ['CCC', 'BAB', 'CCC'],
                  key: {
                      A: capacitor,
                      B: Ingredient.of(lower_tiers.map((item) => `powah:energy_cable_${item}`)),
                      C: Ingredient.of('powah:dielectric_rod_horizontal')
                  },
                  id: `powah:crafting/cable_${tier}`
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
                  output: Item.of(`powah:magmator_${tier}`),
                  pattern: ['BAB', 'BCB'],
                  key: {
                      A: cable,
                      B: capacitor,
                      C: Ingredient.of(lower_tiers.map((item) => `powah:magmator_${item}`))
                  },
                  id: `${id_prefix}magmator_${tier}_upgrade`
              },
              {
                  output: Item.of(`powah:thermo_generator_${tier}`),
                  pattern: ['BAB', 'BCB'],
                  key: {
                      A: `powah:magmator_${tier}`,
                      B: capacitor,
                      C: Ingredient.of(lower_tiers.map((item) => `powah:thermo_generator_${item}`))
                  },
                  id: `${id_prefix}thermo_generator_${tier}_upgrade`
              },
            );
        }

        let previousTierRod, previousTierTransmitter;
        if (index > 1) {
            previousTierRod = `powah:energizing_rod_${powahTiers[index - 1]}`;
            previousTierTransmitter = `powah:player_transmitter_${powahTiers[index - 1]}`;
            previousTierReactor = `powah:reactor_${powahTiers[index - 1]}`;

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
                },
                {
                    output: `powah:reactor_${tier}`,
                    pattern: ['BAB', 'BCB'],
                    key: {
                        B: capacitor,
                        A: previousTierReactor,
                        C: crystal
                    },
                    id: `${id_prefix}reactor_${tier}_upgrade`
                },
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
