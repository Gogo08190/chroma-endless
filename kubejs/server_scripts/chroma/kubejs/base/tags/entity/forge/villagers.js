onEvent('entity_type.tags', (event) => {
    let entities = ['undergarden:stoneborn'];
    event.get('forge:villagers').add(entities);
});
