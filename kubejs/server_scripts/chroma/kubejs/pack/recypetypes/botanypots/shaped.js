onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'botanypots:botany_pot',
            pattern: ['T T', 'TPT', ' T '],
            key: {
                T: 'minecraft:terracotta',
                P: 'supplementaries:planter_rich'
            },
            id: 'botanypots:crafting/botany_pot'
        },
        {
            output: 'botanypots:hopper_botany_pot',
            pattern: ['P', 'C'],
            key: {
                P: 'botanypots:botany_pot',
                C: 'create:smart_chute'
            },
            id: 'botanypots:crafting/hopper_botany_pot'
        }
    ];

    let coloredPots = [
      'white',
      'orange',
      'magenta',
      'light_blue',
      'yellow',
      'lime',
      'pink',
      'gray',
      'light_gray',
      'cyan',
      'purple',
      'blue',
      'brown',
      'green',
      'red',
      'black'
    ];

    coloredPots.forEach((coloredPot) => {
      recipes.push(
        {
          output: `botanypots:${coloredPot}_botany_pot`,
          pattern: ['T T', 'TPT', ' T '],
          key: {
              T: `minecraft:${coloredPot}_terracotta`,
              P: 'supplementaries:planter_rich'
          },
          id: `botanypots:crafting/${coloredPot}_botany_pot`
        },
        {
          output: `botanypots:hopper_${coloredPot}_botany_pot`,
          pattern: ['P', 'C',],
          key: {
              P: `botanypots:${coloredPot}_botany_pot`,
              C: 'create:smart_chute'
          },
          id: `botanypots:crafting/hopper_${coloredPot}_botany_pot`
        },
      );
    });


    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
