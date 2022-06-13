onEvent('block.registry', (event) => {
    const blocks = [
        { name: 'spirit_attuned_block', material: 'iron', hardness: 5 },
        { name: 'xnet_machine_frame', material: 'iron', hardness: 5 },
        { name: 'sac', material: 'iron', hardness: 5 }
    ];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
