onEvent('item.tags', (event) => {
    event.get('chroma:slime_dirt').add([
            'tconstruct:earth_slime_dirt',
            'tconstruct:sky_slime_dirt',
            'tconstruct:ichor_slime_dirt',
            'tconstruct:ender_slime_dirt'
        ]);
});
