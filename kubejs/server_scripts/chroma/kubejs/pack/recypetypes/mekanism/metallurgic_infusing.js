onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/metallurgic_infusing/';

    /*{
        output: ',
        input: '',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 10,
        id: ''
    }*/

    const recipes = [

      //Refined Obsidian Dust
      {
        output: 'mekanism:dust_refined_obsidian',
        input: 'kubejs:crying_obsidian_dust',
        infusionInput: 'mekanism:diamond',
        infusionAmount: 40,
        id: 'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'
      },

      //Infused Alloy
      {
        output: 'mekanism:alloy_infused',
        input: 'undergarden:cloggrum_ingot',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 20,
        id: 'mekanism:metallurgic_infusing/alloy/infused'
      },

      //Reinforced alloy
      {
        output: 'mekanism:alloy_reinforced',
        input: 'mekanism:alloy_infused',
        infusionInput: 'mekanism:diamond',
        infusionAmount: 40,
        id: 'mekanism:metallurgic_infusing/alloy/reinforced'
      },

      //Atomic alloy
      {
        output: 'mekanism:alloy_atomic',
        input: 'mekanism:alloy_reinforced',
        infusionInput: 'mekanism:refined_obsidian',
        infusionAmount: 80,
        id: 'mekanism:metallurgic_infusing/alloy/atomic'
      },

      //Basic Control Circuit
      {
        output: 'mekanism:basic_control_circuit',
        input: 'rftoolscontrol:cpu_core_2000',
        infusionInput: 'botania:terrasteel_ingot',
        infusionAmount: 40,
        id: 'mekanism:metallurgic_infuser/control_circuit/basic'
      },

      //Advanced Control Circuit
      {
        output: 'mekanism:advanced_control_circuit',
        input: 'mekanism:basic_control_circuit',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 40,
        id: 'mekanism:metallurgic_infuser/control_circuit/advanced'
      },

      //Elite Control Circuit
      {
        output: 'mekanism:elite_control_circuit',
        input: 'mekanism:advanced_control_circuit',
        infusionInput: 'mekanism:diamond',
        infusionAmount: 40,
        id: 'mekanism:metallurgic_infuser/control_circuit/elite'
      },

      //Ultimate Control Circuit
      {
        output: 'mekanism:ultimate_control_circuit',
        input: 'mekanism:elite_control_circuit',
        infusionInput: 'mekanism:refined_obsidian',
        infusionAmount: 80,
        id: 'mekanism:metallurgic_infuser/control_circuit/ultimate'
      },

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
