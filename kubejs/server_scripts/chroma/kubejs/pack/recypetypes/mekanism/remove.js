// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

      //Combiner
      'mekanism:combiner',
      'mekanism:basic_combining_factory',
      'mekanism:advanced_combining_factory',
      'mekanism:elite_combining_factory',
      'mekanism:ultimate_combining_factory',

      //Control Circuit
      'mekanism:control_circuit/advanced',
      'mekanism:control_circuit/elite',
      'mekanism:control_circuit/ultimate',

      //infusion type coal
      'mekanism:infusion_conversion/carbon/from_charcoal_block',
      'mekanism:infusion_conversion/carbon/from_charcoal',

    ];

    const outputRemovals = [
      'occultism:dictionary_of_spirits'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
