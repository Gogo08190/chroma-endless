onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#quark:stone_tool_materials'
            },
            id: 'minecraft:furnace'
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefex}sticks_16`
        },
        // Linking tool
        {
          output: 'pedestals:linkingtool',
          pattern: [' AB',' CD','E  '],
          key: {
              A: 'minecraft:red_dye',
              B: 'minecraft:green_dye',
              C: 'betterendforge:leather_wrapped_stick',
              D: 'minecraft:blue_dye',
              E: 'botania:mana_diamond',
          },
          id: 'pedestals:linkingtool'
        },
        // Upgrade tool
        {
          output: 'pedestals:upgradetool',
          pattern: [' AB',' CD','E  '],
          key: {
              A: 'minecraft:red_dye',
              B: 'minecraft:green_dye',
              C: 'betterendforge:leather_wrapped_stick',
              D: 'minecraft:blue_dye',
              E: 'emendatusenigmatica:lumium_plate',
          },
          id: 'pedestals:upgradetool'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
