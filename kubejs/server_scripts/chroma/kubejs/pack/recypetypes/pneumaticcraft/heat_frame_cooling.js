onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/heat_frame_cooling/';

    var data = {
        recipes: [
            {
                input: { item: 'industrialforegoing:dryrubber' },
                output: { item: 'industrialforegoing:plastic' },
                max_temp: 385,
                bonus_output: { multiplier: 0.085, limit: 0.1 },
                id: 'industrialforegoing:plastic',
            }
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
