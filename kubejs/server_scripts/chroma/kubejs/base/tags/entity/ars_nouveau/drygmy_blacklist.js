onEvent('entity_type.tags', (event) => {
    let entities = ['#chroma:mob_spawner_blacklist'];
    event.get('ars_nouveau:drygmy_blacklist').add(entities);
});
