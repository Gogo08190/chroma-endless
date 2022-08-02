onEvent('infuse_type.registry', (event) => {
    const generalInfuses = [
        {
            id: 'uranium',
            color: 10007376,
            texture: 'kubejs:infuse_types/base_infuse_type_texture',
            display: 'Uranium'
        },
        {
            id: 'kyronite',
            color: 7152994,
            texture: 'kubejs:infuse_types/base_infuse_type_texture',
            display: 'Kyronite'
        },
    ];

    generalInfuses.forEach((infuse) => {
        event.create(infuse.id).color(infuse.color).texture(infuse.texture).displayName(infuse.display);
    });
});
