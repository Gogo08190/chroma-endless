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
          },
          {
              fluid: 'tconstruct:earth_slime',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:slime_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}slime_bee`
          },
          {
              fluid: 'emendatusenigmatica:molten_coal',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:coal_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}coal_bee`
          },
          {
              fluid: 'tconstruct:molten_iron',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}iron_bee`
          },
          {
              fluid: 'thermal:redstone',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:redstone_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}redstone_bee`
          },
          {
              fluid: 'emendatusenigmatica:molten_lapis',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:lapis_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}lapis_bee`
          },
          {
              fluid: 'tconstruct:molten_gold',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}gold_bee`
          },
          {
              fluid: 'tconstruct:molten_copper',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:copper_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}copper_bee`
          },
          {
              fluid: 'tconstruct:molten_aluminum',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:aluminum_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}aluminum_bee`
          },
          {
              fluid: 'tconstruct:molten_lead',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:lead_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}lead_bee`
          },
          {
              fluid: 'tconstruct:molten_nickel',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:nickel_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}nickel_bee`
          },
          {
              fluid: 'tconstruct:molten_silver',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:silver_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}silver_bee`
          },
          {
              fluid: 'tconstruct:molten_tin',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:tin_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}tin_bee`
          },
          {
              fluid: 'tconstruct:molten_uranium',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:uranium_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}uranium_bee`
          },
          {
              fluid: 'tconstruct:molten_zinc',
              fluid_amount: 1296,
              casts: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:stone_bee' }).weakNBT().toJson()],
              cast_consumed: true,
              output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:zinc_bee' }).toJson(),
              cooling_time: 120,
              id: `${id_prefix}zinc_bee`
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
