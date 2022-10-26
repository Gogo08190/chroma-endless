onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tardis/quantiscope/';

    /*{
        inputs: [
            { item: 'undergarden:cloggrum_ingot' },
            { item: 'undergarden:cloggrum_ingot' },
        ],
        output: { item: 'pneumaticcraft:ingot_iron_compressed' },
        id: `${id_prefix}test`
    }*/

    const recipes = [
      {
          inputs: [
            Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:ender_bee' }).weakNBT().toJson(),
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' }
          ],
          output: {item: 'resourcefulbees:xion_bee_spawn_egg'},
          id: `${id_prefix}xion_bee`
      },
      {
          inputs: [
            {item: 'tardis:circuit_paste' },
            {item: 'tardis:xion_crystal' },
            {item: 'emendatusenigmatica:electrum_ingot' },
            {item: 'kubejs:extreme_circuit_board' },
            {item: 'thermal:redstone_servo' },
          ],
          output: {item: 'tardis:circuits'},
          id: 'tardis:quantiscope/circuits'
      },
      {
          inputs: [
            {item: 'tardis:circuits' },
            {item: 'tardis:circuits' },
            {item: 'tardis:mercury_bottle' },
            {item: 'tardis:mercury_bottle' },
            {item: 'extendedcrafting:redstone_ingot_block' },
          ],
          output: {item: 'tardis:artron_capacitor'},
          id: 'tardis:quantiscope/artron_capacitor'
      },
      {
          inputs: [
            {item: 'tardis:artron_battery_high' },
            {item: 'tardis:artron_battery_high' },
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nitro"}').weakNBT().toJson(),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:xion"}').weakNBT().toJson(),
            {item: 'tardis:circuits' },
          ],
          output: {item: 'tardis:artron_battery_creative'},
          id: `${id_prefix}artron_battery_creative`
      }
    ];

    recipes.forEach((recipe) => {
      let ingredientss = [];
      recipe.inputs.forEach((input) => {
          ingredientss.push(input);
      });

        event
            .custom({
                type: "tardis:quantiscope",
                repair:false,
                ingredients: ingredientss,
                result: recipe.output,
            })
            .id(recipe.id);
    });
});
