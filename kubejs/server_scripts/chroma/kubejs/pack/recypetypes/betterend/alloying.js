onEvent('recipes', (event) => {
    var data =
    {
        recipes:
            [
                {
                    ingredients: [{ item: 'emendatusenigmatica:enderium_ingot' }, { item: 'emendatusenigmatica:steel_ingot' }],
                    result: 'betterendforge:terminite_ingot',
                    experience: 20,
                    smelttime: 500
                },
                {
                    ingredients: [{ item: 'createdeco:netherite_sheet' }, { item: 'betterendforge:terminite_ingot' }],
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
