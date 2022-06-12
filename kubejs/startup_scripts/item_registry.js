onEvent('item.registry', (event) => {
    const generalItems = [
        'partial_hammer',
        'partial_wirecutter',
        'part_central_windmill',
        'part_garden_cloche',
        'sac',
        'central_windmill',
        'advanced_extreme_circuit_board',
        'extreme_circuit_board',
        'netherite_transistor',
        'uranium_capacitor'
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
