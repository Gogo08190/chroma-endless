onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tardis/quantiscope/';

    /*{
        inputs: [
            { item: 'undergarden:cloggrum_ingot' },
            { item: 'undergarden:cloggrum_ingot' },
        ],
        output: { item: 'pneumaticcraft:ingot_iron_compressed' },
        id: `${id_prefix}test`
    }*/

    const recipes = [
      {
          inputs: [
            {item: 'resourcefulbees:ender_bee_spawn_egg' },
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' },
            {item: 'tardis:xion_crystal' }
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
