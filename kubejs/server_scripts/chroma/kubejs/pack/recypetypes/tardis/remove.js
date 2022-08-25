// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'tardis:quantiscope_brass_alt1',
      'tardis:quantiscope_brass_alt2',
      'tardis:quantiscope_iron_alt'
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
