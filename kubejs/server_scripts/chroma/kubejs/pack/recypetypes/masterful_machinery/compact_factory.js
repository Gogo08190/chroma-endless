onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/compact_factory/';
    const recipes = [

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'compact_factory';
        recipe.controllerId = 'compactfactory';
        event.custom(recipe).id(recipe.id);
    });
});
