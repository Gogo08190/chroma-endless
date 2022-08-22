// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'betterendforge:dragon_tree_crafting_table',
      'betterendforge:end_lotus_crafting_table',
      'betterendforge:helix_tree_crafting_table',
      'betterendforge:jellyshroom_crafting_table',
      'betterendforge:lacugrove_crafting_table',
      'betterendforge:lucernia_crafting_table',
      'betterendforge:mossy_glowshroom_crafting_table',
      'betterendforge:pythadendron_crafting_table',
      'betterendforge:tenanea_crafting_table',
      'betterendforge:umbrella_tree_crafting_table'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });
});
