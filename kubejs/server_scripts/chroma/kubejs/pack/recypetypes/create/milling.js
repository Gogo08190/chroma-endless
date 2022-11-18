onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/milling/';
    const recipes = [
        {
            input: 'minecraft:crying_obsidian',
            outputs: [Item.of('kubejs:crying_obsidian_dust', 2), Item.of('kubejs:crying_obsidian_dust', 1).withChance(0.75)],
            processingTime: 30,
            id: `${id_prefix}crying_obsidian_dust`
        },
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime).id(recipe.id);
    });
});
