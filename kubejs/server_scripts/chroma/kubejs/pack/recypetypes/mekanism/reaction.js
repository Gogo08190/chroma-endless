onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/reaction';

    /*{
        itemInput: { amount: 1, ingredient: { item: '' } },
        fluidInput: { amount: 10, fluid: 'minecraft:water' },
        gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
        energyRequired: 100,
        duration: 2000,
        itemOutput: { item: '' },
        gasOutput: { gas: 'mekanism:ethene', amount: 100 },
        id: ''
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        };
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired;
        }
        event.custom(constructed_recipe).id(recipe.id);
    });
});
