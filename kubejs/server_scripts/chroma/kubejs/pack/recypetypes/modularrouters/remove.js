// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      /modularrouters:fluid\/module\/2\/x4/,
      /modularrouters:puller\/module\/2\/x4/,
      /modularrouters:sender\/module\/alt/,
      /modularrouters:sender\/module\/2\/x4/
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
