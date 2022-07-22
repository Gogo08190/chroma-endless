// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'minecraft:blaze_powder',
      'byg:therium_shard_and_steel',
      'alexsmobs:flint_n_steel_dropbear_claw',
      'tconstruct:common/glass/vanilla/end_crystal'
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
