onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [
      {
          inputs: ['pneumaticcraft:compressed_brick_tile', 'pneumaticcraft:advanced_pcb', Item.of('thermal:energy_cell').ignoreNBT()],
          outputs: ['masterfulmachinery:assemblylaser_assembly_energy_port_energy_input'],
          id: `${id_prefix}assemblylaser_assembly_energy_port_energy_input`
      },
      {
          inputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }), 'emendatusenigmatica:bitumen_block'],
          outputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:bitumen_bee' })],
          id: `${id_prefix}bitumen_bee`
      },
      {
          inputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }), 'emendatusenigmatica:potassium_nitrate_block'],
          outputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:potassium_bee' })],
          id: `${id_prefix}potassium_bee`
      },
      {
          inputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:copper_bee' }), Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:cobalt_bee' }), Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:nether_quartz_bee' })],
          outputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:hepatizon_bee' })],
          id: `${id_prefix}potassium_bee`
      }

    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
