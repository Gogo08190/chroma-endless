// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'creativeapiary:creative_apiary_breeder'
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
