onEvent('item.registry', (event) => {
    const generalItems = [
        'partial_hammer'
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
