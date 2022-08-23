// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'projecte:philosophers_stone_alt',
      'projecte:repair_talisman_alt'
    ];

    const outputRemovals = [
      'projecte:low_covalence_dust',
      'projecte:medium_covalence_dust',
      'projecte:high_covalence_dust'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
