// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'sophisticatedbackpacks:advanced_magnet_upgrade'
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
