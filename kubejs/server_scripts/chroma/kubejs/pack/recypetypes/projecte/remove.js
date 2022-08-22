// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'projecte:philosophers_stone_alt',
      'projecte:repair_talisman_alt'
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
