onEvent('block.registry', (event) => {
    const blocks = [
        { name: 'spirit_attuned_block', material: 'iron', hardness: 5, display_name: "Block of Spirit Attuned Gem" },
        { name: 'xnet_machine_frame', material: 'iron', hardness: 5, display_name: "Xnet Machine Frame" },
        { name: 'gaia_spirit_block', material: 'iron', hardness: 5, display_name: "Block of Gaia Spirit" },
        { name: 'energized_uranium_block', material: 'iron', hardness: 5, display_name: "Block of Energized Uranium" },
        { name: 'lithium_dust_block', material: 'sand', hardness: 5, display_name: "Lithium Dust Block" }
    ];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness).displayName(block.display_name);
    });
});
