onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/tconstruct/ore_melting/';
    const recipes = [
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'envirocore:ionite_crystal'
            },
            result: {
                fluid: 'kubejs:molten_ionite',
                amount: 72
            },
            temperature: 1400,
            time: 81,
            id: `${id_prefix}molten_ionite`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'botania:mana_diamond'
            },
            result: {
                fluid: 'kubejs:molten_mana_diamond',
                amount: 72
            },
            temperature: 1400,
            time: 81,
            id: `${id_prefix}molten_mana_diamond`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'minecraft:nether_star'
            },
            result: {
                fluid: 'kubejs:molten_nether_star',
                amount: 72
            },
            temperature: 1400,
            time: 81,
            id: `${id_prefix}molten_nether_star`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'minecraft:blaze_rod'
            },
            result: {
                fluid: 'tconstruct:blazing_blood',
                amount: 100
            },
            temperature: 1400,
            time: 81,
            id: `${id_prefix}blazing_blood_from_blaze_rod`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'minecraft:blaze_rod'
            },
            result: {
                fluid: 'tconstruct:blazing_blood',
                amount: 10
            },
            temperature: 750,
            time: 81,
            id: `${id_prefix}blazing_blood_from_blaze_rod`
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                item: 'botania:blaze_block'
            },
            result: {
                fluid: 'tconstruct:blazing_blood',
                amount: 90
            },
            temperature: 900,
            time: 81,
            id: `${id_prefix}blazing_blood_from_blaze_mesh`
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
