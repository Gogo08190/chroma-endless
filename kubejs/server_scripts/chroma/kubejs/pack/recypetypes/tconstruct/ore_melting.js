onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/ore_melting/';
    const recipes = [
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                tag: 'forge:ores/regalium'
            },
            result: {
                fluid: 'materialis:molten_regalium',
                amount: 144
            },
            temperature: 620,
            time: 81,
            byproducts: [
                {
                    fluid: 'materialis:molten_utherium',
                    amount: 48
                }
            ],
            id: 'materialis:smeltery/melting/metal/regalium/ore'
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'envirocore:ionite_crystal'
            },
            result: {
                fluid: 'kubejs:molten_ionite',
                amount: 144
            },
            temperature: 1400,
            time: 81,
            byproducts: [
                {
                    fluid: 'kubejs:molten_ionite',
                    amount: 48
                }
            ],
            id: `${id_prefix}molten_ionite`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'botania:mana_diamond'
            },
            result: {
                fluid: 'kubejs:molten_mana_diamond',
                amount: 144
            },
            temperature: 1400,
            time: 81,
            byproducts: [
                {
                    fluid: 'kubejs:molten_mana_diamond',
                    amount: 48
                }
            ],
            id: `${id_prefix}molten_mana_diamond`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'minecraft:nether_star'
            },
            result: {
                fluid: 'kubejs:molten_nether_star',
                amount: 144
            },
            temperature: 1400,
            time: 81,
            byproducts: [
                {
                    fluid: 'kubejs:molten_nether_star',
                    amount: 48
                }
            ],
            id: `${id_prefix}molten_nether_star`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:ore_melting',
                ingredient: recipe.ingredient,
                result: recipe.result,
                temperature: recipe.temperature,
                time: recipe.time,
                byproducts: recipe.byproducts
            })
            .id(recipe.id);
    });
});
