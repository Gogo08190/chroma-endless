onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ tag: 'forge:dirt', count: 1, return_chance: 0 }],
            fluid: { fluid: 'kubejs:blessed_fluid' },
            output: {
                entries: [{ result: { item: 'miniutilities:blessed_earth', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.125,
            id: 'miniutilities:blessed_earth'
        },
        {
            inputs: [{ tag: 'forge:dirt', count: 1, return_chance: 0 }],
            fluid: { fluid: 'kubejs:cursed_fluid' },
            output: {
                entries: [{ result: { item: 'miniutilities:cursed_earth', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.125,
            id: 'miniutilities:cursed_earth'
        },
        {
            inputs: [{ tag: 'forge:dirt', count: 1, return_chance: 0 }],
            fluid: { fluid: 'kubejs:blursed_fluid' },
            output: {
                entries: [{ result: { item: 'miniutilities:blursed_earth', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.200,
            id: 'miniutilities:blursed_earth'
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: recipe.inputs,
            fluid: recipe.fluid,
            output: recipe.output,
            consume_fluid: recipe.consume_fluid,
        }).id(recipe.id);
    });
});
