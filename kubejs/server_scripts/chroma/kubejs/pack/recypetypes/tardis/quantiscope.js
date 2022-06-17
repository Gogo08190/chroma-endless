onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tardis/quantiscope/';

    // {
    //     inputs: [
    //         { item: 'undergarden:cloggrum_ingot', count: 1 },
    //         { item: 'undergarden:cloggrum_ingot', count: 1 },
    //     ],
    //     output: { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 },
    //     id: `${id_prefix}test`
    // }

    const recipes = [
      {
          input: [
            {item: 'resourcefulbees:ender_bee_spawn_egg', count: 1 },
            {item: 'tardis:xion_crystal', count: 5 }
          ],
          output: {item: 'resourcefulbees:xion_bee_spawn_egg'},
          id: `${id_prefix}xion_bee`
      }

    ];

    recipes.forEach((recipe) => {
      let ingredientss = [];
      recipe.inputs.forEach((input) => {
          ingredientss.push(input);
      });

        event
            .custom({
                type: "tardis:quantiscope",
                repair:false,
                ingredients: ingredientss,
                result: recipe.output,
            })
            .id(recipe.id);
    });
});
