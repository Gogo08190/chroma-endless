// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'miniutilities:flame_lily_to_blaze_powder'
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
