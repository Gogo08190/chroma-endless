// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'darkutils:crafting/blank_plate'
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
