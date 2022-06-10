onEvent('block.registry', (event) => {
    const blocks = [
        { name: 'spirit_attuned_block', material: 'iron', hardness: 5 },
        { name: 'Xnet_Machine_Frame', material: 'iron', hardness: 5 }
    ];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
