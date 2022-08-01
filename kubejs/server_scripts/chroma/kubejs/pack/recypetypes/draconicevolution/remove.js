// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [
      'materialis:smeltery/melting/metal/draconium/dust',
      'materialis:smeltery/melting/metal/draconium/ore',
      'materialis:smeltery/casting/metal/draconium/ingot_gold_cast',
      'materialis:smeltery/casting/metal/draconium/ingot_sand_cast',
      'materialis:smeltery/casting/metal/draconium/nugget_gold_cast',
      'materialis:smeltery/casting/metal/draconium/nugget_sand_cast',
      'materialis:smeltery/casting/metal/draconium/block'
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
