onEvent('item.tags', (event) => {
    event
        .get('chroma:candle_materials')
        .add('minecraft:honeycomb')
        .add('resourcefulbees:wax')
        .add('occultism:tallow');
});
