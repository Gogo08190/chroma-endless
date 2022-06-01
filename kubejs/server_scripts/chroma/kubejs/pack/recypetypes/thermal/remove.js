// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'thermal:machine_frame'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
