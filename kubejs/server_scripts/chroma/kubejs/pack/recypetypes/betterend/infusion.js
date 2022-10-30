onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/betterendforge/infusion/';
    var data = {
        recipes: [
            {
                input: 'rftoolsutility:crafter3',
                output: 'extendedcrafting:ender_crafter',
                catalysts: [
                    { index: 0, item: 'rftoolsbase:infused_enderpearl' },
                    { index: 1, item: 'betterendforge:aeternium_ingot' },
                    { index: 2, item: 'betterendforge:eternal_crystal' },
                    { index: 3, item: 'extendedcrafting:ender_ingot' },
                    { index: 4, item: 'emendatusenigmatica:enderium_gear' },
                    { index: 5, item: 'extendedcrafting:ender_ingot' },
                    { index: 6, item: 'betterendforge:eternal_crystal' },
                    { index: 7, item: 'betterendforge:aeternium_ingot' }
                ],
                time: 250,
                id: 'extendedcrafting:ender_crafter'
            },
            {
                input: 'occultism:otherstone_pedestal',
                output: 'extendedcrafting:ender_alternator',
                catalysts: [
                    { index: 0, item: 'betterendforge:eternal_crystal' },
                    { index: 2, item: 'extendedcrafting:ender_ingot' },
                    { index: 3, item: 'extendedcrafting:ender_ingot' },
                    { index: 4, item: 'emendatusenigmatica:enderium_gear' },
                    { index: 5, item: 'extendedcrafting:ender_ingot' },
                    { index: 6, item: 'extendedcrafting:ender_ingot' }
                ],
                time: 250,
                id: 'extendedcrafting:ender_alternator'
            },
            {
                input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:ender_bee' }).weakNBT().toJson(),
                output: {
                  id: 'resourcefulbees:bee_jar',
                  Count: 1,
                  tag: {
                    Entity: 'resourcefulbees:thallasium_bee'
                  }
                },
                catalysts: [
                    { index: 0, item: 'betterendforge:aurora_crystal' },
                    { index: 1, tag: 'forge:storage_blocks/thallasium' },
                    { index: 2, item: 'betterendforge:aurora_crystal' },
                    { index: 3, tag: 'forge:storage_blocks/thallasium' },
                    { index: 4, item: 'betterendforge:aurora_crystal' },
                    { index: 5, tag: 'forge:storage_blocks/thallasium' },
                    { index: 6, item: 'betterendforge:aurora_crystal' },
                    { index: 7, tag: 'forge:storage_blocks/thallasium' }
                ],
                time: 250,
                id: `${id_prefix}thallasium_bee`
            },
            {
                input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:thallasium_bee' }).weakNBT().toJson(),
                output: {
                  id: 'resourcefulbees:bee_jar',
                  Count: 1,
                  tag: {
                    Entity: 'resourcefulbees:terminite_bee'
                  }
                },
                catalysts: [
                    { index: 0, item: 'betterendforge:smaragdant_crystal' },
                    { index: 1, tag: 'forge:storage_blocks/terminite' },
                    { index: 2, tag: 'forge:storage_blocks/steel' },
                    { index: 3, tag: 'forge:storage_blocks/terminite' },
                    { index: 4, item: 'betterendforge:smaragdant_crystal'  },
                    { index: 5, tag: 'forge:storage_blocks/terminite' },
                    { index: 6, tag: 'forge:storage_blocks/steel' },
                    { index: 7, tag: 'forge:storage_blocks/terminite' }
                ],
                time: 250,
                id: `${id_prefix}terminite_bee`
            },
            {
                input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:terminite_bee' }).weakNBT().toJson(),
                output: {
                  id: 'resourcefulbees:bee_jar',
                  Count: 1,
                  tag: {
                    Entity: 'resourcefulbees:aeternium_bee'
                  }
                },
                catalysts: [
                    { index: 0, item: 'betterendforge:eternal_crystal' },
                    { index: 1, tag: 'forge:storage_blocks/aeternium' },
                    { index: 2, item: 'betterendforge:eternal_crystal' },
                    { index: 3, tag: 'forge:storage_blocks/aeternium' },
                    { index: 4, item: 'betterendforge:eternal_crystal'  },
                    { index: 5, tag: 'forge:storage_blocks/aeternium' },
                    { index: 6, item: 'betterendforge:eternal_crystal' },
                    { index: 7, tag: 'forge:storage_blocks/aeternium' }
                ],
                time: 250,
                id: `${id_prefix}aeternium_bee`
            },
            {
                input: 'betterendforge:eternal_crystal',
                output: {
                  id: 'kubejs:deltaneck',
                  Count: 1
                },
                catalysts: [
                    { index: 0, item: 'tconstruct:hepatizon_block' },
                    { index: 1, item: 'allthemodium:allthemodium_ingot' },
                    { index: 2, item: 'betterendforge:aeternium_ingot' },
                    { index: 3, item: 'create:electron_tube' },
                    { index: 4, item: 'tconstruct:hepatizon_block' },
                    { index: 5, item: 'allthemodium:allthemodium_ingot' },
                    { index: 6, item: 'betterendforge:aeternium_ingot' },
                    { index: 7, item: 'create:precision_mechanism' }
                ],
                time: 250,
                id: `${id_prefix}deltaneck`
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:infusion',
                input: Ingredient.of(recipe.input).toJson(),
                output: recipe.output,
                time: recipe.time,
                catalysts: recipe.catalysts
            })
            .id(recipe.id);
    });
});
