// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'mctb:spruce_crafting_table',
      'mctb:birch_crafting_table',
      'mctb:acacia_crafting_table',
      'mctb:jungle_crafting_table',
      'mctb:dark_oak_crafting_table',
      'mctb:crimson_crafting_table',
      'mctb:warped_crafting_table'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });
});
