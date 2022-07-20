onEvent('recipes', (event) => {
    var data =
    {
        recipes:
            [
                {
                    ingredients: [{ tag: 'forge:ingots/gold' }, { tag: 'forge:ingots/silver' }],
                    result: Item.of('emendatusenigmatica:electrum_ingot', 2),
                    experience: 2,
                    smelttime: 300
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
