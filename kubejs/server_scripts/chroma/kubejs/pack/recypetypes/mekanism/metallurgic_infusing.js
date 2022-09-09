onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/metallurgic_infusing/';

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
        infusionInput: 'kubejs:uranium',
        infusionAmount: 40,
        id: 'mekanism:control_circuit/basic'
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

      //Dielectric Paste
      {
        output: 'powah:dielectric_paste',
        input: 'kubejs:silicon_grease',
        infusionInput: 'mekanism:carbon',
        infusionAmount: 40,
        id: 'powah:crafting/dielectric_paste'
      },

      //Unstable Draconium Ingot
      {
        output: 'kubejs:unstable_draconium_ingot',
        input: 'kubejs:purified_draconium_dust',
        infusionInput: 'kubejs:kyronite',
        infusionAmount: 20,
        id: `${id_prefix}unstable_draconium_ingot`
      },

      //Draconium Core
      {
        output: 'draconicevolution:draconium_core',
        input: 'kubejs:draconium_core_part',
        infusionInput: 'kubejs:pladium',
        infusionAmount: 60,
        id: 'draconicevolution:components/draconium_core'
      },

      //Wyvern Core
      {
        output: 'draconicevolution:wyvern_core',
        input: 'kubejs:wyvern_core_part',
        infusionInput: 'kubejs:ludicrite',
        infusionAmount: 60,
        id: 'draconicevolution:components/wyvern_core'
      },

      //Energy Core Stabilizer
      {
        output: 'draconicevolution:energy_core_stabilizer',
        input: 'draconicevolution:particle_generator',
        infusionInput: 'mekanism:diamond',
        infusionAmount: 320,
        id: 'draconicevolution:energy_core_stabilizer'
      },
      
      //osmium_bee
      {
        output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:osmium_bee' }).weakNBT().toJson(),
        input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson(),
        infusionInput: 'kubejs:osmium',
        infusionAmount: 320,
        id: 'osmium_bee'
      }

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
