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
          },
          {
              fluid: 'tconstruct:molten_gold',
              fluid_amount: 576,
              casts: [{ item: 'extendedcrafting:redstone_ingot' }],
              cast_consumed: true,
              output: 'minecraft:clock',
              cooling_time: 120,
              id: 'tconstruct:smeltery/casting/metal/gold/clock'
          },
          {
              fluid: 'tconstruct:molten_iron',
              fluid_amount: 576,
              casts: [{ item: 'extendedcrafting:redstone_ingot' }],
              cast_consumed: true,
              output: 'minecraft:compass',
              cooling_time: 120,
              id: 'tconstruct:smeltery/casting/metal/iron/compass'
          },
          {
              fluid: 'materialis:molten_fairy',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:fairy_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}fairy_bee`
          },
          {
              fluid: 'tconstruct:molten_cobalt',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:nether_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:cobalt_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}cobalt_bee`
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
