// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      /create:crafting\/materials\/andesite_alloy/
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
