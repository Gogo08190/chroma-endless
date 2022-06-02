// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'botania:mana_tablet'
      'botania:runic_altar'
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
