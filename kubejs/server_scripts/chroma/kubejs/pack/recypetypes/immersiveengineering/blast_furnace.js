onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/blast_furnace/';
    const recipes = [
        {
            input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:steel_bee' }).toJson(),
            slag: 'thermal:slag',
            time: 5000,
            id: `${id_prefix}earth_slime_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .blast_furnace(recipe.output, recipe.input, recipe.slag)
            .time(recipe.time)
            .id(recipe.id);
    });
});
