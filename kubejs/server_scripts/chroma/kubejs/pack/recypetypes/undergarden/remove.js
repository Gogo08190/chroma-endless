// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'undergarden:smelt_catalyst'
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
