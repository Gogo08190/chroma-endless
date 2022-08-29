onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'wstweaks:lava_blade',
            pattern: [' BS', 'RNR', 'HB '],
            key: {
                B: 'tconstruct:blazing_bone',
                S: 'betterendforge:aeternium_sword_blade',
                R: '#forge:rods/blaze',
                H: 'betterendforge:aeternium_sword_handle',
                N: 'extendedcrafting:nether_star_block'
            },
            id: 'wstweaks:blaze_blade'
        },
        {
            output: 'wstweaks:blaze_blade',
            pattern: [' BS', 'RNR', 'HB '],
            key: {
                B: 'tconstruct:blazing_bone',
                S: 'betterendforge:aeternium_sword_blade',
                R: 'minecraft:lava_bucket',
                H: 'betterendforge:aeternium_sword_handle',
                N: 'extendedcrafting:nether_star_block'
            },
            id: 'wstweaks:lava_blade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
