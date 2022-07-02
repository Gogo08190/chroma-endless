// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
        'envirocore:items/ct_litherite4',
        'envirocore:items/ct_litherite6',
        'envirocore:items/ct_litherite8',
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
