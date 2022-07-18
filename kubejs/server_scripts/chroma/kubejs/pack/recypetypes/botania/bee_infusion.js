onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/bee_infusion/';

    const recipes = [
        {
            input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:manasteel_bee' }),
            mana: 99999,
            id: `${id_prefix}manasteel_bee_jar`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Item.of(recipe.input).weakNBT().toJson(),
            output: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});
