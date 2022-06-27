onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [
      {
          inputs: ['pneumaticcraft:compressed_brick_tile', 'pneumaticcraft:advanced_pcb', Item.of('thermal:energy_cell').ignoreNBT()],
          outputs: ['masterfulmachinery:assemblylaser_assembly_energy_port_energy_input'],
          id: `${id_prefix}assemblylaser_assembly_energy_port_energy_input`
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
