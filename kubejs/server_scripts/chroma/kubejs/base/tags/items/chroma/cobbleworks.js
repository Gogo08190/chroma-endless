onEvent('item.tags', (event) => {
    event.get('chroma:cobbleworks/stone').add(generatableStone);
    event.get('chroma:cobbleworks/cobblestone').add(generatableCobblestone);
    event.get('chroma:cobbleworks/basalt').add(generatableBasalt);
});
