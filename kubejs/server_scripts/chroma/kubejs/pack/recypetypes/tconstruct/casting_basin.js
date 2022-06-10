onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/casting_basin/';

    var data = {
        recipes: [
          {
              fluid: 'kubejs:molten_compressed_iron',
              fluid_amount: 18,
              casts: [{ item: 'minecraft:stone' }],
              cast_consumed: true,
              output: 'pneumaticcraft:reinforced_stone',
              cooling_time: 10,
              id: `${id_prefix}reinforced_stone`
          }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
