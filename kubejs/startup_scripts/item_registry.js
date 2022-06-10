onEvent('item.registry', (event) => {
    const generalItems = [
        'partial_hammer',
        'partial_wirecutter',
        'part_central_windmill',
        'part_garden_cloche',
        'SAC',
        'central_windmill',
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
