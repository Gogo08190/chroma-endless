onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/fluid_mixer/';
    const recipes = [
        {
            input1: { type: 'pneumaticcraft:fluid', fluid: 'kubejs:blessed_fluid', amount: 1000 },
            input2: { type: 'pneumaticcraft:fluid', fluid: 'kubejs:cursed_fluid', amount: 1000 },
            fluid_output: { fluid: 'kubejs:blursed_fluid', amount: 250 },
            pressure: 4.0,
            time: 300,
            id: `${id_prefix}blursed_fluid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fluid_mixer';
        event.custom(recipe).id(recipe.id);
    });
});
