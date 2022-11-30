// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'creativeapiary:creative_apiary_breeder',
      'resourcefulbees:wooden_honey_tank',
      'resourcefulbees:nether_honey_tank',
      'resourcefulbees:purpur_honey_tank'
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
