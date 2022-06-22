onEvent('item.registry', (event) => {
    const generalItems = [
        'partial_hammer',
        'partial_wirecutter',
        'part_central_windmill',
        'part_garden_cloche',
        'central_windmill',
        'advanced_extreme_circuit_board',
        'extreme_circuit_board',
        'netherite_transistor',
        'uranium_capacitor',
        'unassembled_1k_storage_part',
        'unassembled_4k_storage_part',
        'unassembled_16k_storage_part',
        'unassembled_64k_fluid_storage_part',
        'unassembled_64k_storage_part',
        'unassembled_256k_fluid_storage_part',
        'unassembled_256k',
        'unassembled_1024k_fluid_storage_part',
        'unassembled_1024k',
        'unassembled_4096k_fluid_storage_part',
        'unassembled_4096k',
        'unassembled_16384k_fluid',
        'unassembled_16384k',
        'unassembled_65536k_fluid',
        'unassembled_262144k_fluid',
        'unassembled_1048576k_fluid',
        'charlux',
        'challenges',
        'chunks',
        'discord',
        'sound_muffler',
        'teams',
        'website',
        'basic_capacitor',
        'double-layer_capacitor',
        'octadic_capacitor',
        'crying_obsidian_dust'
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
