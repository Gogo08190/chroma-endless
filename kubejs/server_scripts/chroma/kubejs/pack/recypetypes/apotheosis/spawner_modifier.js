onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/apotheosis/spawner_modifier/';
    const recipes = [
        {
            mainhand: { item: 'ars_nouveau:glyph_freeze' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'no_ai',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/no_ai'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_freeze' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'no_ai',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/no_ai_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:summon_focus' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'ignore_players',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/ignore_players'
        },
        {
            mainhand: { item: 'ars_nouveau:summon_focus' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'ignore_players',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/ignore_players_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_intangible' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'ignore_conditions',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/ignore_conditions'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_intangible' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'ignore_conditions',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/ignore_conditions_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_light' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'ignore_light',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/ignore_light'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_light' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'ignore_light',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/ignore_light_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_linger' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: 2,
                    min: -1,
                    max: 10
                }
            ],
            id: 'apotheosis:spawner/max_nearby'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_linger' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/max_nearby_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_delay' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'min_delay',
                    value: -5,
                    min: 100,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_delay' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'min_delay',
                    value: 5,
                    min: -1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_summon_decoy' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: 1,
                    min: -1,
                    max: 5
                }
            ],
            id: 'apotheosis:spawner/spawn_count'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_summon_decoy' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_count_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:ritual_scrying' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: 2,
                    min: -1,
                    max: 50
                }
            ],
            id: 'apotheosis:spawner/player_range'
        },
        {
            mainhand: { item: 'ars_nouveau:ritual_scrying' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/player_range_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_aoe' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: 1,
                    min: -1,
                    max: 32
                }
            ],
            id: 'apotheosis:spawner/spawn_range'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_aoe' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_range_inverted'
        },
        {
            mainhand: { item: 'enderioalloys:item_material_skull_zombie_controller' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'redstone_control',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/redstone_control'
        },
        {
            mainhand: { item: 'enderioalloys:item_material_skull_zombie_controller' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'redstone_control',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/redstone_control_inverted'
        },
        {
            mainhand: { item: 'mekanism:upgrade_muffling' },
            offhand: { item: 'storagedrawers:emerald_storage_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'silent',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/silent'
        },
        {
            mainhand: { item: 'mekanism:upgrade_muffling' },
            offhand: { item: 'storagedrawers:one_stack_upgrade' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'silent',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/silent_inverted'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:spawner_modifier';
        recipe.conditions = [{ type: 'apotheosis:module', module: 'spawner' }];
        event.custom(recipe).id(recipe.id);
    });
});
