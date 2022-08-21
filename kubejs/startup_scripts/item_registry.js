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
        'unassembled_256k_storage_part',
        'unassembled_1024k_fluid_storage_part',
        'unassembled_1024k_storage_part',
        'unassembled_4096k_fluid_storage_part',
        'unassembled_4096k_storage_part',
        'unassembled_16384k_fluid_storage_part',
        'unassembled_16384k_storage_part',
        'unassembled_65536k_fluid_storage_part',
        'unassembled_262144k_fluid_storage_part',
        'unassembled_1048576k_fluid_storage_part',
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
        'crying_obsidian_dust',
        'inert_luminessence',
        'koepss',
        'gogo',
        'contained_litherite_crystal',
        'solar_cell_base',
        'litherite_photovoltaic_panel',
        'erodium_photovoltaic_panel',
        'kyronite_photovoltaic_panel',
        'pladium_photovoltaic_panel',
        'ionite_photovoltaic_panel',
        'aethium_photovoltaic_panel',
        'nanorite_photovoltaic_panel',
        'xerothium_photovoltaic_panel',
        'energized_uranium',
        'silicon_grease',
        'chroma_matter',
        'unstable_draconium_ingot',
        'purified_draconium_dust',
        'sac',
        'noli',
        'enriched_energized_uranium',
        'draconium_core_part',
        'wyvern_core_part',
        'enriched_kyronite',
        'enriched_ludicrite',
        'enriched_pladium',
        'larve',
        'cooked_larva'
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
