onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/rolling/';

    const recipes = [
      {
          input: { tag: 'forge:ingots/copper', count: 1 },
          output: { item: 'emendatusenigmatica:copper_rod', count: 1 },
          id: 'createaddition:rolling/copper_ingot'
      },
      {
          input: { tag: 'forge:ingots/iron', count: 1 },
          output: { item: 'emendatusenigmatica:iron_rod', count: 1 },
          id: 'createaddition:rolling/iron_ingot'
      },
      {
          input: { tag: 'forge:ingots/gold', count: 1 },
          output: { item: 'emendatusenigmatica:gold_rod', count: 1 },
          id: 'createaddition:rolling/gold_ingot'
      },
      {
          input: { tag: 'forge:ingots/brass', count: 1 },
          output: { item: 'emendatusenigmatica:brass_rod', count: 1 },
          id: 'createaddition:rolling/brass_ingot'
      },
      {
          input: { tag: 'forge:ingots/steel', count: 1 },
          output: { item: 'emendatusenigmatica:steel_rod', count: 1 },
          id: 'createaddition:rolling/steel_ingot'
      },
      {
          input: { tag: 'forge:ingots/aluminum', count: 1 },
          output: { item: 'emendatusenigmatica:aluminum_rod', count: 1 },
          id: 'createaddition:rolling/aluminum_ingot'
      },
      {
          input: { tag: 'forge:plates/copper', count: 1 },
          output: { item: 'immersiveengineering:wire_copper', count: 1 },
          id: 'createaddition:rolling/copper_plate'
      },
      {
          input: { tag: 'forge:plates/gold', count: 1 },
          output: { item: 'createaddition:gold_wire', count: 1 },
          id: 'createaddition:rolling/gold_plate'
      },
      {
          input: { tag: 'forge:plates/iron', count: 1 },
          output: { item: 'createaddition:iron_wire', count: 1 },
          id: 'createaddition:rolling/iron_plate'
      },
      {
          input: { tag: 'forge:plates/steel', count: 1 },
          output: { item: 'immersiveengineering:wire_steel', count: 1 },
          id: 'createaddition:rolling/steel_plate'
      },
      {
          input: { tag: 'forge:plates/electrum', count: 1 },
          output: { item: 'immersiveengineering:wire_electrum', count: 1 },
          id: 'createaddition:rolling/electrum_plate'
      },
      {
          input: { tag: 'forge:plates/aluminum', count: 1 },
          output: { item: 'immersiveengineering:wire_aluminum', count: 1 },
          id: 'createaddition:rolling/aluminum_plate'
      },
      {
          input: { tag: 'forge:plates/lead', count: 1 },
          output: { item: 'immersiveengineering:wire_lead', count: 1 },
          id: 'createaddition:rolling/lead_plate'
      },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'createaddition:rolling',
                input: recipe.input,
                result: recipe.output
            })
            .id(recipe.id);
    });
});
