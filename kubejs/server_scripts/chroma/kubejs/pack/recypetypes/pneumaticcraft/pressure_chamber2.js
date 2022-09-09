onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            ingredients: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:coal_bee' }).weakNBT().toJson()
            ],
            pressure: 2.0,
            output: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:graphite_bee' }).toResultJson()],
            id: `${id_prefix}graphite_bee`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.ingredients,
                pressure: recipe.pressure,
                results: recipe.output
            })
            .id(recipe.id);
    });
});
