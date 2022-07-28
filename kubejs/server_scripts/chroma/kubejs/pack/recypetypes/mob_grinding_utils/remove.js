// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'mob_grinding_utils:entity_conveyor',
      'mob_grinding_utils:spawner_upgrade_height',
      'mob_grinding_utils:spawner_upgrade_width'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
