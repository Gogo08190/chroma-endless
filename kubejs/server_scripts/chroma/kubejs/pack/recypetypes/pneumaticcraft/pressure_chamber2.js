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
        },
        {
            ingredients: [
                Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:compressed_iron"}').weakNBT(),
                Item.of('kubejs:creative_catalyst', 4),
                Item.of('kubejs:chroma_matter', 4),
                Item.of('kubejs:advanced_extreme_circuit_board', 32),
                Item.of('pneumaticcraft:advanced_pressure_tube', 64),
                Item.of('pneumaticcraft:advanced_liquid_compressor', 5),
                Item.of('pneumaticcraft:advanced_air_compressor', 5),
                Item.of('pneumaticcraft:flux_compressor', 5),
                Item.of('pneumaticcraft:pneumatic_dynamo', 5),
                Item.of('pneumaticcraft:pressure_gauge', 5),
                Item.of('extendedcrafting:ultimate_singularity', 1)
            ],
            pressure: 12.0,
            output: [Item.of('pneumaticcraft:creative_compressor', 1)],
            id: `${id_prefix}creative_compressor`
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
