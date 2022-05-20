onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/tconstruct/casting_basin/';
    const recipes = [
        /*
        {
            "fluid": {
                "tag": "tconstruct:molten_diamond",
                "amount": 1296
            },
            "result": "minecraft:diamond_block",
            "cooling_time": 237
        }
        */
        {
            fluid: { name: 'thermal:redstone', amount: 1296 },
            result: Item.of('minecraft:redstone_block').toJson(),
            cooling_time: 200,
            id: `${id_prefix}redstone_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:casting_basin';
        event.custom(recipe).id(recipe.id);
    });
});
