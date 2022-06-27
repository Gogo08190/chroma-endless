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
          output: 'extendedcrafting:basic_table',
          pattern: ['BCB', 'MIM', 'BPB'],
          key: {
              B: 'extendedcrafting:basic_component',
              C: 'extendedcrafting:basic_catalyst',
              M: 'create:mechanical_crafter',
              I: 'minecraft:iron_block',
              P: 'extendedcrafting:black_iron_slate'
          },
          id: 'extendedcrafting:basic_table'
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
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
