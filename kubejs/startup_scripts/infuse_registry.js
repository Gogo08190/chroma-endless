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
        {
            id: 'pladium',
            color: 2307165,
            texture: 'kubejs:infuse_types/base_infuse_type_texture',
            display: 'Pladium'
        },
        {
            id: 'ludicrite',
            color: 11290848,
            texture: 'kubejs:infuse_types/base_infuse_type_texture',
            display: 'Ludicrite'
        },
        {
            id: 'osmium',
            color: 11128776,
            texture: 'kubejs:infuse_types/base_infuse_type_texture',
            display: 'Osmium'
        }
    ];

    generalInfuses.forEach((infuse) => {
        event.create(infuse.id).color(infuse.color).texture(infuse.texture).displayName(infuse.display);
    });
});
