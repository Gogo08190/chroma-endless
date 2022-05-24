onEvent('item.tags', (event) => {
    event.get('chroma:washables/terracotta').add(/minecraft:\w+_terracotta/);
    event
        .get('chroma:washables/rockwool')
        .add(/thermal:\w+_rockwool/)
        .remove('thermal:white_rockwool');
});
