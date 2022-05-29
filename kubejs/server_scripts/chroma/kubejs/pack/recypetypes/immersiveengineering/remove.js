// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'immersiveengineering:crafting/alloybrick',
      'immersiveengineering:crafting/blastbrick',
      'immersiveengineering:crafting/cokebrick',
      'immersiveengineering:crafting/blastbrick_reinforced'
    ];

    const outputRemovals = [
      'immersiveengineering:hammer'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
