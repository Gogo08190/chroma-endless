// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'minecraft:blaze_powder',
      'byg:therium_shard_and_steel',
      'alexsmobs:flint_n_steel_dropbear_claw',
      'tconstruct:common/glass/vanilla/end_crystal',
      'betterendforge:smithing_table_from_terminite_ingot',
      'betterendforge:smithing_table_from_thallasium_ingot'
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
