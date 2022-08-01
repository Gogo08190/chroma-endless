// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'materialis:smeltery/melting/metal/draconium/dust',
      'materialis:smeltery/melting/metal/draconium/ore'
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
