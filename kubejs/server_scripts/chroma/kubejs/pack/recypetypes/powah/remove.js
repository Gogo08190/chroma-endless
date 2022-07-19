// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'powah:crafting/dielectric_paste_2'
    ];

    const outputRemovals = [
      'powah:capacitor_basic_tiny'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
