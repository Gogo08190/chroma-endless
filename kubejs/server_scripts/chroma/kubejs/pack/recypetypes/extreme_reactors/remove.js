// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
        'bigreactors:reactor/basic/controller_ingots_yellorium',
        'bigreactors:reactor/basic/fuelrod_ingots_yellorium',
        'bigreactors:reactor/reinforced/casing',
        'bigreactors:reactor/reinforced/controller_ingots_yellorium',
        'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium',
        'bigreactors:turbine/reinforced/casing',
        'bigreactors:blasting/graphite_from_coal',
        'bigreactors:blasting/graphite_from_charcoal',
        'thermal:furnace_1063501746',
        'thermal:furnace_778831531'
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
