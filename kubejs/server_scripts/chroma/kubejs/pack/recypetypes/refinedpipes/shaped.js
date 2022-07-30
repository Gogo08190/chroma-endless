onEvent('recipes', (event) => {
  const recipes = [
    {
      output: Item.of('refinedpipes:basic_item_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/iron',
        B: '#forge:gears/iron',
        C: '#forge:glass',
        D: 'prettypipes:pipe'
      },
      id: 'refinedpipes:basic_item_pipe'
    },
    {
      output: Item.of('refinedpipes:improved_item_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/gold',
        B: '#forge:gears/gold',
        C: '#forge:glass',
        D: 'refinedpipes:basic_item_pipe'
      },
      id: 'refinedpipes:improved_item_pipe'
    },
    {
      output: Item.of('refinedpipes:advanced_item_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/diamond',
        B: '#forge:gears/quartz',
        C: '#forge:glass',
        D: 'refinedpipes:improved_item_pipe'
      },
      id: 'refinedpipes:advanced_item_pipe'
    },
    {
      output: Item.of('refinedpipes:basic_fluid_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/iron',
        B: '#forge:gears/iron',
        C: '#forge:ingots/slimesteel',
        D: 'ppfluids:fluid_pipe'
      },
      id: 'refinedpipes:basic_fluid_pipe'
    },
    {
      output: Item.of('refinedpipes:improved_fluid_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/gold',
        B: '#forge:gears/gold',
        C: '#forge:ingots/slimesteel',
        D: 'refinedpipes:basic_fluid_pipe'
      },
      id: 'refinedpipes:improved_fluid_pipe'
    },
    {
      output: Item.of('refinedpipes:advanced_fluid_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/diamond',
        B: '#forge:gears/quartz',
        C: '#forge:ingots/slimesteel',
        D: 'refinedpipes:improved_fluid_pipe'
      },
      id: 'refinedpipes:advanced_fluid_pipe'
    },
    {
      output: Item.of('refinedpipes:elite_fluid_pipe', 4),
      pattern: ['ABA', 'CDC', 'AEA'],
      key: {
        A: '#forge:plates/emerald',
        B: 'botania:blaze_block',
        C: '#forge:ingots/slimesteel',
        D: 'refinedpipes:advanced_fluid_pipe',
        E: 'create:blaze_cake'
      },
      id: 'refinedpipes:elite_fluid_pipe'
    },
    {
      output: Item.of('refinedpipes:ultimate_fluid_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/netherite',
        B: '#chroma:stonecuttables/purpur_block',
        C: '#forge:ingots/slimesteel',
        D: 'refinedpipes:elite_fluid_pipe'
      },
      id: 'refinedpipes:ultimate_fluid_pipe'
    },
    {
      output: Item.of('refinedpipes:basic_energy_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/iron',
        B: '#forge:gears/iron',
        C: '#forge:glass',
        D: 'extendedcrafting:redstone_ingot_block'
      },
      id: 'refinedpipes:basic_energy_pipe'
    },
    {
      output: Item.of('refinedpipes:improved_energy_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/gold',
        B: '#forge:gears/gold',
        C: '#forge:glass',
        D: 'refinedpipes:basic_energy_pipe'
      },
      id: 'refinedpipes:improved_energy_pipe'
    },
    {
      output: Item.of('refinedpipes:advanced_energy_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/diamond',
        B: '#forge:gears/quartz',
        C: '#forge:glass',
        D: 'refinedpipes:improved_energy_pipe'
      },
      id: 'refinedpipes:advanced_energy_pipe'
    },
    {
      output: Item.of('refinedpipes:elite_energy_pipe', 4),
      pattern: ['ABA', 'CDC', 'AEA'],
      key: {
        A: '#forge:plates/emerald',
        B: 'botania:blaze_block',
        C: '#forge:glass',
        D: 'refinedpipes:advanced_energy_pipe',
        E: 'create:blaze_cake'
      },
      id: 'refinedpipes:elite_energy_pipe'
    },
    {
      output: Item.of('refinedpipes:ultimate_energy_pipe', 4),
      pattern: ['ABA', 'CDC', 'ABA'],
      key: {
        A: '#forge:plates/netherite',
        B: '#chroma:stonecuttables/purpur_block',
        C: '#forge:glass',
        D: 'refinedpipes:elite_energy_pipe'
      },
      id: 'refinedpipes:ultimate_energy_pipe'
    },
    {
      output: 'refinedpipes:basic_extractor_attachment',
      pattern: ['AAA', 'ABA'],
      key: {
        A: '#forge:plates/steel',
        B: 'create:mechanical_piston'
      },
      id: 'refinedpipes:basic_extractor_attachment'
    },
    {
      output: 'refinedpipes:improved_extractor_attachment',
      pattern: ['AAA', 'ABA'],
      key: {
        A: '#forge:plates/gold',
        B: 'refinedpipes:basic_extractor_attachment'
      },
      id: 'refinedpipes:improved_extractor_attachment'
    },
    {
      output: 'refinedpipes:advanced_extractor_attachment',
      pattern: ['ABA', 'BCB'],
      key: {
        A: 'botania:quartz_mana',
        B: '#forge:plates/diamond',
        C: 'refinedpipes:improved_extractor_attachment'
      },
      id: 'refinedpipes:advanced_extractor_attachment'
    },
    {
      output: 'refinedpipes:elite_extractor_attachment',
      pattern: ['ABA', 'BCB'],
      key: {
        A: 'botania:blaze_block',
        B: '#forge:plates/emerald',
        C: 'refinedpipes:advanced_extractor_attachment'
      },
      id: 'refinedpipes:elite_extractor_attachment'
    },
    {
      output: 'refinedpipes:ultimate_extractor_attachment',
      pattern: ['ABA', 'BCB'],
      key: {
        A: 'quark:chorus_fruit_block',
        B: '#forge:ingots/netherite',
        C: 'refinedpipes:elite_extractor_attachment'
      },
      id: 'refinedpipes:ultimate_extractor_attachment'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
