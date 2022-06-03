// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'immersiveengineering:crafting/alloybrick',
      'immersiveengineering:crafting/blastbrick',
      'immersiveengineering:crafting/cokebrick',
      'immersiveengineering:crafting/blastbrick_reinforced',
      'immersiveengineering:crafting/sheetmetal_iron',
      'immersiveengineering:crafting/sheetmetal_steel',
      'immersiveengineering:crafting/sheetmetal_nickel',
      'immersiveengineering:crafting/sheetmetal_lead',
      'immersiveengineering:crafting/sheetmetal_aluminum',
      'immersiveengineering:crafting/sheetmetal_silver',
      'immersiveengineering:crafting/sheetmetal_gold',
      'immersiveengineering:crafting/sheetmetal_copper',
      'immersiveengineering:crafting/sheetmetal_electrum',
      'immersiveengineering:crafting/sheetmetal_constantan',
      'immersiveengineering:crafting/sheetmetal_uranium',
      'immersiveengineering:crafting/windmill'
    ];

    const outputRemovals = [
      'immersiveengineering:hammer',
      'immersiveengineering:wirecutter',
      'immersiveengineering:watermill'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
