// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'tconstruct:smeltery/casting/ender/eye'
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
