// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'tconstruct:grout',
      'tconstruct:nether_grout'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
