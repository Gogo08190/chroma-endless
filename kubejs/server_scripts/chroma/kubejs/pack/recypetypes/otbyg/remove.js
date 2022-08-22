// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'byg:aspen_crafting_table',
      'byg:baobab_crafting_table',
      'byg:bulbis_crafting_table',
      'byg:cherry_crafting_table',
      'byg:cika_crafting_table',
      'byg:cypress_crafting_table',
      'byg:ebony_crafting_table',
      'byg:embur_crafting_table',
      'byg:ether_crafting_table',
      'byg:fir_crafting_table',
      'byg:holly_crafting_table',
      'byg:imparius_crafting_table',
      'byg:jacaranda_crafting_table',
      'byg:lament_crafting_table',
      'byg:mahogany_crafting_table',
      'byg:mangrove_crafting_table',
      'byg:maple_crafting_table',
      'byg:nightshade_crafting_table',
      'byg:palm_crafting_table',
      'byg:pine_crafting_table',
      'byg:rainbow_eucalyptus_crafting_table',
      'byg:redwood_crafting_table',
      'byg:skyris_crafting_table',
      'byg:sythian_crafting_table',
      'byg:willow_crafting_table',
      'byg:witch_hazel_crafting_table',
      'byg:zelkova_crafting_table'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });
});
