// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'thermal:furnace_239384839',
      'thermal:rubber_from_vine',
      'thermal:rubber_from_dandelion'
    ];

    const outputRemovals = [

    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
