// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      /create:crafting\/materials\/andesite_alloy/,
      'createaddition:compat/immersiveengineering/constantan',
      'createaddition:crafting/heater_exchange',
      'createaddition:compat/immersiveengineering/electrum',
      'createaddition:compat/tconstruct/hepatizon',
      'createaddition:compat/tconstruct/manyullyn',
      'createaddition:compat/tconstruct/pig_iron',
      'createaddition:compat/tconstruct/queens_slime',
      'createaddition:compat/tconstruct/rose_gold',
      'createaddition:compat/tconstruct/slimesteel_ingot',
      'createaddition:compat/tconstruct/tinkers_bronze',
      'createaddition:crafting/capacitor_2'
    ];

    const outputRemovals = [
      'create:brass_casing',
      'create:crushing_wheel'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
