onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/casting_table/';

    var data = {
        recipes: [
          {
              fluid: 'kubejs:molten_mana_diamond',
              fluid_amount: 144,
              casts: [{ tag: 'tconstruct:casts/multi_use/gem' }],
              cast_consumed: false,
              output: 'botania:mana_diamond',
              cooling_time: 79,
              id: `${id_prefix}gold_cast_mana_diamond`
          },
          {
              fluid: 'kubejs:molten_mana_diamond',
              fluid_amount: 144,
              casts: [{ tag: 'tconstruct:casts/single_use/gem' }],
              cast_consumed: true,
              output: 'botania:mana_diamond',
              cooling_time: 79,
              id: `${id_prefix}sand_cast_mana_diamond`
          },
          {
              fluid: 'kubejs:molten_ionite',
              fluid_amount: 144,
              casts: [{ tag: 'tconstruct:casts/multi_use/gem' }],
              cast_consumed: false,
              output: 'envirocore:ionite_crystal',
              cooling_time: 79,
              id: `${id_prefix}gold_cast_ionite_crystal`
          },
          {
              fluid: 'kubejs:molten_ionite',
              fluid_amount: 144,
              casts: [{ tag: 'tconstruct:casts/single_use/gem' }],
              cast_consumed: true,
              output: 'envirocore:ionite_crystal',
              cooling_time: 79,
              id: `${id_prefix}sand_cast_ionite_crystal`
          }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_table',
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
