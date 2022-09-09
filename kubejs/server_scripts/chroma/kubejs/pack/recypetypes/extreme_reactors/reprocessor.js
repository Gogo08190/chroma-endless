onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/extreme_reactor/reprocessor/';

    const recipes = [
      {
        waste: Item.of('resourcefulbees:bee_jar', { Entity:"resourcefulbees:uranium_bee" }).weakNBT().toJson(),
        fluid: { fluid: 'bigreactors:cyanite', count: 5000 },
        result: { item: 'resourcefulbees:cyanite_bee_spawn_egg' },
        id: `${id_prefix}cyanite_bee`
      },
      {
        waste: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:cyanite_bee' }).weakNBT().toJson(),
        fluid: { fluid: 'bigreactors:blutonium', count: 5000 },
        result: { item: 'resourcefulbees:blutonium_bee_spawn_egg' },
        id: `${id_prefix}blutonium_bee`
      },
      {
        waste: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:blutonium_bee' }).weakNBT().toJson(),
        fluid: { fluid: 'bigreactors:cyanite', count: 5000 },
        result: { item: 'resourcefulbees:ludicrite_bee_spawn_egg' },
        id: `${id_prefix}ludicrite_bee`
      },
      {
        waste: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:ludicrite_bee' }).weakNBT().toJson(),
        fluid: { fluid: 'bigreactors:verderium', count: 5000 },
        result: { item: 'resourcefulbees:ridiculite_bee_spawn_egg' },
        id: `${id_prefix}ridiculite_bee`
      },
      {
        waste: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:ridiculite_bee' }).weakNBT().toJson(),
        fluid: { fluid: 'bigreactors:rossinite', count: 5000 },
        result: { item: 'resourcefulbees:inanite_bee_spawn_egg' },
        id: `${id_prefix}inanite_bee`
      },
      {
        waste: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:blutonium_bee' }).weakNBT().toJson(),
        fluid: { fluid: 'bigreactors:magentite', count: 5000 },
        result: { item: 'resourcefulbees:magentite_bee_spawn_egg' },
        id: `${id_prefix}magentite_bee`
      }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'bigreactors:reprocessor',
                waste: { ingredient: recipe.waste },
                fluid: { fluid: recipe.fluid },
                result: recipe.result
            })
            .id(recipe.id);
    });
});
