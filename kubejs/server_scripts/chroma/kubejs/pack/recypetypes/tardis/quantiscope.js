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
