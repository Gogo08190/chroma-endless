// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'ironfurnaces:crystal_furnace',
      'ironfurnaces:million_furnace',
      'ironfurnaces:rainbow_core',
      'ironfurnaces:rainbow_plating',
      'ironfurnaces:upgrade_allthemodium',
      'ironfurnaces:upgrade_vibranium',
      'ironfurnaces:upgrade_unobtainium',
      'ironfurnaces:upgrade_iron',
      'ironfurnaces:upgrade_gold',
      'ironfurnaces:upgrade_diamond',
      'ironfurnaces:upgrade_gold2',
      'ironfurnaces:upgrade_iron2',
      'ironfurnaces:upgrade_obsidian2',
      'ironfurnaces:upgrade_silver',
      'ironfurnaces:upgrade_copper',
      'ironfurnaces:upgrade_copper',
      'ironfurnaces:upgrade_crystal',
      'ironfurnaces:upgrade_obsidian',
      'ironfurnaces:upgrade_emerald',
      'ironfurnaces:upgrade_silver2',
      'ironfurnaces:upgrade_netherite'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
