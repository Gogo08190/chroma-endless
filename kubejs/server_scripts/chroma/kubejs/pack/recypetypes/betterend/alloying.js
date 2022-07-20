onEvent('recipes', (event) => {
    var data =
    {
        recipes:
            [
                {
                    ingredients: [{ item: 'architects_palette:ender_pearl_block' }, { item: 'emendatusenigmatica:steel_ingot' }],
                    result: 'betterendforge:terminite_ingot',
                    experience: 20,
                    smelttime: 500
                },
                {
                    ingredients: [{ item: 'minecraft:netherite_block' }, { item: 'betterendforge:terminite_ingot' }],
                    result: 'betterendforge:aeternium_ingot',
                    experience: 25,
                    smelttime: 1000
                },
            ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'betterendforge:alloying',
            ingredients: recipe.ingredients,
            result: recipe.result,
            experience: recipe.experience,
            smelttime: recipe.smelttime
        });
    });
});
