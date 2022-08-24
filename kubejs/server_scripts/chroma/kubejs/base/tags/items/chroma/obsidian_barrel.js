onEvent('item.tags', (event) => {
    event.get('chroma:obsidian_barrel').add([
            'metalbarrels:obsidian_barrel',
            'expandedstorage:obsidian_barrel'
        ]);
});
