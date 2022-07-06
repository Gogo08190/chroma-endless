// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
        'envirocore:items/ct_litherite4',
        'envirocore:items/ct_litherite6',
        'envirocore:items/ct_litherite8'
    ];

    const outputRemovals = [
      'envirocore:litherite_frame',
      'envirocore:erodium_frame',
      'envirocore:kyronite_frame',
      'envirocore:pladium_frame',
      'envirocore:ionite_frame',
      'envirocore:aethium_frame',
      'envirocore:nanorite_frame',
      'envirocore:xerothium_frame'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
