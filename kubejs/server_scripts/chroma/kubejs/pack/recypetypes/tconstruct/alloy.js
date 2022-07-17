onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/tconstruct/alloy/';
    const recipes = [
        {
            inputs: [
                { name: 'emendatusenigmatica:molten_lapis', amount: 1440 },
                { name: 'kubejs:molten_ionite', amount: 1000 },
                { name: 'resourcefulbees:xion_honey', amount: 500 },
                { name: 'kubejs:molten_mana_diamond', amount: 1152 },
                { name: 'tconstruct:molten_brass', amount: 576 },
                { name: 'tconstruct:molten_steel', amount: 576 },
                { name: 'kubejs:molten_nether_star', amount: 288 }
            ],
            result: { fluid: 'kubejs:mesophase', amount: 1000 },
            temperature: 1500,
            id: `${id_prefix}mesophase`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
