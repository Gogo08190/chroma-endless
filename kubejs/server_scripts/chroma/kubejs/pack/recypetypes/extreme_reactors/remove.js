// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
        'bigreactors:reactor/basic/controller_ingots_yellorium',
        'bigreactors:reactor/basic/fuelrod_ingots_yellorium',
        'bigreactors:reactor/reinforced/casing',
        'bigreactors:reactor/reinforced/controller_ingots_yellorium',
        'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium',
        'bigreactors:turbine/reinforced/casing'
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
