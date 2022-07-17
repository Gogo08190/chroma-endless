onEvent('fluid.registry', (event) => {
    const generalFluids = [
        {
            type: 'thick',
            id: 'molten_compressed_iron',
            texture: '0x868686',
            display: 'Molten Compressed Iron'
        },
        {
            type: 'thick',
            id: 'molten_blazing',
            texture: '0xd79811',
            display: 'Molten Blazing Crystal'
        },
        {
            type: 'thick',
            id: 'molten_energized_steel',
            texture: '0xb89365',
            display: 'Molten Energized Steel'
        },
        {
            type: 'thick',
            id: 'molten_terminite',
            texture: '0x74f3e3',
            display: 'Molten Terminite'
        },
        {
            type: 'thick',
            id: 'molten_aeternium',
            texture: '0x2e847c',
            display: 'Molten Aeternium'
        },
        {
            type: 'thick',
            id: 'molten_gaia_spirit',
            texture: '0x94a0bf',
            display: 'Molten Gaia Spirit'
        },
        {
            type: 'thick',
            id: 'molten_niotic',
            texture: '0x54e5ea',
            display: 'Molten Niotic Crystal'
        },
        {
            type: 'thick',
            id: 'molten_nitro',
            texture: '0xa42022',
            display: 'Molten Nitro Crystal'
        },
        {
            type: 'thick',
            id: 'molten_spirited',
            texture: '0x86c52d',
            display: 'Molten Spirited Crystal'
        },
        {
            type: 'thick',
            id: 'molten_hardened_glass',
            texture: '0x535054',
            display: 'Molten Hardened Glass'
        },
        {
            type: 'thick',
            id: 'molten_signalum_glass',
            texture: '0x968274',
            display: 'Molten Signalum Glass'
        },
        {
            type: 'thick',
            id: 'molten_lumium_glass',
            texture: '0x959674',
            display: 'Molten Lumium Glass'
        },
        {
            type: 'thick',
            id: 'molten_enderium_glass',
            texture: '0x356e5b',
            display: 'Molten Enderium Glass'
        },
        {
            type: 'thick',
            id: 'molten_ionite',
            texture: '0x7ee1fc',
            display: 'Molten Ionite'
        },
        {
            type: 'thick',
            id: 'molten_mana_diamond',
            texture: '0x9ef5fc',
            display: 'Molten Mana Diamond'
        },
        {
            type: 'thick',
            id: 'molten_nether_star',
            texture: '0xead4ff',
            display: 'Molten Nether Star'
        },
        {
            type: 'thick',
            id: 'mesophase',
            texture: '0x56b4dc',
            display: 'Mesophase'
        },
        {
            type: 'thick',
            id: 'cursed_fluid',
            texture: '0x151515',
            display: 'Cursed Fluid'
        },
        {
            type: 'thick',
            id: 'blessed_fluid',
            texture: '0xa5a5a5',
            display: 'Blessed Fluid'
        },
        {
            type: 'thick',
            id: 'blursed_fluid',
            texture: '0x474747',
            display: 'Blursed Fluid'
        },
        {
            type: 'thick',
            id: 'litherite_fluid',
            texture: '0x00502a',
            display: 'Litherite Fluid'
        },
        {
            type: 'thick',
            id: 'resonant_emerald_fluid',
            texture: '0x04846a',
            display: 'Resonant Emerald Fluid'
        },
        {
            type: 'thick',
            id: 'silicon_oil',
            texture: '0xcecac5',
            display: 'Silicon Oil
        }
    ];

    generalFluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).textureThick(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } /*
        else if (fluid.type == 'custom') {
            event.create(fluid.id).displayName(fluid.display).textureStill(fluid.still).textureFlowing(fluid.flowing).bucketColor(fluid.color)
        }*/
    });
});
