onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'extendedcrafting:frame',
          pattern: ['BGB', 'GMG', 'BGB'],
          key: {
              B: 'extendedcrafting:black_iron_slate',
              G: 'thermal:obsidian_glass',
              M: 'industrialforegoing:machine_frame_supreme'
          },
          id: 'extendedcrafting:frame'
      },
      {
          output: 'extendedcrafting:compressor',
          pattern: ['PBP', 'CEC', 'PFP'],
          key: {
              B: 'extendedcrafting:ultimate_component',
              C: 'extendedcrafting:ultimate_catalyst',
              P: 'extendedcrafting:black_iron_slate',
              E: 'pneumaticcraft:electrostatic_compressor',
              F: 'extendedcrafting:frame'
          },
          id: 'extendedcrafting:compressor'
      },
      {
          output: 'extendedcrafting:crafting_core',
          pattern: ['PBP', 'CEC', 'PFP'],
          key: {
              B: 'extendedcrafting:ultimate_component',
              C: 'extendedcrafting:ultimate_catalyst',
              P: 'extendedcrafting:black_iron_slate',
              E: 'extrastorage:netherite_crafter',
              F: 'extendedcrafting:frame'
          },
          id: 'extendedcrafting:crafting_core'
      },
      {
        output: 'extendedcrafting:handheld_table',
        pattern: [' C', 'S '],
        key: {
          C: '#forge:workbenches',
          S: '#forge:rods/wooden'
        },
        id: 'extendedcrafting:handheld_table'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
