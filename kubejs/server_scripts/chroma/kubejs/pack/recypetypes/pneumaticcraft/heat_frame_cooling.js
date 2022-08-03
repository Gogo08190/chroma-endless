onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/heat_frame_cooling/';

    var data = {
        recipes: [
            {
                input: { item: 'industrialforegoing:dryrubber' },
                output: { item: 'industrialforegoing:plastic' },
                max_temp: 273,
                bonus_output: { multiplier: 0.01, limit: 0.75 },
                id: 'industrialforegoing:plastic',
            },
            {
                input: { item: 'kubejs:unstable_draconium_ingot' },
                output: { item: 'draconicevolution:draconium_ingot' },
                max_temp: 273,
                bonus_output: { multiplier: 0.01, limit: 0.50 },
                id: `${id_prefix}draconium_ingot`,
            },
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'pneumaticcraft:heat_frame_cooling',
            input: recipe.input,
            max_temp: recipe.max_temp,
            result: recipe.output,
            bonus_output: recipe.bonus_output
        }).id(recipe.id);
    });
});
