// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron'
    ];

    const outputRemovals = [
      'refinedstorage:controller'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
